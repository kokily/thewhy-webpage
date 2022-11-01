import type { ChangeEvent, MouseEvent } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import axios from 'axios';
import { readQuestionAPI } from '../../api/questions';

export default function useReadQuestion() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { status } = useSession();
  const { id }: { id?: string } = router.query;
  const [toggle, setToggle] = useState(false);
  const [reply, setReply] = useState('');
  const [modal, setModal] = useState(false);
  const [replyModal, setReplyModal] = useState(false);
  const { data, refetch } = useQuery(
    'readQuestion',
    () => readQuestionAPI(id),
    {
      enabled: true,
    }
  );

  const onChangeReply = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReply(e.target.value);
  };

  const onToggle = () => setToggle((prev) => !prev);

  const onRemoveQuestion = async () => {
    if (id) {
      if (status === 'authenticated') {
        await axios.delete(`/api/questions/remove/${id}`);
        await queryClient.clear();
        await router.replace('/questions');
      } else {
        const password = window.prompt('작성 시 비밀번호를 입력하세요');

        if (password) {
          await axios.delete(`/api/questions/remove/${id}`);
          await queryClient.clear();
          await router.replace('/questions');
        } else {
          return;
        }
      }
    }
  };

  const onAddReply = async (e: MouseEvent) => {
    e.preventDefault();

    if (id) {
      if (status === 'authenticated') {
        if ([reply].includes('')) {
          toast.error('답글을 작성 후 저장하세요');
          return;
        }

        await axios.post('/api/reply/add', {
          body: reply,
          questionId: id,
        });
        await queryClient.clear();
        await refetch();
      } else {
        return;
      }
    }
  };

  const onRemoveReply = async () => {
    if (id) {
      if (status === 'authenticated') {
        setReply('');
        setToggle(false);
        await axios.delete(`/api/reply/remove/${id}`);
        await queryClient.clear();
        await refetch();
      } else {
        return;
      }
    }
  };

  const onUpdateQuestion = async () => {
    if (id) {
      const password = window.prompt('작성 시 비밀번호를 입력하세요');

      if (password) {
        const valid = await axios.post(`/api/questions/valid/${id}`, {
          password,
        });

        if (!valid) {
          toast.error(valid.data);
          return;
        }

        router.push(`/questions/update/${id}`);
      } else {
        return;
      }
    }
  };

  // Question Remove Modal
  const onRemoveClick = () => {
    setModal(true);
  };

  const onConfirm = () => {
    setModal(false);
    onRemoveQuestion();
  };

  const onCancel = () => {
    setModal(false);
  };

  // Reply Remove Modal
  const onRemoveReplyClick = () => {
    setReplyModal(true);
  };

  const onReplyConfirm = () => {
    setReplyModal(false);
    onRemoveReply();
  };

  const onReplyCancel = () => {
    setReplyModal(false);
  };

  return {
    question: data,
    toggle,
    onToggle,
    reply,
    onChangeReply,
    modal,
    onRemoveClick,
    onConfirm,
    onCancel,
    replyModal,
    onRemoveReplyClick,
    onReplyConfirm,
    onReplyCancel,
    onAddReply,
    onUpdateQuestion,
    isAdmin: status === 'authenticated',
  };
}

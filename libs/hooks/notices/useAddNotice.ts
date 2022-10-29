import type { ChangeEvent, MouseEvent } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useQueryClient, useQuery } from 'react-query';
import axios from 'axios';
import { toast } from 'react-toastify';
import { readNoticeAPI } from '../../api/notices';

export default function useAddNotice() {
  const router = useRouter();
  const { id }: { id?: number } = router.query;
  const queryClient = useQueryClient();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useQuery('updateNotice', () => readNoticeAPI(id), {
    onSuccess: (data) => {
      setTitle(data.title);
      setBody(data.body);
    },
    onError: () => console.log(''),
  });

  const onChangeTitle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };

  const onChangeBody = (text: string) => {
    setBody(text);
  };

  const onBack = () => {
    router.back();
  };

  const onAddNotice = async (e: MouseEvent) => {
    e.preventDefault();

    if ([title, body].includes('')) {
      toast.error('빈 칸 없이 입력해주세요');
      return;
    }

    if (id) {
      const response = await axios.put(`/api/notices/update/${id}`, {
        title,
        body,
      });
      await queryClient.clear();
      await router.replace(`/notices/${response.data.id}`);
    } else {
      const response = await axios.post('/api/notices/add', {
        title,
        body,
      });
      await queryClient.clear();
      await router.replace(`/notices/${response.data.id}`);
    }
  };

  return {
    title,
    body,
    onChangeTitle,
    onChangeBody,
    onBack,
    onAddNotice,
  };
}

import type { ChangeEvent, MouseEvent } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { readQuestionAPI } from '../../api/questions';

export default function useAddQuestion() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { id }: { id?: string } = router.query;
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
    title: '',
    body: '',
    phone: '',
    email: '',
  });
  const { username, password, title, body, phone, email } = inputs;
  const [agree, setAgree] = useState(false);
  useQuery('updateQuestion', () => readQuestionAPI(id), {
    onSuccess: (data) => {
      setInputs({
        username: data.username,
        password: '',
        title: data.title,
        body: data.body,
        phone: data.phone,
        email: data.email,
      });
    },
    onError: () => console.log(''),
  });

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onToggleAgree = () => {
    setAgree(!agree);
  };

  const onAddQuestion = async (e: MouseEvent) => {
    e.preventDefault();

    if ([username, password, title, body].includes('')) {
      toast.error('* 표시는 필수 작성해 주세요');
      return;
    }

    if (!agree) {
      toast.error('정보 제공에 동의해 주셔야 합니다.');
      return;
    }

    if (id) {
      const response = await axios.put(`/api/questions/update/${id}`, inputs);
      await queryClient.clear();
      await router.replace(`/questions/${response.data.id}`);
    } else {
      const response = await axios.post('/api/questions/add', inputs);
      await queryClient.clear();
      await router.replace(`/questions/${response.data.id}`);
    }
  };

  return {
    inputs,
    onChange,
    agree,
    onToggleAgree,
    onAddQuestion,
  };
}

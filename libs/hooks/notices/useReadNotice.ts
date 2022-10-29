import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';
import { readNoticeAPI } from '../../api/notices';

export default function useReadNotice() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { id }: { id?: number } = router.query;
  const { status } = useSession();
  const { data } = useQuery('readNotice', () => readNoticeAPI(id), {
    enabled: true,
  });
  const [modal, setModal] = useState(false);

  const onUpdateNotice = () => {
    router.push(`/notices/update/${id}`);
  };

  const onRemoveNotice = async (): Promise<void> => {
    if (status === 'authenticated') {
      await axios.delete(`/api/notices/remove/${id}`);
      await queryClient.clear();
      await router.replace('/notices');
    } else {
      return;
    }
  };

  const onRemoveClick = () => {
    setModal(true);
  };

  const onConfirm = () => {
    setModal(false);
    onRemoveNotice();
  };

  const onCancel = () => {
    setModal(false);
  };

  return {
    notice: data,
    onUpdateNotice,
    modal,
    onRemoveClick,
    onConfirm,
    onCancel,
    isAdmin: status === 'authenticated',
  };
}

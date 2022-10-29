import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { readStoryAPI } from '../../api/stories';

export default function useReadStory() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { status } = useSession();
  const { id }: { id?: string } = router.query;
  const { data } = useQuery('readStory', () => readStoryAPI(id), {
    enabled: true,
  });
  const [modal, setModal] = useState(false);

  const onUpdateStory = () => {
    router.push(`/stories/update/${id}`);
  };

  const onTag = (tagName: string) => {
    router.push(`/stories?tag=${tagName}`);
  };

  const onRemoveStory = async (): Promise<void> => {
    if (status === 'authenticated') {
      await axios.delete(`/api/stories/remove/${id}`);
      await queryClient.clear();
      await router.replace('/stories');
    } else {
      return;
    }
  };

  const onRemoveClick = () => {
    setModal(true);
  };

  const onConfirm = () => {
    setModal(false);
    onRemoveStory();
  };

  const onCancel = () => {
    setModal(false);
  };

  return {
    story: data,
    onUpdateStory,
    onTag,
    modal,
    onRemoveClick,
    onConfirm,
    onCancel,
    isAdmin: status === 'authenticated',
  };
}

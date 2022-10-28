import type { ChangeEvent, MouseEvent } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import axios from 'axios';
import { readStoryAPI } from '../../api/stories';
import { imageUpload } from '../../utils';

export default function useAddStory() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { id }: { id?: string } = router.query;
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  useQuery('updateStory', () => readStoryAPI(id), {
    onSuccess: (data) => {
      setTitle(data.title);
      setBody(data.body);
      setThumbnail(data.thumbnail);
      setTags(data.tags);
    },
    onError: () => console.log(''),
  });

  const onChangeTitle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };

  const onChangeBody = (text: string) => {
    setBody(text);
  };

  const onChangeTags = (nextTags: string[]) => {
    setTags(nextTags);
  };

  const onThumbnail = () => {
    const upload = document.createElement('input');

    upload.type = 'file';
    upload.onchange = async (e) => {
      if (!upload.files) return;

      const file = upload.files[0];
      const target = await imageUpload(file);

      setThumbnail(target);
    };
    upload.click();
  };

  const onBack = () => {
    router.back();
  };

  const onAddStory = async (e: MouseEvent) => {
    e.preventDefault();

    if ([title, body, thumbnail, tags].includes('')) {
      toast.error('빈 칸 없이 입력해 주세요');
      return;
    }

    if (id) {
      const response = await axios.put(`/api/stories/update/${id}`, {
        title,
        body,
        thumbnail,
        tags,
      });
      await queryClient.clear();
      await router.replace(`/stories/${response.data.id}`);
    } else {
      const response = await axios.post('/api/stories/add', {
        title,
        body,
        thumbnail,
        tags,
      });
      await queryClient.clear();
      await router.replace(`/stories/${response.data.id}`);
    }
  };

  return {
    title,
    body,
    thumbnail,
    tags,
    onChangeTitle,
    onChangeBody,
    onChangeTags,
    onThumbnail,
    onBack,
    onAddStory,
  };
}

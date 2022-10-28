import type { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import type { Story } from '@prisma/client';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import useLocalStorage from 'use-local-storage';
import { listStoresAPI } from '../../api/stories';
import useObserver from '../common/useObserver';

export default function useListStories() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [scrollY, setScrollY] = useLocalStorage('listStories', 0);
  const [search, setSearch] = useState('');
  const [tag, setTag] = useState('');
  const { data, fetchNextPage, refetch } = useInfiniteQuery(
    'listStories',
    ({ pageParam }) => listStoresAPI({ cursor: pageParam, title: search }),
    {
      getNextPageParam: (data) =>
        data && data.length === 12 ? data[data.length - 1].id : undefined,
    }
  );

  const stories = useMemo(() => {
    if (!data) {
      return [];
    }

    return ([] as Story[]).concat(...data.pages);
  }, [data]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearch = async (e: MouseEvent) => {
    e.preventDefault();
    await queryClient.clear();
    await refetch();
  };

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => {
    if (e.key === 'Enter') {
      onSearch(e);
    }
  };

  const onTag = async (tagName: string) => {
    await queryClient.clear();
    await setTag(tagName);
    await refetch();
  };

  const onReadStory = (id: string) => {
    router.push(`/stories/${id}`);
  };

  const onIntersect: IntersectionObserverCallback = ([entry]) => {
    entry.isIntersecting && fetchNextPage();
  };

  const { setTarget } = useObserver({ onIntersect });

  useEffect(() => {
    if (scrollY !== 0) window.scrollTo(0, Number(scrollY));
  }, []);

  return {
    stories,
    search,
    onChange,
    onSearch,
    onKeyPress,
    onTag,
    onReadStory,
    setTarget,
  };
}

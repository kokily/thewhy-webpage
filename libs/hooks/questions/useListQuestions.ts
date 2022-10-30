import type { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import type { Question } from '@prisma/client';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import useLocalStorage from 'use-local-storage';
import { listQuestionsAPI } from '../../api/questions';
import useObserver from '../common/useObserver';

export default function useListQuestions() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [scrollY, setScrollY] = useLocalStorage('listQuestions', 0);
  const [search, setSearch] = useState('');
  const { data, fetchNextPage, refetch } = useInfiniteQuery(
    'listQuestions',
    ({ pageParam }) => listQuestionsAPI({ title: search, cursor: pageParam }),
    {
      getNextPageParam: (data) =>
        data && data.length === 25 ? data[data.length - 1].id : undefined,
    }
  );

  const questions = useMemo(() => {
    if (!data) {
      return [];
    }

    return ([] as Question[]).concat(...data.pages);
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

  const onReadQuestion = (id: string) => {
    router.push(`/questions/${id}`);
  };

  const onIntersect: IntersectionObserverCallback = ([entry]) => {
    entry.isIntersecting && fetchNextPage();
  };

  const { setTarget } = useObserver({ onIntersect });

  useEffect(() => {
    if (scrollY !== 0) window.scrollTo(0, Number(scrollY));
  }, []);

  return {
    questions,
    search,
    onChange,
    onSearch,
    onKeyPress,
    onReadQuestion,
    setTarget,
  };
}

import type { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import type { Notice } from '@prisma/client';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import useLocalStorage from 'use-local-storage';
import { listNoticesAPI } from '../../api/notices';
import useObserver from '../common/useObserver';

export default function useListNotices() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [scrollY, setScrollY] = useLocalStorage('listNotices', 0);
  const [search, setSearch] = useState('');
  const { data, fetchNextPage, refetch } = useInfiniteQuery(
    'listNotices',
    ({ pageParam }) => listNoticesAPI({ cursor: pageParam, title: search }),
    {
      getNextPageParam: (data) =>
        data && data.length === 25 ? data[data.length - 1].id : undefined,
    }
  );

  const notices = useMemo(() => {
    if (!data) {
      return [];
    }

    return ([] as Notice[]).concat(...data.pages);
  }, [data]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearch = async (e: MouseEvent) => {
    await queryClient.clear();
    await refetch();
  };

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => {
    if (e.key === 'Enter') {
      onSearch(e);
    }
  };

  const onReadNotice = (id: number) => {
    setScrollY(window.scrollY);
    router.push(`/notices/${id}`);
  };

  const onIntersect: IntersectionObserverCallback = ([entry]) => {
    entry.isIntersecting && fetchNextPage();
  };

  const { setTarget } = useObserver({ onIntersect });

  useEffect(() => {
    if (scrollY !== 0) window.scrollTo(0, Number(scrollY));
  }, []);

  return {
    notices,
    search,
    onChange,
    onSearch,
    onKeyPress,
    onReadNotice,
    setTarget,
  };
}

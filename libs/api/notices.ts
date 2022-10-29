import type { Notice } from '@prisma/client';
import axios from 'axios';
import qs from 'qs';

export type ListNoticesQuery = {
  title?: string;
  cursor?: string;
};

export async function listNoticesAPI(query: ListNoticesQuery) {
  const queryString = qs.stringify(query);
  const response = await axios.get<Array<Notice>>(`/notices?${queryString}`);
  return response.data;
}

export async function readNoticeAPI(id: number) {
  const response = await axios.get<Notice>(`/notices/${id}`);
  return response.data;
}

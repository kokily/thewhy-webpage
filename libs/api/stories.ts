import { Story } from '@prisma/client';
import axios from 'axios';
import qs from 'qs';

// List Stories API
export type ListStoriesQuery = {
  title?: string;
  tag?: string;
  cursor?: string;
};

export async function listStoresAPI(query: ListStoriesQuery) {
  const queryString = qs.stringify(query);
  const response = await axios.get<Array<Story>>(`/api/stories?${queryString}`);
  return response.data;
}

export async function readStoryAPI(id: string) {
  const response = await axios.get<Story>(`/api/stories/${id}`);
  return response.data;
}

import type { Question } from '@prisma/client';
import type { ListQuestionQuery } from '../../pages/api/questions';
import axios from 'axios';
import qs from 'qs';

export async function listQuestionsAPI(query: ListQuestionQuery) {
  const queryString = qs.stringify(query);
  const response = await axios.get<Array<Question>>(
    `/api/questions?${queryString}`
  );
  return response.data;
}

export async function readQuestionAPI(id: string) {
  const response = await axios.get<Question>(`/api/questions/${id}`);
  return response.data;
}

import type { NextApiRequest, NextApiResponse } from 'next';
import type { Question } from '@prisma/client';
import db from '../../../libs/db';

export type ListQuestionQuery = {
  title?: string;
  username?: string;
  phone?: string;
  email?: string;
  cursor?: string;
};

export default async function listQuestionsHandle(
  req: NextApiRequest,
  res: NextApiResponse<Question[]>
) {
  const { title, username, phone, email, cursor }: ListQuestionQuery =
    req.query;

  if (req.method === 'GET') {
    const cursorObj = cursor === '' ? undefined : { id: cursor };
    const limit = 25;

    const questions = await db.question.findMany({
      where: {
        title: { contains: title },
        username: { contains: username },
        phone: { contains: phone },
        email: { contains: email },
      },
      skip: cursor !== '' ? 1 : 0,
      cursor: cursorObj,
      take: limit,
    });

    return res.status(200).json(questions);
  }
}

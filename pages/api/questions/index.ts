import type { NextApiRequest, NextApiResponse } from 'next';
import type { Question } from '@prisma/client';
import db from '../../../libs/db';

export default async function listQuestionsHandle(
  req: NextApiRequest,
  res: NextApiResponse<Question[]>
) {
  if (req.method === 'GET') {
    const title = req.query.title as string;
    const username = req.query.username as string;
    const phone = req.query.username as string;
    const email = req.query.email as string;
    const cursor = req.query.cursor ?? '';
    const cursorObj = cursor === '' ? undefined : { id: cursor.toString() };
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

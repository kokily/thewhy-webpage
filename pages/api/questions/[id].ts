import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../libs/db';

export default async function readQuestionHandle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const questionId = req.query.id as string;

  if (req.method === 'GET') {
    const question = await db.question.findUnique({
      where: { id: questionId },
    });

    if (!question) {
      res.status(404).json({ message: '해당 문의글이 존재하지 않습니다.' });
    }

    res.status(200).json(question);
  }
}

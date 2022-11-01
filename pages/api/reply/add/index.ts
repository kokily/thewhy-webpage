import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../../libs/db';

export default async function addReplyHandle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  type RequestType = {
    body: string;
    questionId: string;
  };

  const { body, questionId }: RequestType = req.body;

  if (req.method === 'POST') {
    const originalQuestion = await db.question.findUnique({
      where: { id: questionId },
    });

    if (!originalQuestion) {
      res.status(404).json({ message: '작성된 문의글이 없습니다.' });
    }

    const question = await db.question.update({
      where: { id: questionId },
      data: {
        ...originalQuestion,
        reply: body,
        updatedAt: new Date(),
      },
    });

    res.status(200).json(question);
  }
}

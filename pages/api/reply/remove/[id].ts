import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../../libs/db';

export default async function removeReplyHandle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const questionId = req.query.id as string;

  if (req.method === 'DELETE') {
    const question = await db.question.update({
      where: { id: questionId },
      data: {
        reply: '',
        updatedAt: new Date(),
      },
    });

    res.status(200).json(question);
  }
}

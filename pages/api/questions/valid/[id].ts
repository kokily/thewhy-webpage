import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import db from '../../../../libs/db';

export default async function validQuestionHandle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const questionId = req.query.id as string;
  const password = req.body.password as string;

  if (req.method === 'POST') {
    const question = await db.question.findUnique({
      where: { id: questionId },
    });

    if (!question) {
      res.status(404).json({ message: '해당 문의글이 존재하지 않습니다.' });
    }

    const valid = await bcrypt.compare(password, question.password);

    if (!valid) {
      res
        .status(403)
        .json({ message: '작성 시 비밀번호가 일치하지 않습니다.' });
    }

    res.status(200).json({ result: true });
  }
}

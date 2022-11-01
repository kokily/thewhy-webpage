import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import db from '../../../../libs/db';

export default async function removeQuestionHandle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;
  const password = req.query.password as string;

  if (req.method === 'DELETE') {
    if (password) {
      const question = await db.question.findUnique({
        where: { id },
      });

      const valid = await bcrypt.compare(password, question.password);

      if (!valid) {
        res.status(403).json({ message: '입력하신 비밀번호가 틀렸습니다' });
      }

      await db.question.delete({
        where: { id },
      });

      res.status(200).json({ message: '삭제되었습니다' });
    } else {
      await db.question.delete({
        where: { id },
      });

      res.status(200).json({ message: '삭제되었습니다' });
    }
  }
}

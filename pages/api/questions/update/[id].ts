import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import db from '../../../../libs/db';

export default async function updateQuestionHandle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  type RequestType = {
    username: string;
    password: string;
    title: string;
    body: string;
    phone?: string;
    email?: string;
  };

  const { username, password, title, body, phone, email }: RequestType =
    req.body;
  const id = req.query.id as string;

  if (req.method === 'PUT') {
    const question = await db.question.findUnique({
      where: { id: id },
    });

    if (!question) {
      res.status(404).json({ message: '존재하지 않는 문의 글입니다.' });
    }

    const valid = await bcrypt.compare(password, question.password);

    if (!valid) {
      res.status(403).json({ message: '작성 시 비밀번호가 틀렸습니다.' });
    }

    await db.question.update({
      where: { id },
      data: {
        username,
        password: await bcrypt.hash(password, 10),
        title,
        body,
        phone,
        email,
        updatedAt: new Date(),
      },
    });

    res.status(200).json({ message: '삭제되었습니다' });
  }
}

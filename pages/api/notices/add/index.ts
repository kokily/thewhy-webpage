import type { NextApiRequest, NextApiResponse } from 'next';
import type { Notice } from '@prisma/client';
import db from '../../../../libs/db';

export default async function addNoticeHandle(
  req: NextApiRequest,
  res: NextApiResponse<Notice>
) {
  type RequestType = {
    title: string;
    body: string;
  };

  const { title, body }: RequestType = req.body;

  if (req.method === 'POST') {
    const notice = await db.notice.create({
      data: {
        title,
        body,
      },
    });

    res.status(200).json(notice);
  }
}

import type { NextApiRequest, NextApiResponse } from 'next';
import type { Notice } from '@prisma/client';
import db from '../../../../libs/db';

export default async function updateNoticeHandle(
  req: NextApiRequest,
  res: NextApiResponse<Notice>
) {
  type RequestType = {
    title: string;
    body: string;
  };

  const noticeId = req.query.id as string;
  const { title, body }: RequestType = req.body;

  if (req.method === 'put') {
    const notice = await db.notice.update({
      where: { id: parseInt(noticeId) },
      data: {
        title,
        body,
        updatedAt: new Date(),
      },
    });

    res.status(200).json(notice);
  }
}

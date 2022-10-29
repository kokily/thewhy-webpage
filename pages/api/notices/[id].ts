import type { NextApiRequest, NextApiResponse } from 'next';
import type { Notice } from '@prisma/client';
import db from '../../../libs/db';

export default async function readNoticeHandle(
  req: NextApiRequest,
  res: NextApiResponse<Notice>
) {
  const noticeId = req.query.id as string;

  if (req.method === 'GET') {
    const notice = await db.notice.findUnique({
      where: { id: parseInt(noticeId) },
    });

    if (!notice) {
      res.status(404);
    }

    res.status(200).json(notice);
  }
}

import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../libs/db';

export default async function readNoticeHandle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const noticeId = req.query.id as string;

  try {
    const notice = await db.notice.findUnique({
      where: { id: parseInt(noticeId) },
    });

    if (!notice) {
      res.status(404).json({ message: '해당 공지사항이 없습니다.' });
    }

    res.status(200).json(notice);
  } catch (err) {
    res.status(500).json(err);
  }
}

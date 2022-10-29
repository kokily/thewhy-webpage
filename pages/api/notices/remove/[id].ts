import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../../libs/db';

export default async function removeNoticeHandle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const noticeId = req.query.id as string;

  if (req.method === 'DELETE') {
    await db.notice.delete({
      where: { id: parseInt(noticeId) },
    });

    res.status(204);
  }
}

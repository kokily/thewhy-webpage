import type { NextApiRequest, NextApiResponse } from 'next';
import type { Notice } from '@prisma/client';
import db from '../../../libs/db';

export default async function listNoticesHandle(
  req: NextApiRequest,
  res: NextApiResponse<Notice[]>
) {
  if (req.method === 'GET') {
    const title = req.query.title as string;
    const cursor = req.query.cursor ?? '';
    const cursorObj =
      cursor === '' ? undefined : { id: parseInt(cursor.toString()) };
    const limit = 25;

    const notices = await db.notice.findMany({
      where: {
        title: {
          contains: title,
        },
      },
      skip: cursor !== '' ? 1 : 0,
      cursor: cursorObj,
      take: limit,
    });

    return res.status(200).json(notices);
  }
}

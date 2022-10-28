import type { NextApiRequest, NextApiResponse } from 'next';
import type { Story } from '@prisma/client';
import db from '../../../libs/db';

export default async function getListStoriesHandle(
  req: NextApiRequest,
  res: NextApiResponse<Story[]>
) {
  if (req.method === 'GET') {
    const title = req.query.title as string;
    const cursor = req.query.cursor ?? '';
    const cursorObj = cursor === '' ? undefined : { id: cursor as string };
    const limit = 12;

    const stories = await db.story.findMany({
      where: {
        title: {
          contains: title,
        },
      },
      skip: cursor !== '' ? 1 : 0,
      cursor: cursorObj,
      take: limit,
    });

    return res.status(200).json(stories);
  }
}

import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../../libs/db';

export default async function removeStoryHandle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const storyId = req.query.id as string;

  try {
    await db.story.delete({
      where: { id: storyId },
    });

    res.status(200).json({ message: '삭제되었습니다' });
  } catch (err) {
    res.status(500).json(err);
  }
}

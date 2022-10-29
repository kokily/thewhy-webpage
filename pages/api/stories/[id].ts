import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../libs/db';

export default async function readStoryHandle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const storyId = req.query.id as string;
  try {
    const story = await db.story.findUnique({
      where: { id: storyId },
    });

    if (!story) {
      res.status(404).json({ message: '해당 스토리가 존재하지 않습니다.' });
    }

    res.status(200).json(story);
  } catch (err) {
    res.status(500).json(err);
  }
}

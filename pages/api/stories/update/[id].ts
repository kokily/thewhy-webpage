import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../../libs/db';

export default async function updateStoryHandle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  type RequestType = {
    title: string;
    body: string;
    tags: string[];
    thumbnail: string;
  };

  const storyId = req.query.id as string;
  const { title, body, tags, thumbnail }: RequestType = req.body;

  if (storyId) {
    let overlapTags =
      tags.length === 0 ? [] : [...new Set(tags.map((tag) => tag.trim()))];
    const story = await db.story.update({
      where: { id: storyId },
      data: {
        title,
        body,
        thumbnail,
        tags: overlapTags,
        updatedAt: new Date(),
      },
    });
    res.json(story);
  } else {
    res.status(404).json({ message: '해당 스토리가 존재하지 않습니다.' });
  }
}

import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../../libs/db';

export default async function addStoryHandle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  type RequestType = {
    title: string;
    body: string;
    thumbnail: string;
    tags: string[];
  };

  const { title, body, thumbnail, tags }: RequestType = req.body;

  try {
    let overlapTags =
      tags.length === 0 ? [] : [...new Set(tags.map((tag) => tag.trim()))];

    const story = await db.story.create({
      data: {
        title,
        body,
        thumbnail,
        tags: overlapTags,
      },
    });

    res.status(200).json(story);
  } catch (err) {
    res.status(500).json(err);
  }
}

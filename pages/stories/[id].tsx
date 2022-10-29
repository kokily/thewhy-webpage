import type { GetServerSideProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import PageTemplate from '../../components/common/PageTemplate';
import ReadStory from '../../components/stories/ReadStory';
import db from '../../libs/db';

interface Props {
  title: string;
  description: string[];
}

const ReadStoryPage: NextPage<Props> = ({ title, description }) => {
  return (
    <>
      <NextSeo
        title={`${title} - 더와이컨설팅`}
        description={description ? description.toString() : undefined}
      />

      <PageTemplate>
        <ReadStory />
      </PageTemplate>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params.id as string;
  const story = await db.story.findUnique({
    where: { id },
  });
  const description = story.body
    .replace(/ /gi, '')
    .replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi, '')
    .substring(0, 50);

  return {
    props: {
      title: JSON.parse(JSON.stringify(story.title)),
      description: JSON.parse(JSON.stringify(description)),
    },
  };
};

export default ReadStoryPage;

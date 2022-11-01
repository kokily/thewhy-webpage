import type { GetServerSideProps, NextPage } from 'next';
import type { Question } from '@prisma/client';
import { NextSeo } from 'next-seo';
import PageTemplate from '../../components/common/PageTemplate';
import db from '../../libs/db';
import ReadQuestion from '../../components/questions/ReadQuestion';

interface Props {
  question: Question;
  description: string[];
}

const ReadQuestionPage: NextPage<Props> = ({ question, description }) => {
  return (
    <>
      <NextSeo
        title={`${question.title} - 더와이컨설팅`}
        description={description ? description.toString() : undefined}
      />

      <PageTemplate>
        <ReadQuestion />
      </PageTemplate>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const questionId = params.id as string;
  const question = await db.question.findUnique({
    where: { id: questionId },
  });
  const description = question.body
    .replace(/ /gi, '')
    .replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi, '')
    .substring(0, 50);

  return {
    props: {
      question: JSON.parse(JSON.stringify(question)),
      description: JSON.parse(JSON.stringify(description)),
    },
  };
};

export default ReadQuestionPage;

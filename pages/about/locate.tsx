import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Locate from '../../components/about/Locate';
import PageTemplate from '../../components/common/PageTemplate';

const LocatePage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="찾아오시는 길 - 더와이컨설팅"
        canonical="https://thewhy.kr/about/locate"
      />
      <PageTemplate>
        <Locate />
      </PageTemplate>
    </>
  );
};

export default LocatePage;

import styled from 'styled-components';
import CardsList from './LinkCardsList';

interface Props {
  links: MainLinkType[];
}

export default function HomeLinks({ links }: Props) {
  return (
    <Container>
      <TopContent>
        <Title>교육 프로그램</Title>
        <Lead>더와이 컨설팅에서 진행하는 맞춤화된 교육 프로그램입니다.</Lead>
      </TopContent>

      <CardsList links={links} />
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

const Title = styled.h2`
  font-family: '윤고딕360', sans-serif;
  font-size: 31px;
  font-weight: 300;
  line-height: 42px;
  color: #463884;
  margin: 0;
  margin-bottom: 0.5rem;
`;

const Lead = styled.p`
  word-break: keep-all;
  font-family: '윤고딕310';
  font-size: 24px;
  font-weight: 300;
  letter-spacing: -0.05rem;
  color: #808080;
  margin: 0;
`;

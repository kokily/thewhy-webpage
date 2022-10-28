import styled from 'styled-components';
import { media } from '../../styles';
import Contents from './about/Contents';

export default function About() {
  return (
    <Container>
      <img src="/images/about/about.png" alt="더와이 컨설팅 소개" />

      <Contents />

      <Bottom>
        <Title>더와이컨설팅이 가는 길</Title>
        <img src="/images/about/about02.png" alt="더와이컨설팅 소개2" />
      </Bottom>
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100%;
    ${media.large} {
      max-width: 760px;
    }
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.5rem;
`;

const Title = styled.h4`
  font-family: 윤고딕, sans-serif;
  font-size: 31px;
  font-weight: 600;
  color: rgb(70, 56, 132);
  &:after {
    content: '';
    display: block;
    width: 120px;
    border-bottom: 3px solid rgb(51, 154, 240);
    margin: 20px auto;
  }
`;

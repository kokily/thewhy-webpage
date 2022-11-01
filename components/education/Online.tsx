import styled from 'styled-components';
import { media } from '../../styles';
import OnelineContent from './common/OnlineContent';
import ServiceFooter from './common/ServiceFooter';

export default function Online() {
  return (
    <Container>
      <img src="/images/education/online.png" alt="온라인 교육" />

      <OnlineHeader>
        <Title>온라인(On-Line) 프로그램</Title>
        <Pane>
          실시간 그리고 맞춤형 형태로 고객사가 원하는 교육 프로그램을 개발하고
          진행 가능합니다.
          <br />
          언제 어디서든 장소의 제약 없이 우리의 행복한 성장을 원하는 곳에
          더와이컨설팅이 온라인 교육을 진행합니다.
        </Pane>
      </OnlineHeader>

      <OnelineContent />

      <ServiceFooter />
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1110px;
  img {
    width: 100%;
    ${media.large} {
      max-width: 760px;
    }
  }
`;

const OnlineHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 3.5rem;
  max-width: 720px;
  ${media.medium} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const Title = styled.h2`
  font-family: '윤고딕330';
  font-size: 26px;
  font-weight: 600;
  color: #493586;
`;

const Pane = styled.p`
  font-family: '윤고딕320';
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  color: #777;
  word-break: keep-all;
  margin: 0 0 20px;
  white-space: pre-wrap;
`;

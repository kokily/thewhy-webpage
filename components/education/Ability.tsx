import styled from 'styled-components';
import { media } from '../../styles';
import ServiceFooter from './common/ServiceFooter';

export default function Ability() {
  return (
    <Container>
      <img src="/images/education/edu05.png" alt="직무역량 강화" />

      <AbilityHeader>
        <Title>직무역량강화</Title>
        <Pane>
          직무분석은 직무의 역할을 분석하는 것입니다. 직무를 수행하면서 달성해야
          하는 목표는 무엇이며, 목표 달성 가능성을 높여주는 다양한 요인들을 찾는
          과정입니다.
          <br />
          직무분석을 통해 직무수행자가 갖추어야 하는 역량은 무엇이며, 해당
          역량을 갖추기 위한 다양한 교육 프로그램이 도출됩니다.
          <br />
          직무분석을 통해 체계적인 교육훈련 프로그램을 도출하여 직무역량 강화에
          꼭 필요한 교육훈련을 제시합니다.
        </Pane>
      </AbilityHeader>

      <Contents>
        <img src="/images/education/ability.png" alt="직무역량 강화" />
      </Contents>

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

const AbilityHeader = styled.div`
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

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.5rem;
  max-width: 720px;
  width: 100%;
`;

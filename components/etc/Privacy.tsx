import styled from 'styled-components';
import { media } from '../../styles';
import OutlineItem from './common/OutlineItem';
import {
  First,
  Second,
  Third,
  Forth,
  Fifth,
  Sixth,
  Seventh,
  Eighth,
} from './privacy/privacy_data';

export default function Privacy() {
  return (
    <Container>
      <Preface>
        더와이컨설팅은 이용자의 '동의를 기반으로 개인정보를 수집·이용 및
        제공하고 있으며, 이용자의 권리(개인정보 자기결정권)를 적극적으로
        보장'하며, 대한민국의 개인정보보호 규정 및 가이드라인을 준수하고
        있습니다.
        <small>
          본 개인정보처리방침은 더와이컨설팅 홈페이지 내 '교육문의' 서비스
          이용을 하고자 하는 이용자(이하 '이용자')에 적용됩니다.
        </small>
      </Preface>

      <Contents>
        <OutlineItem outline={First} />
        <OutlineItem outline={Second} />
        <OutlineItem outline={Third} />
        <OutlineItem outline={Forth} />
        <OutlineItem outline={Fifth} />
        <OutlineItem outline={Sixth} />
        <OutlineItem outline={Seventh} />
        <OutlineItem outline={Eighth} />
      </Contents>
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1110px;
  width: 100%;
  padding-left: 40px;
  padding-right: 40px;
  ${media.small} {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const Preface = styled.div`
  font-family: 'Poppins', Arial, sans-serif;
  color: #777;
  font-weight: 300;
  font-size: 1.2em;
  letter-spacing: -0.05em;
  line-height: 1.8rem;
  margin: 0 0 20px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  text-align: center;
  word-break: keep-all;
  small {
    margin-top: 1rem;
    display: block;
  }
`;

const Contents = styled.div`
  width: 100%;
`;

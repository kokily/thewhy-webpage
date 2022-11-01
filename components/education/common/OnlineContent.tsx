import styled from 'styled-components';
import { media } from '../../../styles';

export default function OnelineContent() {
  return (
    <Container>
      <Row>
        <Col>
          <img src="/images/education/online01.png" alt="Online Program" />
        </Col>

        <List>
          줌 (ZOOM), 웹엑스 (Webex) 등 익히 알려진 실시간 형태의
          <br />
          온라인 교육이 가능합니다.
        </List>
      </Row>

      <Row>
        <Col>
          <img
            src="/images/education/online02.png"
            alt="Online Program"
            style={{ maxWidth: '130px' }}
          />
        </Col>

        <List className="end">
          고객사의 요구 사항에 따라 동영상 형태의 교육 프로그램을
          <br />
          개발, 운영합니다.
        </List>
      </Row>
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.5rem;
  max-width: 720px;
  width: 100%;
  ul {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
    border-top: 2px solid rgb(73, 53, 134);
    font-family: 윤고딕320;
    font-size: 17px;
    color: #777;
    margin-top: 0;
    padding-top: 1.2rem;
    &.end {
      border-bottom: 2px solid rgb(73, 53, 134);
      padding-bottom: 1.2rem;
    }
    li {
      line-height: 1.6;
    }
  }
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  ${media.medium} {
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }
`;

const Col = styled.div`
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 100px;
    height: auto;
  }
`;

const List = styled.ul`
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
  border-top: 2px solid rgb(73, 53, 134);
  font-family: 윤고딕320;
  font-size: 17px;
  color: #777;
  margin-top: 0;
  padding-top: 1.2rem;
  &.end {
    border-bottom: 2px solid rgb(73, 53, 134);
    padding-bottom: 1.2rem;
  }
`;

const Item = styled.li`
  line-height: 1.6;
`;

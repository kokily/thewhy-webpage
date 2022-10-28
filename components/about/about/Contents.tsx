import { BrowserView, MobileView } from 'react-device-detect';
import styled from 'styled-components';
import { media } from '../../../styles';
import BrowserContent from './BrowserContent';
import MobileContent from './MobileContent';

export default function Contents() {
  return (
    <Container>
      <Layout className="text">
        <Title>Why The Y</Title>

        <BrowserView>
          <BrowserContent />
        </BrowserView>

        <MobileView>
          <MobileContent />
        </MobileView>
      </Layout>

      <ImageBox>
        <img src="/images/about/about01.png" alt="더와이컨설팅 소개01" />
      </ImageBox>
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3.5rem;
  ${media.large} {
    max-width: 760px;
  }
  ${media.medium} {
    max-width: 760px;
    width: 100%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    .text {
      flex: none !important;
      width: 100%;
    }
    .image {
      display: none;
    }
  }
`;

const Layout = styled.div`
  flex: 0 0 60%;
`;

const Title = styled.h2`
  font-family: '윤고딕320';
  font-size: 31px;
  font-weight: 600;
  font-style: normal;
  color: #463884;
  -webkit-animation-name: maskUp;
  animation-name: maskUp;
  animation-delay: 100ms;
  animation-duration: 1s;
`;

const ImageBox = styled.div`
  flex: 0 0 40%;
  height: auto;
`;

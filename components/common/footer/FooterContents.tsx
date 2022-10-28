import styled from 'styled-components';
import { media } from '../../../styles';
import FooterContentLeft from './FooterContentLeft';
import FooterContentRight from './FooterContentRight';

export default function FooterContents() {
  return (
    <Container>
      <Ribbon>
        <RibbonText>Get in Touch!</RibbonText>
      </Ribbon>

      <Contents>
        <FooterContentLeft />
        <FooterContentRight />
      </Contents>
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: block;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1110px;
`;

const Ribbon = styled.div`
  background: #0088cc;
  position: absolute;
  margin: -44px 0 0 0;
  padding: 10px 20px 6px 20px;
  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 7px;
    height: 0;
    top: 0;
    right: 100%;
    border-left-color: #005580;
    border-right-color: #005580;
    border-top: 16px solid transparent;
    border-right: 10px solid #646464;
  }
`;

const RibbonText = styled.span`
  color: #fff;
  font-size: 1.6em;
  font-family: 'DancingScript-Regular';
`;

const Contents = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  ${media.small} {
    display: block;
    text-align: center;
  }
`;

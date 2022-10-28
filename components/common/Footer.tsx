import styled from 'styled-components';
import FooterContents from './footer/FooterContents';
import FooterCopyright from './footer/FooterCopyright';

export default function Footer() {
  return (
    <Container>
      <FooterContents />
      <FooterCopyright />
    </Container>
  );
}

// Styles
const Container = styled.footer`
  display: block;
  background: #212529;
  width: 100%;
  border-top: 4px solid #212529;
  font-size: 0.9rem;
  padding: 0;
  clear: both;
  position: relative;
`;

import type { ReactNode } from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

interface Props {
  children: ReactNode;
}

export default function PageTemplate({ children }: Props) {
  return (
    <Container>
      <Layout>
        <Header />

        <ChildBox>{children}</ChildBox>
      </Layout>

      <Footer />
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1110px;
`;

const ChildBox = styled.main`
  display: block;
  width: 100%;
  margin-top: 208px;
  margin-bottom: 5rem;
  max-width: 1110px;
`;

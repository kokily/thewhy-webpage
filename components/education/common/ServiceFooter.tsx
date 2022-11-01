import styled from 'styled-components';

export default function ServiceFooter() {
  return (
    <Container>
      <img className="footer" src="/svg/footer.svg" alt="커뮤니케이션 교육" />
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  max-width: 720px;
  width: 100%;
  margin-top: 2.5rem;
`;

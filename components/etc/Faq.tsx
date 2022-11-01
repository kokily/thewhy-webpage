import styled from 'styled-components';
import Accordion from '../common/Accordion';

export default function Faq() {
  return (
    <Container>
      <h2>
        Frequently Asked <strong>Questions</strong>
      </h2>

      <Accordion title="title1" body="어코디언 1번 내용" />
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1110px;
  h2 {
    font-family: 'Poppins', Arial, sans-serif;
    font-weight: 400;
    strong {
      font-weight: 700;
    }
  }
`;

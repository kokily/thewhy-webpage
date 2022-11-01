import styled from 'styled-components';

interface Props {
  body: string;
}

export default function ReadQuestionBody({ body }: Props) {
  return (
    <Container>
      <Pane>{body}</Pane>
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  background: #f7f7f7;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 1rem;
`;

const Pane = styled.pre`
  font-size: 0.9rem;
  line-height: 1.6;
  white-space: pre-line;
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
`;

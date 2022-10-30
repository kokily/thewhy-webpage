import styled from 'styled-components';
import { media } from '../../styles';
import AddForm from './add/AddForm';

export default function AddQuestion() {
  return (
    <Container>
      <FlexBox>
        <AddForm />
      </FlexBox>
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1110px;
  ${media.large} {
    max-width: 760px;
  }
  ${media.medium} {
    max-width: 95%;
  }
`;

import { memo } from 'react';
import styled from 'styled-components';

interface Props {
  tag: string;
  onRemove: (id: string) => void;
}

const TagItem = memo<Props>(({ tag, onRemove }) => (
  <Container onClick={() => onRemove(tag)}>#{tag}</Container>
));

export default TagItem;

// Styles
const Container = styled.div`
  cursor: pointer;
  color: #6799ff;
  transition: 0.2s all;
  &:hover {
    color: #f15f5f;
  }
  & + & {
    margin-left: 1.5rem;
  }
`;

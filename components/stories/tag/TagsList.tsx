import { memo } from 'react';
import styled from 'styled-components';
import TagItem from './TagItem';

interface Props {
  tags: string[];
  onRemove: (id: string) => void;
}

const TagsList = memo<Props>(({ tags, onRemove }) => (
  <Container>
    {tags.map((tag: string) => (
      <TagItem key={tag} tag={tag} onRemove={onRemove} />
    ))}
  </Container>
));

export default TagsList;

// Styles
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 1.2rem;
`;

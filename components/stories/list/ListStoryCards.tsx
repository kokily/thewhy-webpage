import type { Story } from '@prisma/client';
import styled from 'styled-components';
import { media } from '../../../styles';
import StoryCard from './StoryCard';

interface Props {
  story: Story;
  onReadStory: (id: string) => void;
  onTag: (tagName: string) => void;
}

export default function ListStoryCards({ story, onReadStory, onTag }: Props) {
  return (
    <Container>
      <Contents>
        <Thumbnail
          src={story.thumbnail}
          alt={story.title}
          onClick={() => onReadStory(story.id)}
        />

        <StoryCard story={story} onReadStory={onReadStory} onTag={onTag} />
      </Contents>
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: block;
  position: relative;
  width: 100%;
  padding: 5px 5px 0 5px;
  flex: 0 0 25%;
  max-width: 25%;
  user-select: none;
  ${media.large} {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  ${media.medium} {
    flex: 1 1 50%;
    max-width: 47.5%;
  }
  ${media.small} {
    flex: none;
    max-width: 95%;
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 0;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.06);
  word-wrap: break-word;
  background: white;
  border-radius: 0.25rem;
`;

const Thumbnail = styled.img`
  cursor: pointer;
  transition: all 0.2s ease 0s;
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
  flex-shrink: 0;
  -ms-flex-shrink: 0;
  width: 100%;
  vertical-align: middle;
  border-style: none;
  &:hover {
    filter: grayscale(80%);
    -webkit-filter: grayscale(80%);
  }
`;

import styled from 'styled-components';
import useReadStory from '../../libs/hooks/stories/useReadStory';
import { media } from '../../styles';
import Markdown from '../common/Markdown';
import ReadButtons from '../common/ReadButtons';
import ReadStoryDate from './read/ReadStoryDate';
import ReadStoryTitle from './read/ReadStoryTitle';

export default function ReadStory() {
  const {
    story,
    onUpdateStory,
    onTag,
    modal,
    onRemoveClick,
    onConfirm,
    onCancel,
    isAdmin,
  } = useReadStory();

  return (
    <>
      {story && (
        <Container>
          <FlexBox>
            <img src={story.thumbnail} alt={story.title} />
          </FlexBox>

          {isAdmin && (
            <ReadButtons
              modal={modal}
              onRemoveClick={onRemoveClick}
              onConfirm={onConfirm}
              onCancel={onCancel}
              onUpdate={onUpdateStory}
            />
          )}

          <FlexBox>
            <ReadStoryDate date={story.createdAt.toString()} />
            <ReadStoryTitle
              title={story.title}
              tags={story.tags}
              onTag={onTag}
            />
          </FlexBox>

          <FlexBox>
            <Markdown markdown={story.body} />
          </FlexBox>
        </Container>
      )}
    </>
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
  width: 100%;
  max-width: 1110px;
  img {
    width: 100%;
    margin-bottom: 1.2rem;
  }
  ${media.large} {
    max-width: 760px;
  }
  ${media.medium} {
    max-width: 95%;
  }
`;

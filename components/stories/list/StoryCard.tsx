import type { Story } from '@prisma/client';
import styled from 'styled-components';
import { formatDate } from '../../../libs/utils';

interface Props {
  story: Story;
  onReadStory: (id: string) => void;
  onTag: (tagName: string) => void;
}

export default function StoryCard({ story, onReadStory, onTag }: Props) {
  return (
    <Container>
      <Title onClick={() => onReadStory(story.id)}>{story.title}</Title>
      <Body>
        {formatDate(new Date(story.createdAt).toLocaleDateString())} 작성
      </Body>
      <Tags>
        {story.tags.map((tag) => (
          <Tag key={tag} onClick={() => onTag(tag)}>
            #{tag}
          </Tag>
        ))}
      </Tags>
    </Container>
  );
}

// Styles
const Container = styled.div`
  flex: 1 1 auto;
  min-height: 1px;
  padding: 2rem 0.2rem 0 0.2rem;
`;

const Title = styled.h4`
  font-family: '윤고딕340';
  font-size: 23px;
  color: #463884;
  text-align: center;
  padding-top: 0.25rem;
  margin: 0;
  letter-spacing: -0.05rem;
  font-weight: 600;
  line-height: 27px;
  margin: 0 0 14px 0;
  cursor: pointer;
  &:before {
    content: '';
    display: block;
    border-top: 3px solid rgb(34, 139, 230);
    width: 100px;
    margin: -20px auto 5px;
  }
  &:hover {
    color: #9930b9;
  }
`;

const Body = styled.p`
  margin: 0 0 20px;
  text-align: center;
  max-width: 100%;
  height: 52px;
  word-break: keep-all;
  font-family: '윤고딕310';
  font-size: 19px;
  color: #616161;
  line-height: 1.3;
  margin-bottom: 0;
`;

const Tags = styled(Body)`
  font-size: 0.9rem;
  font-weight: bold;
  overflow: hidden;
  margin-bottom: 0;
  padding-bottom: 0;
`;

const Tag = styled.span`
  margin-right: 0.5rem;
  color: #1251fb;
  opacity: 0.6;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

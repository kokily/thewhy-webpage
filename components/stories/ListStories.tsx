import Link from 'next/link';
import { useSession } from 'next-auth/react';
import styled, { css } from 'styled-components';
import useMedia from '../../libs/hooks/common/useMedia';
import useListStories from '../../libs/hooks/stories/useListStories';
import { media } from '../../styles';
import Search from '../common/Search';
import ListStoryCards from './list/ListStoryCards';

export default function ListStories() {
  const { status } = useSession();
  const isSmall = useMedia('(max-width: 768px)');
  const {
    stories,
    search,
    onChange,
    onSearch,
    onKeyPress,
    onTag,
    onReadStory,
    setTarget,
  } = useListStories();

  return (
    <Container>
      <Contents>
        <SearchBox small={isSmall || false} logged={status === 'authenticated'}>
          {!isSmall && status === 'authenticated' && (
            <Link href="/stories/add">
              <Button>글 작성</Button>
            </Link>
          )}

          <Search
            mode="제목"
            search={search}
            onChange={onChange}
            onSearch={onSearch}
            onKeyPress={onKeyPress}
          />
        </SearchBox>

        {stories.map((story) => (
          <ListStoryCards
            key={story.id}
            story={story}
            onReadStory={onReadStory}
            onTag={onTag}
          />
        ))}
      </Contents>

      <div ref={setTarget} />
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Contents = styled.div`
  width: 100%;
  ${media.large} {
    max-width: 760px;
  }
`;

const Button = styled.a`
  height: 40px;
  font-family: '윤고딕';
  font-size: 1rem;
  font-weight: 600;
  padding: 0.6rem 1rem;
  background: white;
  color: #db3603;
  border: 2px solid #db3603;
  border-radius: 14px;
  cursor: pointer;
  transition: 0.2s all;
  &:hover {
    background: #db3603;
    color: white;
  }
`;

const SearchBox = styled.div<{ small: boolean; logged: boolean }>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  ${(props) =>
    props.small &&
    css`
      justify-content: flex-end;
    `}
  ${(props) =>
    !props.logged &&
    css`
      justify-content: flex-end;
    `}
`;

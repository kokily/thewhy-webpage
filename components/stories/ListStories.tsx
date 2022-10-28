import { useSession } from 'next-auth/react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import useMedia from '../../libs/hooks/common/useMedia';
import { media } from '../../styles';

export default function ListStories() {
  const { status } = useSession();
  const isSmall = useMedia('(max-width: 768px)');

  return (
    <Container>
      <Contents>
        <SearchBox small={isSmall || false} logged={status === 'authenticated'}>
          {!isSmall && status === 'authenticated' && (
            <Link href="/stories/add">
              <Button>글 작성</Button>
            </Link>
          )}
        </SearchBox>
      </Contents>
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

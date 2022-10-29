import Link from 'next/link';
import { useSession } from 'next-auth/react';
import styled, { css } from 'styled-components';
import useMedia from '../../libs/hooks/common/useMedia';
import useListNotices from '../../libs/hooks/notices/useListNotices';
import { media } from '../../styles';
import Search from '../common/Search';
import Notices from './list/Notices';

export default function ListNotices() {
  const {
    notices,
    search,
    onChange,
    onSearch,
    onKeyPress,
    onReadNotice,
    setTarget,
  } = useListNotices();
  const { status } = useSession();
  const isSmall = useMedia('(max-width: 768px)');

  return (
    <Container>
      <Contents>
        <SearchBox small={isSmall ? isSmall : false}>
          {!isSmall && status === 'authenticated' && (
            <Link href="/notices/add">
              <Button>공지 작성</Button>
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

        <Notices notices={notices} onReadNotice={onReadNotice} />
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
  justify-content: center;
  ${media.large} {
    max-width: 760px;
  }
`;

const SearchBox = styled.div<{ small: boolean }>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  ${(props) =>
    props.small &&
    css`
      justify-content: flex-end;
    `}
`;

const Button = styled.a`
  height: 40px;
  font-family: '윤고딕320';
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

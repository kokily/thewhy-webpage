import Link from 'next/link';
import styled, { css } from 'styled-components';
import useMedia from '../../libs/hooks/common/useMedia';
import useListQuestions from '../../libs/hooks/questions/useListQuestions';
import { media } from '../../styles';
import Search from '../common/Search';
import QuestionsTable from './list/QuestionsTable';

export default function ListQuestions() {
  const { search, onChange, onSearch, onKeyPress } = useListQuestions();
  const isSmall = useMedia('(max-width: 768px)');

  return (
    <Container>
      <Contents>
        <SearchBox small={isSmall ? isSmall : false}>
          {!isSmall && (
            <Link href="/questions/add">
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

        <QuestionsTable />
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
  justify-content: center;
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

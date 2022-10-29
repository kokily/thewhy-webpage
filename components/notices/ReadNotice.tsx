import styled from 'styled-components';
import useReadNotice from '../../libs/hooks/notices/useReadNotice';
import { formatDate } from '../../libs/utils';
import { media } from '../../styles';
import Markdown from '../common/Markdown';
import ReadButtons from '../common/ReadButtons';

export default function ReadNotice() {
  const {
    notice,
    onUpdateNotice,
    modal,
    onRemoveClick,
    onConfirm,
    onCancel,
    isAdmin,
  } = useReadNotice();

  return (
    <>
      {notice && (
        <Container>
          {isAdmin && (
            <ReadButtons
              modal={modal}
              onRemoveClick={onRemoveClick}
              onConfirm={onConfirm}
              onCancel={onCancel}
              onUpdate={onUpdateNotice}
            />
          )}

          <Layout>
            <DateBox>
              <h4>{`${formatDate(notice.createdAt.toString())} 작성`}</h4>
            </DateBox>
          </Layout>

          <Layout>
            <Markdown markdown={notice.body} />
          </Layout>
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

const Layout = styled.div`
  display: flex;
  width: 100%;
  max-width: 1110px;
  ${media.large} {
    max-width: 760px;
  }
  ${media.medium} {
    max-width: 95%;
  }
`;

const DateBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  h4 {
    color: #777;
  }
`;

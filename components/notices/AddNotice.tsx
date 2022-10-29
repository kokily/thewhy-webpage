import styled from 'styled-components';
import useAddNotice from '../../libs/hooks/notices/useAddNotice';
import EditorFooter from '../common/editor/EditorFooter';
import EditorTitle from '../common/editor/EditorTitle';
import QuillEditor from '../common/editor/QuillEditor';

export default function AddNotice() {
  const { title, body, onChangeTitle, onChangeBody, onBack, onAddNotice } =
    useAddNotice();

  return (
    <Container>
      <EditorBox>
        <Wrapper>
          <EditorTitle
            placeholder="제목을 입력하세요"
            value={title}
            onChange={onChangeTitle}
          />

          <QuillEditor QuillChange={onChangeBody} body={body} />
        </Wrapper>

        <EditorFooter onBack={onBack} onSubmit={onAddNotice} />
      </EditorBox>
    </Container>
  );
}

// Styles
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  animation: fadeIn 0.5s forwards;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const EditorBox = styled.div`
  min-width: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Wrapper = styled.div`
  padding-top: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;
`;

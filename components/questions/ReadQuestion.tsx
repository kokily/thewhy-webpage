import styled from 'styled-components';
import useReadQuestion from '../../libs/hooks/questions/useReadQuestion';
import { media } from '../../styles';
import RemoveModal from '../common/RemoveModal';
import AddReply from './read/AddReply';
import ReadQuestionBody from './read/ReadQuestionBody';
import ReadQuestionButtons from './read/ReadQuestionButtons';
import ReadQuestionInfo from './read/ReadQuestionInfo';
import ReadReply from './read/ReadReply';

export default function ReadQuestion() {
  const {
    question,
    toggle,
    onToggle,
    reply,
    onChangeReply,
    modal,
    onRemoveClick,
    onConfirm,
    onCancel,
    replyModal,
    onRemoveReplyClick,
    onReplyConfirm,
    onReplyCancel,
    onAddReply,
    onUpdateQuestion,
    isAdmin,
  } = useReadQuestion();

  return (
    <>
      {question && (
        <>
          <Container>
            {isAdmin && (
              <FlexBox>
                <ReadQuestionButtons
                  modal={modal}
                  onRemoveClick={onRemoveClick}
                  onConfirm={onConfirm}
                  onCancel={onCancel}
                  onRemoveReplyClick={onRemoveReplyClick}
                  onToggle={onToggle}
                  reply={question.reply ? true : false}
                />
              </FlexBox>
            )}

            <FlexBox>
              <ReadQuestionInfo question={question} />
            </FlexBox>

            <FlexBox>
              <ReadQuestionBody body={question.body} />
            </FlexBox>

            <FlexBox>
              <Button onClick={onUpdateQuestion}>문의 글 수정(Password)</Button>
            </FlexBox>

            {isAdmin && toggle && !question.reply && (
              <FlexBox>
                <AddReply
                  reply={reply}
                  question={question}
                  onChangeReply={onChangeReply}
                  onAddReply={onAddReply}
                />
              </FlexBox>
            )}

            {question.reply && <ReadReply body={question.reply} />}
          </Container>

          <RemoveModal
            visible={replyModal}
            onConfirm={onReplyConfirm}
            onCancel={onReplyCancel}
          />
        </>
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
  justify-content: center;
  margin-bottom: 1.5rem;
  ${media.large} {
    max-width: 760px;
  }
  ${media.medium} {
    max-width: 95%;
  }
`;

const Button = styled.button`
  font-weight: 600;
  background: white;
  color: #bdb219;
  padding: 0.3rem 0.6rem;
  border: 2px solid #bdb219;
  border-radius: 25px;
  box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.1);
  transition: 0.12s;
  cursor: pointer;
  &:hover {
    background: #bdb219;
    color: white;
  }
  &:active {
    transform: translateY(2px);
    box-shadow: none;
  }
`;

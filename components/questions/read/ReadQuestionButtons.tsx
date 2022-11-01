import styled from 'styled-components';
import { media } from '../../../styles';
import RemoveModal from '../../common/RemoveModal';

interface Props {
  modal: boolean;
  onRemoveClick: () => void;
  onConfirm: () => void;
  onCancel: () => void;
  onRemoveReplyClick: () => void;
  onToggle: () => void;
  reply: boolean;
}

export default function ReadQuestionButtons({
  modal,
  onRemoveClick,
  onConfirm,
  onCancel,
  onRemoveReplyClick,
  onToggle,
  reply,
}: Props) {
  return (
    <>
      <Container>
        <Button className="remove" onClick={onRemoveClick}>
          본문삭제
        </Button>

        {reply ? (
          <Button className="update" onClick={onRemoveReplyClick}>
            답글삭제
          </Button>
        ) : (
          <Button className="update" onClick={onToggle}>
            답글달기
          </Button>
        )}
      </Container>

      <RemoveModal visible={modal} onConfirm={onConfirm} onCancel={onCancel} />
    </>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1110px;
  justify-content: center;
  margin-bottom: 2rem;
  ${media.large} {
    max-width: 760px;
  }
  ${media.medium} {
    max-width: 95%;
  }
`;

const Button = styled.button`
  font-family: '윤고딕320';
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.5rem 1.5rem;
  margin-right: 0.5rem;
  border-radius: 15px;
  cursor: pointer;
  background: white;
  box-shadow: 2px 2px 4px 0px gray;
  transition: 0.12s;
  &.remove {
    color: red;
    border: 2px solid red;
    &:hover {
      background: red;
      color: white;
    }
    &:active {
      background: red;
      color: white;
      transform: translateY(2px);
      box-shadow: none;
    }
  }
  &.update {
    color: #00c2a8;
    border: 2px solid #00c2a8;
    &:hover {
      background: #00c2a8;
      color: white;
    }
    &:active {
      background: #00c2a8;
      color: white;
      transform: translateY(2px);
      box-shadow: none;
    }
  }
`;

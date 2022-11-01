import type { ChangeEvent, MouseEvent } from 'react';
import type { Question } from '@prisma/client';
import styled from 'styled-components';
import Button from '../../common/Button';

interface Props {
  reply: string;
  question: Question;
  onChangeReply: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onAddReply: (e: MouseEvent) => void;
}

export default function AddReply({
  reply,
  question,
  onChangeReply,
  onAddReply,
}: Props) {
  return (
    <Container>
      <ReplyBox>
        <h4>답글 달기</h4>
        <textarea
          rows={8}
          name="reply"
          value={reply}
          onChange={onChangeReply}
        />

        <ButtonBox>
          <Button submit onClick={onAddReply}>
            답글 저장
          </Button>
        </ButtonBox>
      </ReplyBox>
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
`;

const ReplyBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  textarea {
    border-color: rgba(0, 0, 0, 0.09);
    border-radius: 8px;
    margin-bottom: 1rem;
    padding: 15px;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`;

import type { Question } from '@prisma/client';
import styled from 'styled-components';
import { FaUserAlt, FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

interface Props {
  question: Question;
}

export default function ReadQuestionInfo({ question }: Props) {
  return (
    <Container>
      <h3>작성자</h3>

      <Contents>
        <Item>
          <FaUserAlt />
          이름 <span>{question.username} 님</span>
        </Item>
        <Item>
          <FaPhone />
          전화번호 <span>{question.phone}</span>
        </Item>
        <Item>
          <MdEmail />
          이메일 <span>{question.email}</span>
        </Item>
      </Contents>
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  flex-direction: column;
  text-align: center;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  font-weight: 500;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 2rem;
  margin-bottom: 0.2rem;

  svg {
    position: absolute;
    left: 0;
    border-width: 1px;
    width: 25px;
    height: 25px;
    text-align: center;
    padding: 4px;
    font-size: 0.8em;
    border-style: solid;
    border-radius: 50%;
    color: #0088cc;
  }
  span {
    margin-left: 1rem;
    color: #777;
  }
`;

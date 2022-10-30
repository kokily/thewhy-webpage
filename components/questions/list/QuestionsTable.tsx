import styled from 'styled-components';
import useListQuestions from '../../../libs/hooks/questions/useListQuestions';

export default function QuestionsTable() {
  const { questions, onReadQuestion } = useListQuestions();

  return (
    <Container>
      <thead>
        <tr>
          <th>등록날짜</th>
          <th>제 목</th>
          <th>질문자</th>
          <th>답변</th>
        </tr>
      </thead>
      <tbody>
        {questions.length > 0 ? (
          questions.map((question) => (
            <tr key={question.id} onClick={() => onReadQuestion(question.id)}>
              <td style={{ textAlign: 'center' }}>
                {new Date(question.createdAt).toLocaleDateString()}
              </td>
              <td>{question.title}</td>
              <td style={{ textAlign: 'center' }}>{question.username}님</td>
              <td style={{ textAlign: 'center' }}>
                {question.reply ? (
                  <strong style={{ color: 'blue' }}>완료</strong>
                ) : (
                  <span style={{ color: 'red' }}>미진행</span>
                )}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td style={{ textAlign: 'center' }} colSpan={4}>
              작성된 문의글이 없습니다.
            </td>
          </tr>
        )}
      </tbody>
    </Container>
  );
}

// Styles
const Container = styled.table`
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  border-collapse: collapse;
  border-spacing: 2px;
  th,
  td {
    vertical-align: bottom;
    padding: 0.75em;
    border-top: 1px solid #dee2e6;
    border-color: rgba(0, 0, 0, 0.06);
  }
  tbody tr {
    transition: 0.12s;
    cursor: pointer;
    &:hover {
      background: #aee2d7;
    }
  }
`;

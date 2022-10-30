import styled from 'styled-components';
import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlineKey, HiOutlineMail } from 'react-icons/hi';
import { IoIosPhonePortrait } from 'react-icons/io';
import { MdSubtitles } from 'react-icons/md';
import useAddQuestion from '../../../libs/hooks/questions/useAddQuestion';
import Button from '../../common/Button';
import AddCheck from './AddCheck';
import AddInput from './AddInput';
import TextArea from './TextArea';

export default function AddForm() {
  const { inputs, onChange, agree, onToggleAgree, onAddQuestion } =
    useAddQuestion();

  return (
    <Container>
      <InputGroup>
        <label>
          이름 <span>*</span>
        </label>
        <AiOutlineUser size={20} color="#0c89d1" />
        <AddInput
          type="text"
          name="username"
          value={inputs.username}
          onChange={onChange}
        />
      </InputGroup>

      <InputGroup>
        <label>
          비밀번호 <span>*</span>
        </label>
        <HiOutlineKey size={20} color="#0c89d1" />
        <AddInput
          type="password"
          name="password"
          value={inputs.password}
          onChange={onChange}
        />
      </InputGroup>

      <InputGroup>
        <label>연락처</label>
        <IoIosPhonePortrait size={20} color="#0c89d1" />
        <AddInput
          type="text"
          name="phone"
          value={inputs.phone}
          onChange={onChange}
        />
      </InputGroup>

      <InputGroup>
        <label>이메일</label>
        <HiOutlineMail size={20} color="#0c89d1" />
        <AddInput
          type="text"
          name="email"
          value={inputs.email}
          onChange={onChange}
        />
      </InputGroup>

      <InputGroup>
        <label>
          제목 <span>*</span>
        </label>
        <MdSubtitles size={20} color="#0c89d1" />
        <AddInput
          type="text"
          name="title"
          value={inputs.title}
          onChange={onChange}
        />
      </InputGroup>

      <InputGroup>
        <label>
          본문 <span>*</span>
        </label>
        <TextArea body={inputs.body} onChange={onChange} />
      </InputGroup>

      <AddCheck agree={agree} onToggleAgree={onToggleAgree} />

      <Info>
        <pre>
          더와이컨설팅은 교육 문의, 서비스 신청 등을 위해 아래와 같이 개인
          정보를 수집, 활용하고 있습니다.
          <br />
          <br />
          1. 수집 항목 및 활용 목적
          <br />
          - 수집항목: 이름, 연락처(선택), 이메일(선택), 교육 주제 및 내용, 교육
          장소
          <br />
          - 활용목적: 서비스 제공, 계약 이행, 요금 결제, 고객 관리
          <br />
          <br />
          2. 보유 및 활용 기간
          <br />- 더와이컨설팅은 개인정보 수집 및 활용 목적이 달성된 후에는 즉시
          해당 정보를 파기합니다.
        </pre>
      </Info>

      <ButtonBox>
        <Button onClick={onAddQuestion} submit>
          전송하기
        </Button>
      </ButtonBox>
    </Container>
  );
}

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.06);
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 600px;
  margin-bottom: 1rem;

  label {
    font-family: 'NanumGothic-Regular';
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
    span {
      color: red;
    }
  }

  svg {
    position: absolute;
    top: 30px;
    left: 8px;
  }
`;

const Info = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  background: #f7f7f7;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 1rem;
  pre {
    font-size: 87.5%;
    line-height: 1.6;
    white-space: pre-line;
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

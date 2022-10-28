import styled from 'styled-components';
import useAuth from '../../libs/hooks/auth/useAuth';

export default function Login() {
  const { passwordRef, onKeyPress, onLogin } = useAuth();

  return (
    <Container>
      <Layout>
        <h2>로그인</h2>

        <InputBox>
          <label>
            비밀번호<span>*</span>
          </label>

          <Input
            type="password"
            id="password"
            ref={passwordRef}
            placeholder="여기 입력하세요"
            onKeyPress={onKeyPress}
            required
          />
        </InputBox>

        <ButtonBox>
          <Button onClick={onLogin}>로그인</Button>
        </ButtonBox>
      </Layout>
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
`;

const Layout = styled.div`
  width: 100%;
  max-width: 470px;
  h2 {
    font-weight: 500;
  }
`;

const InputBox = styled.div`
  label {
    font-size: 14px;
    color: #212529;
  }
  span {
    color: #ff5b5b;
  }
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: calc(1.5em + 1rem + 2px);
  font-size: 1.2em;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  color: #495057;
  -webkit-appearance: none;
  margin-top: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.09);
`;

const ButtonBox = styled.div`
  margin-top: 1rem;
`;

const Button = styled.button`
  width: 100%;
  font-size: 1em;
  font-weight: 700;
  padding: 0.8rem 1.5rem;
  color: white;
  background: #212529;
  border: 1px solid #212529;
  cursor: pointer;
  &:active {
    transform: translateZ(3px);
  }
`;

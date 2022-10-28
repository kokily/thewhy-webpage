import styled from 'styled-components';
import { media } from '../../../styles';

export default function HeaderTopLeft() {
  return (
    <Container>
      <Title>커뮤니케이션 전문 교육컨설팅</Title>

      <IconsBox>
        <a href="/">
          <Icon className="youtube" />
        </a>
        <a href="/">
          <Icon className="naver" />
        </a>
      </IconsBox>
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  ${media.medium} {
    display: none;
  }
`;

const Title = styled.div`
  font-size: 12.6px;
  font-weight: 600;
  font-family: Poppins, Arial, sans-serif;
  color: #777;
  margin-bottom: 0.7rem;
`;

const IconsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    margin-right: 0.25rem;
  }
`;

const Icon = styled.div`
  width: 28px;
  height: 28px;
  transition: 0.2s all;
  background-repeat: no-repeat;
  background-size: cover;

  &.youtube {
    background-image: url('/svg/Youtube_off.svg');

    &:hover {
      background-image: url('/svg/Youtube_on.svg');
    }
  }

  &.naver {
    background-image: url('/svg/Naver_off.svg');

    &:hover {
      background-image: url('/svg/Naver_on.svg');
    }
  }
`;

import styled from 'styled-components';
import { ImLocation } from 'react-icons/im';
import { AiOutlineMail } from 'react-icons/ai';
import { media } from '../../../styles';

export default function FooterContentLeft() {
  return (
    <Container>
      <Title>Contact Us</Title>
      <Lead className="number">050-5055-7221</Lead>
      <Lead>Tel: 050-5055-7221</Lead>
      <Lead>Fax: 050-4386-7221</Lead>

      <List>
        <Item>
          <ImLocation size={16} color="#0088cc" />
          <Lead>
            경기도 남양주시 다산중앙로19번길
            <br />
            25-23, 에프508호
            <br />
            (다산동, 다산진건블루웨일
            <br />
            지식산업센터 2차)
          </Lead>
        </Item>

        <Item>
          <AiOutlineMail size={16} color="#0088cc" />
          <Lead>thewhy@thewhy.kr</Lead>
        </Item>
      </List>

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
  flex: 0 0 25%;
  max-width: 25%;
  position: relative;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  ${media.small} {
    display: inline-block;
    flex: none;
    max-width: 370px;
    margin-bottom: 1.25rem;
  }
`;

const Title = styled.h5`
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  letter-spacing: -0.02rem;
  line-height: 18px;
  margin: 0 0 14px 0;
  margin-bottom: 1rem;
  -webkit-font-smoothing: antialiased;
  text-align: left;
`;

const Lead = styled.p`
  &.number {
    font-size: 29px;
    font-weight: 700;
    line-height: 26px;
    margin: 0 0 20px;
    color: #fff;
  }
  color: #777;
  margin: 0 0 10px;
  text-align: left;
`;

const List = styled.ul`
  list-style: none;
  margin-top: 0;
  margin-bottom: 1rem;
  padding-left: 0;
  padding-right: 0;
`;

const Item = styled.li`
  position: relative;
  line-height: 24px;
  margin-bottom: 0.25rem !important;
  padding-top: 5px;
  padding-left: 20px;
  svg {
    position: absolute;
    top: 10px;
    left: -2px;
  }
  p {
    word-break: keep-all;
  }
`;

const IconsBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  a {
    margin-right: 0.25rem;
  }
`;

const Icon = styled.div`
  width: 36px;
  height: 36px;
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

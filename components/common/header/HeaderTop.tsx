import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { media } from '../../../styles';
import HeaderTopLeft from './HeaderTopLeft';
import HeaderTopRight from './HeaderTopRight';

export default function HeaderTop() {
  return (
    <Container>
      <HeaderTopLeft />

      <Link href="/">
        <Image src="/svg/Logo.svg" width={210} height={96} />
      </Link>

      <HeaderTopRight />
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1110px;
  border-bottom: 0.4px solid #dfdfdf;
  transition: 0.2s all;
  ${media.large} {
    max-width: 760px;
  }
  ${media.medium} {
    justify-content: center;
  }
  img {
    cursor: pointer;
  }
`;

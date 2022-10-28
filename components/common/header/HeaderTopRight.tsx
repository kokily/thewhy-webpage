import styled from 'styled-components';
import { signOut, useSession } from 'next-auth/react';
import { BiExit } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa';
import { media } from '../../../styles';

export default function HeaderTopRight() {
  const { status } = useSession();

  return (
    <Container>
      <Infos>
        050-5055-7221
        <br />
        thewhy@thewhy.kr
      </Infos>

      {status === 'authenticated' ? (
        <span className="logout" onClick={async () => await signOut()}>
          <BiExit size={32} color="#463884" />
        </span>
      ) : (
        <span>
          <FaWhatsapp size={32} color="#463884" />
        </span>
      )}
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  align-items: center;
  ${media.medium} {
    display: none;
  }
  .logout {
    cursor: pointer;
  }
`;

const Infos = styled.p`
  font-size: 13px;
  font-family: helvetica serif, sans-seif;
  font-weight: 600;
  color: #777;
  margin-right: 1rem;
`;

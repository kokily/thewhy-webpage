import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import useMedia from '../../libs/hooks/common/useMedia';
import useHamburgerToggle from '../../libs/hooks/common/useHamburgerToggle';
import NavList from './nav/NavList';
import { media } from '../../styles';

export default function Navigation() {
  const isSmall = useMedia('(max-width: 992px)');
  const { toggle, onToggle } = useHamburgerToggle();

  return (
    <Container>
      {isSmall ? (
        <MobileWrapper>
          <Mobile>
            {toggle ? (
              <IoMdClose className="on" size={30} onClick={onToggle} />
            ) : (
              <GiHamburgerMenu className="off" size={30} onClick={onToggle} />
            )}
          </Mobile>
          <NavList toggle={toggle} isSmall={isSmall} />
        </MobileWrapper>
      ) : (
        <NavList isSmall={isSmall} />
      )}
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${media.medium} {
    width: 100%;
  }
`;

const MobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${media.medium} {
    width: 100%;
  }
`;

const Mobile = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  padding: 15px;
  height: 60px;
  transition: 0.2s all;
  width: 100%;
  max-width: 694.11px;
  svg {
    padding: 5px;
    border-radius: 3px;
    cursor: pointer;
    &.off {
      background: #6799ff;
      color: white;
    }
    &.on {
      background: white;
      color: #6799ff;
      border: 1px solid #6799ff;
    }
  }
`;

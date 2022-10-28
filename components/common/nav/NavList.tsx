import styled, { css } from 'styled-components';
import { media } from '../../../styles';
import { NavMenu } from '../../../libs/menu';
import NavItem from './NavItem';

interface Props {
  toggle?: boolean;
  isSmall?: boolean;
}

export default function NavList({ toggle, isSmall }: Props) {
  return (
    <Container toggle={toggle}>
      <List className="menu">
        {NavMenu.map((menu) => (
          <NavItem key={menu.id} menu={menu} isSmall={isSmall} />
        ))}
      </List>
    </Container>
  );
}

// Styles
const Container = styled.div<Props>`
  display: flex;
  justify-content: center;
  width: 100%;
  ${media.medium} {
    max-height: 50vh;
    overflow: hidden;
    overflow-y: auto;
    padding: 0px;
    padding-left: 0;
    margin-bottom: 0;
    transition: ease all 500ms fadeIn;
    flex-wrap: wrap;
    display: none;
    animation-name: fadeIn;
    animation-duration: 0.4s;
    ${(props) =>
      props.toggle &&
      css`
        display: flex;
      `};
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 694.11px;
  list-style: none;
  ${media.medium} {
    padding: 0 15px;
    margin: 0;
    flex-direction: column;
  }
`;

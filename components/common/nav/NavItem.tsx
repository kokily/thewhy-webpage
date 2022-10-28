import Link from 'next/link';
import styled from 'styled-components';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import useNav from '../../../libs/hooks/common/useNav';
import NavSubList from './NavSubList';
import { media } from '../../../styles';

interface Props {
  menu: MenuType;
  isSmall?: boolean;
}

export default function NavItem({ menu, isSmall }: Props) {
  const { isOpen, onOpen } = useNav();

  return (
    <Container className={`main ${isOpen}`}>
      {menu.items ? (
        <>
          <a onClick={onOpen} className="title">
            <span>{menu.title}</span>
            {isSmall && (
              <>
                {isOpen ? (
                  <IoIosArrowUp size={14} />
                ) : (
                  <IoIosArrowDown size={14} />
                )}
              </>
            )}
          </a>
          <ul className="hidden">
            {menu.items.map((item) => (
              <NavSubList key={item.id} item={item} />
            ))}
          </ul>
        </>
      ) : (
        <Link href={menu.url}>{menu.title}</Link>
      )}
    </Container>
  );
}

// Styles
const Container = styled.li`
  display: inline-block;
  position: relative;
  background: white;
  font-size: 14px;
  font-weight: 700;
  color: #212529;
  ${media.medium} {
    border-bottom: 1px solid #e8e8e8;
    clear: both;
    display: block;
    float: none;
    margin: 0;
    padding: 0;
    line-height: 24px;
    a {
      color: #0088cc;
      font-size: 13px;
      font-style: normal;
      line-height: 20px;
      padding: 7px 8px;
      margin: 1px 0;
    }
    &.open {
      .hidden {
        display: block;
      }
    }
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  a {
    display: inline-flex;
    align-items: center;
    white-space: normal;
    cursor: pointer;
    letter-spacing: -0.5px;
    clear: both;
    &:hover {
      color: #0088cc;
    }
  }
  .hidden {
    display: none;
    position: absolute;
    min-width: 200px;
    padding: 5px 5px;
    left: auto;
    text-align: left;
    box-shadow: 0 15px 30px -5px rgb(0 0 0 / 7%);
    background: white;
    background-clip: padding-box;
    transform: translateX(-27%);
    li {
      transition: 0.2s all;
    }
    ${media.medium} {
      background: transparent;
      padding: 0;
      margin: 0;
      font-size: 13px;
      box-shadow: none;
      border-radius: 0;
      border: 0;
      clear: both;
      display: none;
      float: none;
      position: static;
      transform: none;
      top: 100%;
      left: 0;
      z-index: 1000;
      min-width: 10rem;
      color: #212529;
    }
  }
  a:hover + .hidden,
  .hidden:hover {
    @media (min-width: 769px) {
      display: block;
    }
  }
`;

import type { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import styled from 'styled-components';
import { BiSearchAlt } from 'react-icons/bi';

interface Props {
  mode: string;
  search: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: MouseEvent) => void;
  onKeyPress: (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => void;
}

export default function Search({
  mode,
  search,
  onChange,
  onSearch,
  onKeyPress,
}: Props) {
  return (
    <Container>
      <Input
        type="text"
        name="search"
        value={search}
        onChange={onChange}
        onKeyPress={onKeyPress}
        placeholder={`${mode} 검색`}
      />
      <a onClick={onSearch}>
        <BiSearchAlt />
      </a>
    </Container>
  );
}

// Styles
const Container = styled.div`
  svg {
    position: relative;
    float: right;
    width: 25px;
    height: 25px;
    top: -32px;
    right: 10px;
    cursor: pointer;
    &:hover {
      color: #463883;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  margin: 0 auto;
  padding: 0 20px;
  font-size: 0.9rem;
  border: 1px solid #d0cfce;
  border-radius: 25px;
  outline: none;
  transition: 0.12s all;
  &:focus {
    border: 1px solid #008abf;
    color: #008abf;
    &::-webkit-input-placeholder {
      transition: opacity 0.45s ease;
      opacity: 0;
    }
    &::-moz-placeholder {
      transition: opacity 0.45s ease;
      opacity: 0;
    }
    &:-ms-placeholder {
      transition: opacity 0.45s ease;
      opacity: 0;
    }
  }
`;

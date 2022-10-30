import type { ChangeEvent } from 'react';
import styled from 'styled-components';

interface Props {
  type: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function AddInput({ type, name, value, onChange }: Props) {
  return (
    <Container
      type={`${type}`}
      name={`${name}`}
      value={value}
      onChange={onChange}
    />
  );
}

// Styles
const Container = styled.input`
  padding: 0.6rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  transition: 0.12s;
  padding-left: 40px;
  &:focus {
    outline: none;
    background: #fcfcfc;
    border: 1px solid #0c89d1;
  }
`;

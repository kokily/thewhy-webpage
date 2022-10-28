import type { ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  submit?: boolean;
  back?: boolean;
  onClick?: any;
  children: ReactNode;
}

export default function Button({ children, submit, back, ...rest }: Props) {
  const htmlProps = rest as any;

  return (
    <Container
      submit={submit}
      back={back}
      {...htmlProps}
      onClick={(e) => {
        if (htmlProps.onClick) {
          htmlProps.onClick(e);
        }
        (e.target as HTMLButtonElement).blur();
      }}
    >
      {children}
    </Container>
  );
}

// Styles
const Container = styled.button<{ submit?: boolean; back?: boolean }>`
  font-size: 1rem;
  font-weight: bold;
  width: 90px;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s all;
  &:active {
    transform: translateY(1px);
  }
  ${(props) =>
    props.submit &&
    css`
      border: 1px solid #06a4ff;
      background: #06a4ff;
      color: white;
      &:hover {
        background: white;
        color: #06a4ff;
      }
    `}
  ${(props) =>
    props.back &&
    css`
      border: 1px solid #777;
      background: #777;
      color: white;
      &:hover {
        background: white;
        color: #777;
      }
    `}
`;

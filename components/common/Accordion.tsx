import type { ReactNode, MouseEvent } from 'react';
import { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';

interface Props {
  title: string | ReactNode;
  body: string | ReactNode;
}

export default function Accordion({ title, body }: Props) {
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = useCallback(
    (e: MouseEvent) => {
      e.stopPropagation();

      if (parentRef.current === null || childRef.current === null) {
        return;
      }

      if (parentRef.current.clientHeight > 0) {
        parentRef.current.style.height = '0';
      } else {
        parentRef.current.style.height = `${childRef.current.clientHeight}px`;
      }

      setIsOpen(!isOpen);
    },
    [isOpen]
  );

  const parentRefHeight = parentRef.current?.style.height ?? '0px';
  const buttonText = parentRefHeight === '0px' ? '∧' : '∨';

  return (
    <Container>
      <Header onClick={onToggle}>
        <Title>
          {title}
          <span>{buttonText}</span>
        </Title>
      </Header>

      <Contents ref={parentRef}>
        <Content ref={childRef}>{body}</Content>
      </Contents>
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;
  margin: 10px;
`;

const Header = styled.div`
  color: #0088cc;
`;

const Title = styled.div`
  display: flex;
  min-width: 260px;
  border-left: 3px solid #f7f7f7;
  background: #f7f7f7;
  border-radius: 5px;
  border-left-color: #0088cc;
  border-right-color: #0088cc;
  font-weight: 600;
  padding: 12px 20px 12px 15px;
  cursor: pointer;
  span {
    margin-left: auto;
  }
`;

const Contents = styled.div`
  height: 0;
  overflow: hidden;
  transition: height 0.15s ease, background-color 0.15s ease;
`;

const Content = styled.div`
  padding: 0.1px;
`;

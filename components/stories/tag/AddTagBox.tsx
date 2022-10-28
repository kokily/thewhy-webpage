import type { ChangeEvent } from 'react';
import styled from 'styled-components';
import TagsList from './TagsList';

interface Props {
  input: string;
  onSetTags: (e: ChangeEvent<HTMLFormElement>) => void;
  onChangeText: (e: ChangeEvent<HTMLInputElement>) => void;
  localTags: string[];
  removeTag: (tag: string) => void;
}

export default function AddTagBox({
  input,
  onSetTags,
  onChangeText,
  localTags,
  removeTag,
}: Props) {
  return (
    <Container>
      <p>태그 ☞</p>

      <TagForm onSubmit={onSetTags}>
        <input
          placeholder="엔터로 입력!"
          value={input}
          onChange={onChangeText}
        />
        <Button type="submit">추 가</Button>
      </TagForm>

      <TagsList tags={localTags} onRemove={removeTag} />
    </Container>
  );
}

// Styles
const Container = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  font-weight: bold;
  padding-left: 1rem;
  padding-right: 1rem;
  word-break: keep-all;
  p {
    margin-right: 1.3rem;
  }
`;

const TagForm = styled.form`
  background: none;
  input {
    flex: 1;
    border: none;
    outline: none;
    padding: 0.5rem;
    font-size: 1rem;
    background: none;
    &::placeholder {
      color: #777;
    }
  }
`;

const Button = styled.button`
  color: #3db7cc;
  border: 1px solid #3db7cc;
  border-radius: 8px;
  background: none;
  padding: 0.3rem 0.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s all;
  &:hover {
    background: #58aebd;
    color: white;
    border: 1px solid #88c0ca;
  }
  &:active {
    transform: translateY(2px);
  }
`;

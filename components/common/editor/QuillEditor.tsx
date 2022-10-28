import { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import DragDrop from './DragDrop';
import { modules } from './config';
import { imageUpload } from '../../../libs/utils';
import { media } from '../../../styles';
import 'react-quill/dist/quill.snow.css';

interface Props {
  QuillChange: (text: string) => void;
  body: string;
}

export default function QuillEditor({ QuillChange, body }: Props) {
  const Quill = typeof window === 'object' ? require('quill') : () => false;
  const quillElement = useRef<typeof Quill | null>(null);
  const quillInstance = useRef<typeof Quill | null>(null);

  const quillUpload = async (file: File) => {
    const target = await imageUpload(file);
    const range = quillInstance.current.getSelection(true);

    quillInstance.current.insertEmbed(range.index, 'image', `${target}`);
    quillInstance.current.setSelection(range.index + 1);
  };

  const onClickImage = () => {
    const upload = document.createElement('input');

    upload.type = 'file';
    upload.click();

    upload.onchange = async function () {
      if (!upload.files) return;

      const file = upload.files[0];
      await quillUpload(file);
    };
  };

  const onDragDropUpload = useCallback(async (file: File) => {
    await quillUpload(file);
  }, []);

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'snow',
      placeholder: '게시글 내용을 작성하세요',
      modules,
    });

    const quill = quillInstance.current;

    quill.on('text-change', () => {
      QuillChange(quill.root.innerHTML);
    });

    const toolbar = quill.getModule('toolbar');
    toolbar.addHandler('image', onClickImage);
  }, []);

  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) return;

    if (body) {
      mounted.current = true;
      quillInstance.current.root.innerHTML = body;
    }
  }, [body]);

  return (
    <>
      <Container>
        <div ref={quillElement} style={{ border: 'none' }} />
      </Container>
      <DragDrop onUpload={onDragDropUpload} />
    </>
  );
}

// Styles
const Container = styled.div`
  top: 0px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-height: 650px;
  font-size: 1.125rem;
  margin-bottom: 5rem;
  scroll-behavior: auto;
  blockquote {
    border-left: 4px solid #1b3bf5;
    font-size: 1.4rem;
    padding: 0.6rem 0 0.6rem 1.3rem;
    color: black;
    margin-left: 0;
    margin-right: 0;
    p {
      margin: 0;
    }
  }
  p {
    font-size: 1.215rem;
    em {
      color: #fff;
      background: #1fb498;
      padding: 0 0.5rem 0.1rem 0.5rem;
      font-style: normal;
      border-radius: 4px;
    }
    strong {
      color: #1e63c4;
      border-radius: 6px;
      padding-left: 0.4rem;
      padding-right: 0.4rem;
      margin-left: 0.2rem;
      margin-right: 0.2rem;
    }
  }
  pre {
    font-size: 1.215rem;
    padding: 0.5rem 0.8rem;
    background: none;
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: normal;
  }
  .ql-editor {
    overflow-y: scroll;
    height: 650px;
  }
  .ql-toolbar {
    border: none;
    border-bottom: 1px solid #777;
  }
  .ql-container {
    flex: 1 1 0%;
    min-height: 0px;
    height: auto;
  }
  img {
    width: 100%;
    height: 100%;
    max-width: 650px !important;
  }
  .ql-video {
    display: block;
    width: 100vw;
    height: 100vh;
    max-width: 650px;
    max-height: 480px;
    ${media.medium} {
      width: 100%;
      height: 100%;
    }
  }
`;

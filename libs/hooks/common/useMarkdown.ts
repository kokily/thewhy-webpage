import { useEffect, useState } from 'react';
import { marked } from 'marked';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-bash.min.js';
import 'prismjs/components/prism-javascript.min.js';
import 'prismjs/components/prism-jsx.min.js';
import 'prismjs/components/prism-css.min.js';

export default function useMarkdown({ markdown }: { markdown: string }) {
  const [html, setHtml] = useState('');

  const renderMarkdown = () => {
    if (!markdown) {
      setHtml('');
      return;
    }

    setHtml(
      marked(markdown, {
        breaks: true,
      })
    );
  };

  useEffect(() => {
    renderMarkdown();
  });

  useEffect(() => {
    return () => {
      Prism.highlightAll();
    };
  }, [html]);

  return {
    html,
  };
}

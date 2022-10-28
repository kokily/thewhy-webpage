import { useState } from 'react';

export default function useNav() {
  const [isOpen, setIsOpen] = useState('');

  const onOpen = () => {
    if (isOpen === 'open') {
      setIsOpen('');
    } else {
      setIsOpen('open');
    }
  };

  return {
    isOpen,
    onOpen,
  };
}

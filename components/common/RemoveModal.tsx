import Modal from './Modal';

interface Props {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function RemoveModal({ visible, onConfirm, onCancel }: Props) {
  return (
    <Modal
      visible={visible}
      title="삭제하기"
      content="정말 삭제하시나요?"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
}

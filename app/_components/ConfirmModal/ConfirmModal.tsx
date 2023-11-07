import { FC } from "react";
import { Button } from "../Button";
import { Modal } from "../Modal";

interface ConfirmModalProps {
  title: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export const ConfirmModal: FC<ConfirmModalProps> = ({
  title,
  onCancel,
  onConfirm,
}) => {
  return (
    <Modal title={title} onClose={onCancel}>
      <div className="grid grid-cols-2 gap-x-[30px]">
        <Button
          onClick={onCancel}
          variant="outlined"
          className="w-full max-w-[300px] m-auto block"
        >
          Cancel
        </Button>
        <Button
          onClick={onConfirm}
          className="w-full max-w-[300px] m-auto block"
        >
          Confirm
        </Button>
      </div>
    </Modal>
  );
};

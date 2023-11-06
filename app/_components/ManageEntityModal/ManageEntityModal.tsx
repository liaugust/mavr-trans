import { FC } from "react";
import { Modal, ModalProps } from "../Modal";
import { Button } from "../Button";
import { Form } from "../Form";

export interface ManageEntityModalProps extends ModalProps {
  buttonText: string;
  submitButtonDisabled: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const ManageEntityModal: FC<ManageEntityModalProps> = ({
  title,
  onClose,
  onSubmit,
  children,
  buttonText,
  submitButtonDisabled,
}) => {
  return (
    <Modal title={title} onClose={onClose}>
      <Form className="max-w-[380px] m-auto" onSubmit={onSubmit}>
        <div className="mb-10 grid grid-flow-row gap-y-[10px]">{children}</div>
        <Button
          type="submit"
          disabled={submitButtonDisabled}
          className="w-full max-w-[300px] m-auto mb-[30px] block"
        >
          {buttonText}
        </Button>
      </Form>
    </Modal>
  );
};

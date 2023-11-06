import { FC } from "react";
import { Modal, ModalProps } from "../Modal";
import { Button } from "../Button";
import { Form } from "../Form";
import { GoogleBtn } from "./GoogleBtn";
import { Caption } from "../Typography";

export interface AuthModalProps extends ModalProps {
  buttonText: string;
  errorMessage?: string;
  withGoogleAuth?: boolean;
  submitButtonDisabled: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const AuthModal: FC<AuthModalProps> = ({
  title,
  onClose,
  onSubmit,
  children,
  buttonText,
  errorMessage,
  submitButtonDisabled,
  withGoogleAuth = true,
}) => {
  return (
    <Modal title={title} onClose={onClose}>
      <Form className="max-w-[380px] m-auto" onSubmit={onSubmit}>
        <div className="mb-10 grid grid-flow-row gap-y-[10px]">
          {children}
          {errorMessage && (
            <Caption level="3" className="text-[tomato] text-center">
              {errorMessage}
            </Caption>
          )}
        </div>

        <Button
          size="md"
          type="submit"
          disabled={submitButtonDisabled}
          className="w-full max-w-[300px] m-auto mb-[30px] block"
        >
          {buttonText}
        </Button>
        {withGoogleAuth && <GoogleBtn />}
      </Form>
    </Modal>
  );
};

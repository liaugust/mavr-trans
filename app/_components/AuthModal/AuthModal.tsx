import { FC } from "react";
import { Modal, ModalProps } from "../Modal";
import { Button } from "../Button";
import { Form } from "../Form";
import { GoogleBtn } from "./GoogleBtn";
import { Caption } from "../Typography";
import { Language } from "@/app/_i18n/settings";
import { WithLang } from "@/app/types";

export interface AuthModalProps extends ModalProps, WithLang {
  buttonText: string;
  errorMessage?: string;
  withGoogleAuth?: boolean;
  submitButtonDisabled: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const AuthModal: FC<AuthModalProps> = ({
  lang,
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
      <Form className="md:max-w-[380px] m-auto" onSubmit={onSubmit}>
        <div className="mb-[30px] md:mb-10 grid grid-flow-row gap-y-[10px]">
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
          className="w-full max-w-[300px] m-auto mb-5 md:mb-[30px] block"
        >
          {buttonText}
        </Button>
        {withGoogleAuth && <GoogleBtn lang={lang} />}
      </Form>
    </Modal>
  );
};

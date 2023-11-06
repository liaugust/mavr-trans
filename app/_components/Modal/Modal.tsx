import { FC, PropsWithChildren } from "react";
import { CloseButton } from "./CloseButton";
import { Overlay } from "./Overlay";
import { Wrapper } from "./Wrapper";
import useLockBodyScroll from "@/app/_hooks/useLockBodyScroll";
import { Title } from "../Typography";

export interface ModalProps extends PropsWithChildren {
  onClose: () => void;
  title: string;
}

export const Modal: FC<ModalProps> = ({ onClose, title, children }) => {
  useLockBodyScroll();

  return (
    <Overlay>
      <Wrapper onClose={onClose}>
        <div className="bg-white h-full w-full rounded-[4px] pt-10 pb-[50px] px-5 relative">
          <CloseButton onClose={onClose} />
          {title && (
            <Title
              level="5"
              className="text-[#343331] text-[32px] mb-8 text-center"
            >
              {title}
            </Title>
          )}
          {children}
        </div>
      </Wrapper>
    </Overlay>
  );
};

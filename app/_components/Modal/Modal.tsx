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
        <div className="bg-white h-full w-full rounded-[4px] px-[10px] py-10 md:pt-10 md:pb-[50px] md:px-5 relative">
          <CloseButton onClose={onClose} />
          {title && (
            <Title
              level="5"
              className="text-[#343331] mb-5 md:mb-8 text-center"
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

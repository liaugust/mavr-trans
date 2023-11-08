import { FC, MouseEvent, PropsWithChildren } from "react";

interface OverlayProps extends PropsWithChildren {
  onClose: () => void;
}

export const Overlay: FC<OverlayProps> = ({ children, onClose }) => {
  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).id === "overlay") {
      onClose();
    }
  };

  return (
    <div
      id="overlay"
      onClick={onClick}
      className="fixed w-screen h-screen top-0 left-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)] z-[1000]"
    >
      {children}
    </div>
  );
};

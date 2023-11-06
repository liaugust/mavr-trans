import { FC, PropsWithChildren } from "react";

interface OverlayProps extends PropsWithChildren {}

export const Overlay: FC<OverlayProps> = ({ children }) => {
  return (
    <div className="fixed w-screen h-screen top-0 left-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)] z-[1000]">
      {children}
    </div>
  );
};

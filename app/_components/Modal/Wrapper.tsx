"use client";
import { useClickAway } from "@/app/_hooks/useClickAway";
import { FC, PropsWithChildren, useEffect, useRef } from "react";

interface WrapperProps extends PropsWithChildren {
  onClose: () => void;
}

export const Wrapper: FC<WrapperProps> = ({ children, onClose }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useClickAway(wrapperRef, onClose);

  return (
    <div ref={wrapperRef} className="w-[560px]">
      {children}
    </div>
  );
};

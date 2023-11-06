"use client";
import { FC } from "react";

interface CloseButtonProps {
  onClose: () => void;
}

export const CloseButton: FC<CloseButtonProps> = ({ onClose }) => {
  return (
    <button onClick={onClose} className="absolute right-4 top-4">
      x
    </button>
  );
};

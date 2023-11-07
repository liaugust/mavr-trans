"use client";
import { FC, PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  className?: string;
  selected?: boolean;
  onSelect: () => void;
}

export const Card: FC<CardProps> = ({
  children,
  selected,
  className,
  onSelect,
}) => {
  const selectedClassName = selected
    ? "border-primary border-[2px]"
    : "border-[#716F6B] border-[1px]";

  return (
    <div
      className={`border shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] text-center bg-white rounded-md overflow-hidden relative ${selectedClassName} ${className}`}
    >
      {children}

      {!selected && (
        <button
          className="opacity-0 absolute left-0 top-0 w-full h-full z-20"
          onClick={onSelect}
          type="button"
        >
          Select
        </button>
      )}
    </div>
  );
};

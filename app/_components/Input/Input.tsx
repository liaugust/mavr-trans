"use client";

import {
  useMemo,
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
} from "react";
import { Caption } from "../Typography";

type DefaultInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface InputProps extends DefaultInputProps {
  invalid?: boolean;
  errorMessage?: string;
}

const baseInputStyles = {
  text: "placeholder:text-[#72716D] text-base text-ellipsis",
  border: "border border-[#343331] rounded-sm",
  sizing: "w-full py-[12px] px-[14px]",
};

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, errorMessage, invalid, ...rest } = props;
  const invalidClassName = "text-[#EB0000]";

  const classNames = useMemo(() => {
    const baseClassName = Object.values(baseInputStyles).join(" ");
    return [baseClassName, className, invalid ? invalidClassName : undefined];
  }, [className, invalid]);

  return (
    <div className="grid gap-y-[6px]">
      <input ref={ref} className={classNames.join(" ")} {...rest} />
      {errorMessage && (
        <Caption className={invalidClassName}>{errorMessage}</Caption>
      )}
    </div>
  );
});

Input.displayName = "Input";

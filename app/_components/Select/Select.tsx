"use client";

import { FC, useMemo } from "react";
import { Caption } from "../Typography";
import ReactSelect from "react-select";

export interface SelectProps<T> extends ReactSelectProps {
  options: T[];
  invalid?: boolean;
  errorMessage?: string;
}

const baseSelectStyles = {
  border: "border border-[#343331] rounded-sm",
  sizing: "w-full py-[9px] px-[12px]",
};

type ReactSelectProps = React.ComponentProps<typeof ReactSelect>;

export const Select = <T,>({
  errorMessage,
  invalid,
  options,
  ...rest
}: SelectProps<T>) => {
  const invalidClassName = "text-[#EB0000]";

  const classNames = useMemo(
    () => ({
      control: () => baseSelectStyles.border,
      valueContainer: () => baseSelectStyles.sizing,
    }),
    []
  );

  return (
    <>
      <ReactSelect options={options} classNames={classNames} {...rest} />
      {errorMessage && (
        <Caption className={invalidClassName}>{errorMessage}</Caption>
      )}
    </>
  );
};

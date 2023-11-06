import { FC } from "react";
import { Typography, TypographyProps } from "../Typography";

type Level = "1" | "1.1" | "2" | "3";

interface TextProps extends TypographyProps {
  level?: Level;
}

const stylesSize: Record<Level, string> = {
  1: "text-[16px] md:text-[21px]",
  "1.1": "text-[14px] md:text-[24px]",
  2: "text-[14px] md:text-[18px]",
  3: "text-[14px] md:text-[16px]",
};

export const Text: FC<TextProps> = ({
  level = "2",
  className,
  Component = "p",
  ...rest
}) => {
  return (
    <Typography
      Component={Component}
      className={`block ${stylesSize[level]} ${className}`}
      {...rest}
    />
  );
};

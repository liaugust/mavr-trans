import { FC } from "react";
import { Typography, TypographyProps } from "../Typography";

type Level = "1" | "2" | "3";

interface CaptionProps extends TypographyProps {
  level?: Level;
}

const stylesSize: Record<Level, string> = {
  1: "text-[12px] md:text-[14px]",
  2: "text-[10px] md:text-[12px]",
  3: "text-[10px]",
};

export const Caption: FC<CaptionProps> = ({
  level = "2",
  className,
  Component = "span",
  ...rest
}) => {
  return (
    <Typography
      Component={Component}
      className={`${stylesSize[level]} ${className}`}
      {...rest}
    />
  );
};

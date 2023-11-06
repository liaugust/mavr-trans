import { FC } from "react";
import { Typography, TypographyProps } from "../Typography";

type Level = "1" | "2" | "3";

interface TitleProps extends TypographyProps {
  level?: Level;
}

const stylesSize: Record<Level, string> = {
  1: "text-[26px]",
  2: "text-[22px] md:text-[25px]",
  3: "text-[14px] md:text-[24px]",
};

export const Heading: FC<TitleProps> = ({
  weight = "3",
  level = "2",
  className,
  Component = "h3",
  ...rest
}) => {
  return (
    <Typography
      weight={weight}
      Component={Component}
      className={`${stylesSize[level]} ${className}`}
      {...rest}
    />
  );
};

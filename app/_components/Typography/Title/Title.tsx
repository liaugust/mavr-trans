import { FC } from "react";
import { Typography, TypographyProps } from "../Typography";

type Level = "1" | "2" | "2.1" | "3" | "4" | "5";

interface TitleProps extends TypographyProps {
  level?: Level;
}

const stylesSize: Record<Level, string> = {
  1: "text-[32px] md:text-[62px]",
  2: "text-[32px] md:text-[46px]",
  "2.1": "text-[26px] md:text-[46px]",
  3: "text-[32px] md:text-[44px]",
  4: "text-[24px] md:text-[40px]",
  5: "text-[24px] md:text-[32px]",
};

export const Title: FC<TitleProps> = ({
  weight = "4",
  level = "2",
  className = "",
  Component = "h1",
  ...rest
}) => {
  return (
    <Typography
      weight={weight}
      Component={Component}
      className={`block ${stylesSize[level]} ${className}`}
      {...rest}
    />
  );
};

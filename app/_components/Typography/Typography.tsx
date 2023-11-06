import { FC, PropsWithChildren } from "react";

type Weight = "0" | "1" | "2" | "3" | "4";

export interface TypographyProps
  extends React.AllHTMLAttributes<HTMLElement>,
    PropsWithChildren {
  Component?: React.ElementType;
  className?: string;
  spacing?: number;
  weight?: Weight;
}

const stylesWeight: Record<Weight, string> = {
  0: "font-light",
  1: "font-normal",
  2: "font-medium",
  3: "font-bold",
  4: "font-black",
};

export const Typography: FC<TypographyProps> = ({
  spacing = 0,
  weight = "1",
  Component = "p",
  className,
  ...rest
}) => {
  const letterSpacing = spacing ? `tracking-[.${spacing}px]` : "";

  return (
    <Component
      className={`${stylesWeight[weight]} ${letterSpacing} ${className}`}
      {...rest}
    />
  );
};

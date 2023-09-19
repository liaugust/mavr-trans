import { FC, ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  weight: "normal";
  size: "sm";
}

const Typography: FC<TypographyProps> = ({ size, children }) => {
  return <div className={`text-${size}`}>{children}</div>;
};

export default Typography;

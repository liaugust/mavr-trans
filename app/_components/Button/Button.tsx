import { ButtonHTMLAttributes, FC, ReactNode, memo } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

type ButtonSize = "sm" | "md";

type ButtonVariant =
  | "filled"
  | "filled_primary"
  | "outlined"
  | "outlined_primary";

const baseClassName =
  "disabled:cursor-not-allowed disabled:opacity-[0.5] font-base uppercase border rounded";

const buttonSizeStyle: Record<ButtonSize, string> = {
  sm: `py-3 px-7`,
  md: `py-6 px-7`,
};

const buttonVariantStyle: Record<ButtonVariant, string> = {
  filled: `border-primary bg-primary text-dark`,
  filled_primary: `border-primary bg-primary text-white`,

  outlined: `border-gray bg-white text-gray`,
  outlined_primary: `border-primary text-primary`,
};

const Button: FC<ButtonProps> = memo(
  ({
    children,
    className,
    size = "sm",
    type = "button",
    variant = "filled",
    ...rest
  }) => {
    return (
      <button
        {...rest}
        type={type}
        className={` ${baseClassName} ${buttonSizeStyle[size]} ${buttonVariantStyle[variant]} ${className} hover:opacity-[0.8] transition-opacity`}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

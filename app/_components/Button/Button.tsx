import { ButtonHTMLAttributes, FC, ReactNode, memo } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export enum ButtonSize {
  sm = "sm",
  md = "md",
}

export enum ButtonVariant {
  Filled = "filled",
  FilledPrimary = "filled_primary",

  Outlined = "outlined",
  OutlinedPrimary = "outlined_primary",
}

const buttonSizeStyle: Record<ButtonSize, string> = {
  sm: `font-base uppercase py-3 px-7 border rounded`,
  md: `font-base uppercase py-6 px-7 border rounded`,
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
    type = "button",
    size = ButtonSize.sm,
    variant = ButtonVariant.Filled,
    ...rest
  }) => {
    return (
      <button
        {...rest}
        type={type}
        className={`${buttonSizeStyle[size]} ${buttonVariantStyle[variant]} ${className}`}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

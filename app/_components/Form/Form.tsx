"use client";
import {
  FC,
  DetailedHTMLProps,
  PropsWithChildren,
  FormHTMLAttributes,
} from "react";

type DefaultFormProps = DetailedHTMLProps<
  FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

export interface FormProps extends DefaultFormProps, PropsWithChildren {}

export const Form: FC<FormProps> = ({ children, onSubmit, ...rest }) => {
  return (
    <form onSubmit={onSubmit} {...rest}>
      {children}
    </form>
  );
};

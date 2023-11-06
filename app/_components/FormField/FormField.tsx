import { FC } from "react";
import { Input, InputProps } from "../Input";

interface FormFieldProps extends InputProps {}

export const FormField: FC<FormFieldProps> = ({ ...rest }) => {
  return (
    <div>
      <Input {...rest} />
    </div>
  );
};

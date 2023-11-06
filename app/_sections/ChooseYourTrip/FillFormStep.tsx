import { Input } from "@/app/_components/Input";
import { Title } from "@/app/_components/Typography";
import { FC } from "react";
import { Control, Controller } from "react-hook-form";
import { FormFields } from "./request-ride-schema";

interface FillFormStepProps {
  control: Control<FormFields>;
}

export const FillFormStep: FC<FillFormStepProps> = ({ control }) => {
  return (
    <>
      <Title
        level="2.1"
        weight="4"
        className="capitalize text-center mb-10 md:mb-[60px]"
      >
        Fill the form
      </Title>

      <div className="mb-[35px] grid gap-y-[14px] max-w-[560px] mx-auto">
        <Controller
          control={control}
          name="userInfo.firstName"
          render={({
            field: { value, onChange },
            fieldState: { error, invalid },
          }) => (
            <Input
              invalid={invalid}
              errorMessage={error?.message}
              placeholder="First name"
              value={value}
              onChange={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="userInfo.lastName"
          render={({
            field: { value, onChange },
            fieldState: { error, invalid },
          }) => (
            <Input
              invalid={invalid}
              errorMessage={error?.message}
              placeholder="Second name"
              value={value}
              onChange={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="userInfo.phone"
          render={({
            field: { value, onChange },
            fieldState: { error, invalid },
          }) => (
            <Input
              invalid={invalid}
              errorMessage={error?.message}
              placeholder="Phone number"
              value={value}
              onChange={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="userInfo.email"
          render={({
            field: { value, onChange },
            fieldState: { error, invalid },
          }) => (
            <Input
              invalid={invalid}
              errorMessage={error?.message}
              placeholder="Email"
              value={value}
              onChange={onChange}
            />
          )}
        />
      </div>
    </>
  );
};

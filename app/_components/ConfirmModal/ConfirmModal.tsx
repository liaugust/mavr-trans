import { FC } from "react";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { Controller, useForm } from "react-hook-form";
import { RideSchema, rideSchema } from "@/app/_storage/modules/rides/core";
import { zodResolver } from "@hookform/resolvers/zod";

interface ConfirmModalProps {
  title: string;
  onCancel: () => void;
  confirmRide?: boolean;
  onConfirm: (values: RideSchema) => void;
}

export const ConfirmModal: FC<ConfirmModalProps> = ({
  title,
  onCancel,
  onConfirm,
  confirmRide,
}) => {
  const { control, handleSubmit, formState } = useForm<RideSchema>({
    defaultValues: {
      departureAt: new Date(),
      arrivalAt: new Date(),
    },
    resolver: zodResolver(rideSchema),
    mode: "onBlur",
  });

  const { isDirty, isLoading, isValid, isSubmitting, isValidating } = formState;
  const disabled =
    !isDirty || !isValid || isLoading || isSubmitting || isValidating;

  const onSubmit = handleSubmit(async (values) => {
    await onConfirm(values);
  });

  return (
    <Modal title={title} onClose={onCancel}>
      <form onSubmit={onSubmit}>
        {confirmRide && (
          <div className="grid grid-cols-2 gap-x-[30px] mb-10">
            <Controller
              name="departureAt"
              control={control}
              render={({ field: { value, onChange } }) => (
                <input
                  value={value as unknown as string}
                  onChange={onChange}
                  type="date"
                />
              )}
            />
            <Controller
              name="arrivalAt"
              control={control}
              render={({ field: { value, onChange } }) => (
                <input
                  value={value as unknown as string}
                  onChange={onChange}
                  type="date"
                />
              )}
            />
          </div>
        )}

        <div className="grid grid-cols-2 gap-x-[30px]">
          <Button
            type="button"
            onClick={onCancel}
            variant="outlined"
            className="w-full max-w-[300px] m-auto block"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={confirmRide ? disabled : false}
            className="w-full max-w-[300px] m-auto block"
          >
            Confirm
          </Button>
        </div>
      </form>
    </Modal>
  );
};

"use client";
import { FC, useState } from "react";
import { Checkout } from "./CheckoutStep";
import { ChoosePassengersStep } from "./ChoosePassengersStep";
import { FillFormStep } from "./FillFormStep";
import { ChooseOptionStep } from "./ChooseOptionStep";
import { ChooseCarStep } from "./ChooseCarStep";
import { Controller, useForm } from "react-hook-form";
import { FormFields, schema } from "./request-ride-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Map } from "./Map";
import { ChooseClassStep } from "./ChooseClassStep";
import { Button } from "@/app/_components/Button";
import { createRide } from "@/app/_state/rides";

export const ChooseYourTrip: FC = () => {
  const [step, setStep] = useState(0);

  const { control, handleSubmit, watch } = useForm<FormFields>({
    defaultValues: {
      passengers: 1,
      option: null,
      car: null as unknown as number,
      userInfo: { firstName: "", lastName: "", phone: "", email: "" },
      waypoints: [
        {
          fullAddress: "",
          shortAddress: "",
          lng: 0,
          lat: 0,
        },
        {
          fullAddress: "",
          shortAddress: "",
          lng: 0,
          lat: 0,
        },
      ],
    },
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = handleSubmit(async (values) => {
    console.log('values', values)
    // await createRide({
    //   // arrivalDate:
    //   carId: values.car,
    //   categoryId: values.category,
    //   distance: values.distance,
    // });
  });

  const values = watch();
  const { category, car, passengers, userInfo, waypoints } = values;

  const zeroStepDisabled = !category;
  const firstStepDisabled = !passengers || zeroStepDisabled;
  const secondStepDisabled = !car || firstStepDisabled;
  const mapStepDisabled =
    !waypoints.every((waypoint) => waypoint.lat && waypoint.lng) ||
    waypoints.length < 2;
  const fourthStepDisabled =
    !userInfo.email ||
    !userInfo.phone ||
    !userInfo.firstName ||
    !userInfo.lastName ||
    secondStepDisabled ||
    mapStepDisabled;

  const isZero = step === 0;
  const isFirst = step === 1;
  const isSecond = step === 2;
  const isFourth = step === 4;

  const disabled = isZero
    ? zeroStepDisabled
    : isFirst
    ? firstStepDisabled
    : isSecond
    ? secondStepDisabled
    : isFourth
    ? fourthStepDisabled
    : false;

  return (
    <>
      <Map control={control} />

      <section className="pt-[80px] pb-[60px]">
        <div className="container">
          <div
            className={`md:py-[60px] md:px-10 ${
              step === 4 ? "bg-white" : ""
            } md:max-w-max mx-auto`}
          >
            {step === 0 && (
              <Controller
                control={control}
                name="category"
                render={({ field: { value, onChange } }) => (
                  <ChooseClassStep value={value} onChange={onChange} />
                )}
              />
            )}
            {step === 1 && (
              <Controller
                control={control}
                name="passengers"
                render={({ field: { value, onChange } }) => (
                  <ChoosePassengersStep value={value} onChange={onChange} />
                )}
              />
            )}
            {step === 2 && (
              <Controller
                control={control}
                name="car"
                render={({ field: { value, onChange } }) => (
                  <ChooseCarStep
                    value={value}
                    onChange={onChange}
                    passengers={passengers}
                  />
                )}
              />
            )}
            {step === 3 && (
              <Controller
                name="option"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <ChooseOptionStep value={value} onChange={onChange} />
                )}
              />
            )}
            {step === 4 && <FillFormStep control={control} />}
            {step === 5 && <Checkout />}

            <div className="grid grid-cols-2 md:grid-cols-[300px_300px] gap-x-5 md:gap-x-10 mx-a justify-center">
              <Button
                disabled={step === 0}
                onClick={() => setStep((prev) => prev - 1)}
                variant="outlined"
              >
                Back
              </Button>

              <Button
                disabled={disabled}
                onClick={
                  step === 4 ? onSubmit : () => setStep((prev) => prev + 1)
                }
              >
                {step === 4 ? "Pay for transfer" : "Next"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

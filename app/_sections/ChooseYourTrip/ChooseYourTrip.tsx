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
import { MessageStep } from "./Message";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/app/_i18n/client";
import { WithLang } from "@/app/types";

export const ChooseYourTrip: FC<WithLang> = ({ lang }) => {
  const { t } = useTranslation(lang);
  const [step, setStep] = useState(0);
  const router = useRouter();

  const { control, handleSubmit, watch, setValue } = useForm<FormFields>({
    defaultValues: {
      passengers: 1,
      option: null as unknown as { id: number; name: string } | null,
      car: null as unknown as { id: number; name: string },
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
    try {
      await createRide({
        carId: values.car.id,
        distance: values.distance,
        phone: values.userInfo.phone,
        categoryId: values.category.id,
        optionIds: values.option ? [values.option.id] : [],
        passengers: values.passengers,
        waypoints: values.waypoints.map((w, idx) => ({
          fullAddress: w.fullAddress,
          shortAddress: w.shortAddress,
          order: idx,
          lng: w.lng,
          lat: w.lat,
        })),
      });
      setStep(6);
    } catch (e) {
      setStep(7);
    }
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
      <Map setValue={setValue} control={control} lang={lang} />

      <section className="pt-[60px] pb-[60px]" id="manage-trip">
        <div className="container px-0">
          <div
            className={`py-10 px-[10px] md:py-[60px] md:px-10 ${
              step === 5 ? "bg-white max-w-[760px]" : ""
            } mx-auto`}
          >
            {step === 0 && (
              <Controller
                control={control}
                name="category"
                render={({ field: { value, onChange } }) => (
                  <ChooseClassStep
                    lang={lang}
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
            )}
            {step === 1 && (
              <Controller
                control={control}
                name="passengers"
                render={({ field: { value, onChange } }) => (
                  <ChoosePassengersStep
                    lang={lang}
                    maximumSeats={category.maximumSeats}
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
            )}
            {step === 2 && (
              <Controller
                control={control}
                name="car"
                render={({ field: { value, onChange } }) => (
                  <ChooseCarStep
                    lang={lang}
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
                  <ChooseOptionStep
                    lang={lang}
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
            )}
            {step === 4 && <FillFormStep lang={lang} control={control} />}
            {step === 5 && <Checkout lang={lang} control={control} />}
            {step === 6 && <MessageStep lang={lang} type="success" />}
            {step === 7 && <MessageStep lang={lang} type="failure" />}

            <div
              className={
                "grid md:grid-flow-col md:auto-cols-[300px] max-w-[640px] gap-x-5 md:gap-x-10 mx-auto justify-center"
              }
            >
              {step <= 5 && (
                <Button
                  disabled={step === 0}
                  onClick={() => setStep((prev) => prev - 1)}
                  variant="outlined"
                >
                  {t("pages.trip.form.buttons.prev")}
                </Button>
              )}

              <Button
                disabled={disabled}
                onClick={
                  step === 5
                    ? onSubmit
                    : step === 7 || step === 6
                    ? () => router.push("/")
                    : () => setStep((prev) => prev + 1)
                }
              >
                {step === 7 || step === 6
                  ? t("pages.trip.form.buttons.go_home")
                  : t("pages.trip.form.buttons.next")}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

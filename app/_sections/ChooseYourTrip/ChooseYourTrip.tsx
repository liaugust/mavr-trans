"use client";
import { FC, useMemo, useState } from "react";
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
import { useSession } from "next-auth/react";

export const ChooseYourTrip: FC<WithLang> = ({ lang }) => {
  const { t } = useTranslation(lang);
  const { data, update } = useSession();
  const [step, setStep] = useState(0);
  const router = useRouter();

  const userPhone = data?.user.phoneNumber;

  const { control, handleSubmit, watch, setValue, formState } =
    useForm<FormFields>({
      defaultValues: {
        passengers: 1,
        option: null as unknown as { id: number; name: string } | null,
        car: null as unknown as { id: number; name: string },
        phone: userPhone || "",
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
      mode: "onChange",
    });

  const onSubmit = handleSubmit(async (values) => {
    console.log("values", values);
    try {
      await createRide({
        phone: values.phone,
        carId: values.car.id,
        number: values.number,
        distance: values.distance,
        categoryId: values.category.id,
        departureAt: values.departureAt,
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

      if (!userPhone && values.phone) {
        await update({ phone: values.phone });
      }

      setStep(6);
    } catch (e) {
      setStep(7);
    }
  });

  const values = watch();
  const { category, car, passengers, phone, waypoints, departureAt } = values;

  const mapStepDisabled =
    !waypoints.every((waypoint) => waypoint.lat && waypoint.lng) ||
    waypoints.length < 2;

  const disabled = useMemo(() => {
    if (step === 0) {
      return !category;
    }

    if (step === 1) {
      return !passengers;
    }

    if (step === 2) {
      return !car;
    }

    if (step === 3) {
      return false;
    }

    if (step === 4) {
      return !phone || !departureAt || mapStepDisabled || !formState.isValid;
    }

    if (step === 5) {
      return formState.isSubmitting;
    }

    return true;
  }, [
    step,
    passengers,
    mapStepDisabled,
    phone,
    category,
    departureAt,
    car,
    formState.isSubmitting,
    formState.isValid,
  ]);

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
            {step === 4 && (
              <FillFormStep
                hasPhone={Boolean(userPhone)}
                control={control}
                lang={lang}
              />
            )}
            {step === 5 && <Checkout lang={lang} control={control} />}
            {step === 6 && <MessageStep lang={lang} type="success" />}
            {step === 7 && <MessageStep lang={lang} type="failure" />}

            <div
              className={
                "grid grid-flow-col md:auto-cols-[300px] max-w-[640px] gap-x-5 md:gap-x-10 mx-auto justify-center"
              }
            >
              {step <= 5 && (
                <Button
                  disabled={step === 0}
                  onClick={() => {
                    setStep((prev) => prev - 1);
                  }}
                  variant="outlined"
                >
                  {t("pages.trip.buttons.prev")}
                </Button>
              )}

              <Button
                disabled={disabled}
                onClick={() => {
                  if (step === 5) {
                    return onSubmit();
                  }

                  if (step === 7 || step === 6) {
                    return router.push(`/${lang}`);
                  }

                  return setStep((prev) => prev + 1);
                }}
              >
                {step === 7 || step === 6
                  ? t("pages.trip.buttons.go_home")
                  : t("pages.trip.buttons.next")}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

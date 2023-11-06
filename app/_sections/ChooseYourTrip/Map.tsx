import { Button } from "@/app/_components/Button";
import { Title } from "@/app/_components/Typography";
import {
  useJsApiLoader,
  GoogleMap,
  DirectionsRenderer,
  Libraries,
} from "@react-google-maps/api";
import { FC, useCallback, useEffect, useState } from "react";
import { Control, Controller, useFieldArray, useWatch } from "react-hook-form";
import { FormFields } from "./request-ride-schema";
import { PlacesAutocomplete } from "@/app/_components/PlacesAutocomplete";

interface MapProps {
  control: Control<FormFields>;
}

const center = { lat: 48.8584, lng: 2.2945 };
const libraries = ["places"] as Libraries;

export const Map: FC<MapProps> = ({ control }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBaCRGexxALobAN1yY3dckkEvr-qESe5xM",
    libraries,
  });

  const { fields, append, remove, swap } = useFieldArray({
    name: "waypoints",
    control,
  });

  const { waypoints } = useWatch({ control });

  const [directionResponse, setDirectionResponse] =
    useState<google.maps.DirectionsResult | null>(null);

  const calculateRoute = useCallback(
    async (waypoints: FormFields["waypoints"]) => {
      const allWaypoints = waypoints.map((w) => ({ ...w })) || [];

      const origin = allWaypoints.shift();
      const destination = allWaypoints.pop();

      const directionsService = new google.maps.DirectionsService();
      const results = await directionsService.route({
        origin: origin?.fullAddress as string,
        waypoints: allWaypoints.map((w) => ({
          location: w.fullAddress as string,
          stopover: true,
        })),
        destination: destination?.fullAddress as string,
        travelMode: google.maps.TravelMode.DRIVING,
      });

      console.log('results', results);

      setDirectionResponse(results);
    },
    []
  );

  useEffect(() => {
    if (waypoints && waypoints.every((w) => w.lat && w.lng)) {
      calculateRoute(waypoints as FormFields["waypoints"]);
    }
  }, [waypoints, calculateRoute]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <section className="pt-[100px]">
      <div className="container">
        <div className="md:flex md:flex-col md:items-center">
          <Title
            level="2.1"
            weight="3"
            className="mb-5 md:mb-10 capitalize text-center"
          >
            Choose your trip route
          </Title>

          <div className="grid gap-y-[12px] w-[calc(100%_-_50px)] md:w-[560px] relative">
            {fields.map((field, index) => (
              <Controller
                key={field.id}
                control={control}
                name={`waypoints.${index}`}
                render={({ field: { onChange } }) => (
                  <PlacesAutocomplete
                    onRemove={() => remove(index)}
                    onPlaceChanged={onChange}
                    removable={fields.length >= 3}
                    placeholder={
                      index === 0
                        ? "Select a starting point or click on the map"
                        : "Select your destination"
                    }
                  />
                )}
              />
            ))}

            {fields.length === 2 && (
              <div className="absolute -right-[42px] top-10">
                <button onClick={() => swap(0, 1)}>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31.9024 19.8377C31.7397 19.4237 31.3375 19.0176 30.9095 18.8345C30.55 18.6832 30.336 18.6673 28.6584 18.6434L26.7925 18.6115L26.7925 11.8757C26.784 4.5825 26.8096 4.90894 26.3132 4.60638C25.8253 4.31179 25.192 4.44714 24.8496 4.92486L24.6527 5.19557L24.6527 12.5126C24.6527 19.1211 24.6698 19.8616 24.7897 20.1084C24.8667 20.2597 25.0122 20.4269 25.1149 20.4826C25.2348 20.5463 25.988 20.5941 27.4601 20.618L29.6256 20.6578L20.8781 29.5195L19.8767 28.5163C17.2319 25.8649 12.1563 20.6976 12.1563 20.6578C12.1563 20.6339 13.1235 20.618 14.3047 20.618L16.453 20.618L17.035 20.0765L17.035 13.3885L18.9437 13.3566C20.6813 13.3327 20.8696 13.3168 21.1863 13.1576C21.58 12.9585 21.9223 12.64 22.1192 12.2817C22.3332 11.8916 22.2989 11.0874 22.0679 10.6814C21.8111 10.2435 11.8482 0.163587 11.5828 0.0680428C11.2319 -0.0513872 10.8296 -0.0115772 10.5386 0.171549C10.0593 0.497991 0.336078 10.4346 0.164896 10.7769C-0.254506 11.6289 0.156335 12.7117 1.05505 13.1576C1.38886 13.3168 1.56004 13.3327 3.31467 13.3566L5.22337 13.3885L5.24049 19.352L5.26617 25.3155L5.5315 25.5624C6.02794 26.0242 6.82394 25.9366 7.19199 25.3713C7.35461 25.1244 7.36317 24.9254 7.36317 18.6434C7.36317 12.8152 7.34605 12.1384 7.22622 11.8916C7.14919 11.7403 7.00368 11.5731 6.90097 11.5174C6.78114 11.4537 6.02794 11.4059 4.55576 11.382L2.39028 11.3422L11.1378 2.48053L12.1392 3.48374C14.6898 6.0475 19.8596 11.3024 19.8596 11.3422C19.8596 11.3661 18.8924 11.382 17.7112 11.382L15.5629 11.382L14.9808 11.9235L14.9808 18.6115L13.0807 18.6434C11.3346 18.6673 11.1463 18.6832 10.8296 18.8424C10.4359 19.0415 10.0935 19.36 9.89669 19.7183C9.68271 20.1084 9.71694 20.9126 9.94804 21.3186C10.2048 21.7565 20.1677 31.8364 20.433 31.932C20.784 32.0514 21.1863 32.0116 21.4687 31.8285C21.6228 31.7249 22.4445 30.9287 23.3089 30.0529C24.1649 29.1771 26.4074 26.9079 28.2818 25.005C30.3531 22.9031 31.7569 21.4142 31.851 21.2231C32.0307 20.8568 32.0479 20.2358 31.9024 19.8377Z"
                      fill="#808185"
                    />
                  </svg>
                </button>
              </div>
            )}

            <Button
              onClick={() =>
                append({ fullAddress: "", shortAddress: "", lat: 0, lng: 0 })
              }
            >
              add more
            </Button>
          </div>
        </div>
      </div>

      <GoogleMap
        center={center}
        zoom={15}
        mapContainerClassName="w-full h-[400px] md:h-[700px] mt-10"
        options={{
          zoomControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
          streetViewControl: false,
        }}
      >
        {directionResponse && (
          <DirectionsRenderer directions={directionResponse} />
        )}
      </GoogleMap>
    </section>
  );
};

import { Autocomplete } from "@react-google-maps/api";
import { FC, useCallback, useRef } from "react";
import { Input, InputProps } from "../Input";

type Place = {
  fullAddress: string;
  shortAddress: string;
  lat: number;
  lng: number;
};

interface PlacesAutocompleteProps extends InputProps {
  onPlaceChanged: (value: Place) => void;
  onRemove: () => void;
  removable: boolean;
}

export const PlacesAutocomplete: FC<PlacesAutocompleteProps> = ({
  onPlaceChanged,
  removable,
  onRemove,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const autoCompleteRef = useRef<Autocomplete>(null);

  const onPlaceChangeHandler = useCallback(() => {
    const bounds = autoCompleteRef.current?.state.autocomplete;
    const place = bounds?.getPlace();

    const coords = place?.geometry?.location;

    if (place) {
      onPlaceChanged({
        fullAddress: place.formatted_address || "Unknown location address",
        shortAddress: place.name || "Unknown location name",
        lat: coords?.lat() || 0,
        lng: coords?.lng() || 0,
      });
    }
  }, [onPlaceChanged]);

  return (
    <Autocomplete ref={autoCompleteRef} onPlaceChanged={onPlaceChangeHandler}>
      <div className="relative">
        <Input {...rest} ref={inputRef} />

        {removable && (
          <button
            onClick={onRemove}
            className="absolute right-[18px] top-1/2 -translate-y-1/2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
            >
              <path
                d="M9.2849 0.0400957C7.28546 0.286276 5.52003 1.02071 3.90652 2.28444C3.47953 2.62088 2.46954 3.65484 2.13699 4.09796C1.04078 5.55863 0.355138 7.15879 0.08006 8.89847C-0.0266867 9.57136 -0.0266867 11.4259 0.08006 12.0988C0.416722 14.2283 1.38976 16.1936 2.8719 17.7445C4.48952 19.435 6.46022 20.4812 8.78812 20.8874C9.5025 21.0105 11.0175 21.0392 11.7729 20.9408C16.6504 20.3294 20.4358 16.4931 20.9655 11.6188C21.0311 11.0238 20.9983 9.43185 20.908 8.88205C20.1525 4.22925 16.441 0.630927 11.8099 0.0565077C11.2556 -0.00914025 9.78579 -0.0214492 9.2849 0.0400957ZM11.8099 1.61565C14.77 2.08339 17.2745 3.92153 18.5637 6.58027C19.1959 7.87682 19.4628 9.04617 19.4628 10.4986C19.4628 11.9511 19.1959 13.1204 18.5637 14.417C17.2704 17.0798 14.7865 18.9016 11.7893 19.3857C11.1653 19.4883 9.87201 19.4883 9.22332 19.3898C8.27492 19.2421 7.43326 18.9795 6.57518 18.561C3.90241 17.2645 2.05898 14.7493 1.59915 11.7706C1.50061 11.1223 1.50061 9.87498 1.59915 9.2267C2.05898 6.24793 3.90241 3.73279 6.57518 2.43625C7.6057 1.93568 8.56231 1.66899 9.81864 1.53769C10.1594 1.50076 11.3952 1.55 11.8099 1.61565Z"
                fill="#716F6B"
              />
              <path
                d="M6.39043 6.06329C6.17694 6.17818 6.01682 6.39974 5.99218 6.6172C5.94291 7.04801 5.87312 6.96185 7.71655 8.8041L9.40807 10.4986L7.71655 12.1891C5.87312 14.0354 5.94291 13.9493 5.99218 14.3801C6.01682 14.5975 6.17694 14.8191 6.39043 14.934C6.54644 15.0201 6.85437 15.0365 7.03501 14.9709C7.0966 14.9463 7.9013 14.1749 8.82507 13.2558L10.4961 11.5859L12.1712 13.2558C13.0908 14.1749 13.8955 14.9463 13.9571 14.9709C14.2322 15.0694 14.6346 14.9791 14.8111 14.7822C15 14.5647 15.0656 14.2201 14.9712 13.9575C14.9466 13.8959 14.1747 13.0917 13.2551 12.1686L11.5841 10.4986L13.2551 8.82461C14.1747 7.90554 14.9466 7.10135 14.9712 7.03981C15.0369 6.85928 15.0205 6.55155 14.9343 6.39564C14.8193 6.18228 14.5976 6.02226 14.38 5.99765C13.9489 5.94841 14.0351 5.87866 12.1876 7.7209L10.4961 9.41134L8.82097 7.74142C7.9013 6.82235 7.0966 6.05099 7.03501 6.02637C6.85437 5.96072 6.54644 5.97713 6.39043 6.06329Z"
                fill="#716F6B"
              />
            </svg>
          </button>
        )}
      </div>
    </Autocomplete>
  );
};

"use client";

import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getAllRides } from "@/app/_state/rides";
import { getUsers } from "@/app/_state/users";
import { Status } from "@prisma/client";
import { UserEntity } from "@/app/_storage/modules/users/core";
import { RideEntity } from "@/app/_storage/modules/rides/core";
import { WithLang } from "@/app/types";
import { Language, languages } from "@/app/_i18n/settings";

interface AdminProviderProps extends PropsWithChildren, WithLang {}

interface State {
  lang: Language;
  leads: UserEntity[];
  rides: RideEntity[];
}

interface Store extends State {
  confirm: (rideId: number) => void;
}

const StoreContext = createContext<Store>({
  leads: [],
  rides: [],
  lang: "en",

  confirm: () => {},
});

export const useAdminContext = () => useContext(StoreContext);

const initState = async () => {
  const rides = await getAllRides();
  const leads = await getUsers();

  return { rides, leads, lang: languages[0] };
};

export const AdminProvider: FC<AdminProviderProps> = ({ children, lang }) => {
  const [state, setState] = useState<State>({
    rides: [],
    leads: [],
    lang,
  });

  const value = useMemo(() => {
    return {
      lang,
      rides: state.rides,
      leads: state.leads,

      confirm: (rideId: number) => {
        setState((prev) => ({
          ...prev,
          rides: prev.rides.map((ride) => {
            if (ride.id === rideId) {
              return {
                ...ride,
                status: Status.active,
              };
            }

            return ride;
          }),
        }));
      },
    };
  }, [state, lang]);

  useEffect(() => {
    initState().then(setState);
  }, []);

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

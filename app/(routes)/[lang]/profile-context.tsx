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
import { RideEntity } from "../../_storage/modules/rides/core";
import { getUserRides } from "../../_state/rides";

interface StoreProviderProps extends PropsWithChildren {}

interface State {
  active: RideEntity[];
  inactive: RideEntity[];
}

const ProfileContext = createContext<State>({
  active: [],
  inactive: [],
});

export const useProfile = () => useContext(ProfileContext);

export const ProfileProvider: FC<StoreProviderProps> = ({ children }) => {
  const [rides, setRides] = useState<RideEntity[]>([]);

  useEffect(() => {
    getUserRides().then(setRides);
  }, []);

  const value = useMemo(() => {
    const sortedRides = rides.reduce(
      (acc, ride) => {
        const arr = {
          done: acc.inactive,
          active: acc.active,
          waiting: acc.active,
        };

        arr[ride.status].push(ride);

        return acc;
      },
      { active: [] as RideEntity[], inactive: [] as RideEntity[] }
    );

    return sortedRides;
  }, [rides]);

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};

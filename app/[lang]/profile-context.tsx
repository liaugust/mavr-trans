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
import { RideEntity } from "../_storage/modules/rides/core";
import { getUserRides } from "../_state/rides";

interface StoreProviderProps extends PropsWithChildren {}

interface State {
  active: RideEntity[];
  inactive: RideEntity[];
  successfulRides: number;
}

const ProfileContext = createContext<State>({
  active: [],
  inactive: [],
  successfulRides: 0,
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

        acc.successfulRides += ride.status === "done" ? 1 : 0;

        return acc;
      },
      {
        active: [] as RideEntity[],
        inactive: [] as RideEntity[],
        successfulRides: 0,
      }
    );

    return sortedRides;
  }, [rides]);

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};

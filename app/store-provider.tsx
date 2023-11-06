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
import { CategoryEntity } from "./_storage/modules/categories/core";
import { OptionEntity } from "./_storage/modules/options/core";
import { CarEntity } from "./_storage/modules/cars/core";
import { getCategories } from "./_state/categories";
import { getCars } from "./_state/cars";
import { getOptions } from "./_state/options";

interface StoreProviderProps extends PropsWithChildren {}

interface State {
  cars: CarEntity[];
  options: OptionEntity[];
  categories: CategoryEntity[];
}

type Key = keyof State;

interface Store extends State {
  set: (key: Key, entities: State[Key]) => void;
  add: (key: Key, entity: State[Key][number]) => void;
  remove: (key: Key, id: number) => void;
  toggle: (key: Key, id: number) => void;
  update: (key: Key, entity: State[Key][number]) => void;
}

const StoreContext = createContext<Store>({
  categories: [],
  options: [],
  cars: [],

  set: () => {},
  add: () => {},
  update: () => {},
  remove: () => {},
  toggle: () => {},
});

export const useStore = () => useContext(StoreContext);

const initState = async () => {
  const categories = await getCategories();
  const options = await getOptions();
  const cars = await getCars();

  return { categories, options, cars };
};

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  const [state, setState] = useState<State>({
    cars: [],
    options: [],
    categories: [],
  });

  const value = useMemo(() => {
    return {
      categories: state.categories,
      options: state.options,
      cars: state.cars,

      set: (key: Key, entities: State[Key]) => {
        setState((prev) => ({
          ...prev,
          [key]: entities,
        }));
      },

      remove: (key: Key, id: number) => {
        setState((prev) => ({
          ...prev,
          [key]: prev[key].filter((item) => item.id !== id),
        }));
      },

      update: (key: Key, entity: State[Key][number]) => {
        setState((prev) => ({
          ...prev,
          [key]: prev[key].map((item) =>
            item.id === entity.id ? entity : item
          ),
        }));
      },

      add: (key: Key, entity: State[Key][number]) => {
        setState((prev) => ({
          ...prev,
          [key]: [...prev[key], entity],
        }));
      },

      toggle: (key: Key, id: number) => {
        setState((prev) => ({
          ...prev,
          [key]: prev[key].map((item) =>
            item.id === id ? { ...item, active: !item.active } : item
          ),
        }));
      },
    };
  }, [state]);

  useEffect(() => {
    initState().then(setState);
  }, []);

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

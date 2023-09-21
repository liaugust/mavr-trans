import { atom } from "nanostores";
import { CarEntity } from "../_storage/modules/cars/core";
import { useStore } from "@nanostores/react";

const $cars = atom<CarEntity[]>([]);

export const useCars = () => useStore($cars);

export const setCars = (cars: CarEntity[]) => {
  $cars.set(cars || []);
};

export const addCar = (car: CarEntity) => {
  $cars.set([...$cars.get(), car]);
};

export const removeCar = (car: CarEntity) => {
  $cars.set($cars.get().filter((c) => c.id === car.id));
};

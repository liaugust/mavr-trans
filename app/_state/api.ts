import axios from "axios";
import { CarEntity } from "../_storage/modules/cars/core";
import { setCars } from ".";

export const getCars = async () => {
  try {
    const response = await axios.get<{ cars: CarEntity[] }>("/api/cars");
    const { cars } = response.data;

    setCars(cars);
  } catch (e: unknown) {
    console.log("Error: ", e);
  }
};

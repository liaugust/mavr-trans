import { atom } from "nanostores";
import { CarEntity } from "../_storage/modules/cars/core";
// import { useStore } from "@nanostores/react";
import { CategoryEntity } from "../_storage/modules/categories/core";
import { OptionEntity } from "../_storage/modules/options/core";
import { create } from "zustand";
import { proxy } from "valtio";

export const $cars = atom<CarEntity[]>([]);
export const $options = atom<OptionEntity[]>([]);
// export const $categories = atom<CategoryEntity[]>([]);

// export const $categories = atom<CategoryEntity[]>([]);

// export const useOptions = () => useStore($options);
// export const useCategories = () => useStore($categories);

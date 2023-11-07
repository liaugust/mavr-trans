import { headers } from "next/headers";

export type Language = "en" | "uk" | "it";

export const fallbackLng: Language = "en";
export const languages: Language[] = [fallbackLng, "uk", "it"];
export const defaultNS = "translation";
export const cookieName = "i18next";

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}

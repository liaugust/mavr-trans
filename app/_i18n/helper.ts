import { headers } from "next/headers";
import { Language, fallbackLng } from "./settings";

export function getLanguage(): Language {
  const language = headers().get("x-language") as Language | null;
  return language ?? fallbackLng;
}

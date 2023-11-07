import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { Language, getOptions } from "./settings";
import { getLanguage } from "./helper";

const initI18next = async (lng: Language, ns: string) => {
  // on server side we create a new instance for each render, because during compilation everything seems to be executed in parallel
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend((language: string, namespace: string) => {
        return import(`./locales/${language}/${namespace}.json`);
      })
    )
    .init(getOptions(lng, ns));
  return i18nInstance;
};

export async function useTranslation(options = {}) {
  const language = getLanguage();
  const namespace = "translation";
  const i18nextInstance = await initI18next(language, namespace);
  return {
    t: i18nextInstance.getFixedT(
      language,
      namespace,
      //   @ts-ignore
      options.keyPrefix
    ),
    i18n: i18nextInstance,
  };
}

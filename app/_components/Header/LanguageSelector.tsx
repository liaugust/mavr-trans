import { WithLang } from "@/app/types";
import ReactSelect, { CSSObjectWithLabel, SingleValue } from "react-select";
import { FC, useCallback, useId, useMemo } from "react";
import { languages } from "@/app/_i18n/settings";
import { usePathname } from "next/navigation";

interface LanguageSelectorProps extends WithLang {}

const languageOptions = languages.map((value) => ({ label: value, value }));

const styles: Record<string, (base: CSSObjectWithLabel) => CSSObjectWithLabel> =
  {
    control: (base) => ({
      ...base,
      border: "none",
      minHeight: "unset",
      zIndex: 10,
    }),
    menu: (base) => ({
      ...base,
      zIndex: 30,
    }),
    container: (base) => ({
      ...base,
      width: 50,
    }),
    valueContainer: (base) => ({
      ...base,
      padding: 0,
    }),
    input: (base) => ({
      ...base,
      margin: 0,
      padding: 0,
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: "none",
    }),
    indicatorsContainer: (base) => ({
      ...base,
      padding: 0,
    }),
    dropdownIndicator: (base) => ({
      ...base,
      padding: 0,
    }),
    option: (base) => ({
      ...base,
      padding: 2,
    }),
  };

export const LanguageSelector: FC<LanguageSelectorProps> = ({ lang }) => {
  const id = useId();
  const pathName = usePathname();

  const defaultValue = useMemo(
    () => languageOptions.find((l) => l.value === lang),
    [lang]
  );

  const onChange = useCallback(
    (option: SingleValue<(typeof languageOptions)[number]>) => {
      if (!option) return;
      if (lang === option.value) return;

      const newPathName = pathName.replace(`/${lang}`, `/${option.value}`);
      console.log("window.location.origin", window.location.origin);
      // @ts-ignore
      window.location = window.location.origin + newPathName;
    },
    [lang, pathName]
  );

  return (
    <ReactSelect
      defaultValue={defaultValue}
      options={languageOptions}
      isSearchable={false}
      onChange={onChange}
      styles={styles}
      inputId={id}
    />
  );
};

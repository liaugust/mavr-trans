import { useTranslation } from "@/app/_i18n/client";
import { WithLang } from "@/app/types";
import { FC } from "react";

interface TableProps extends WithLang {
  columns: string[];
  values: string[][];
}

export const Table: FC<TableProps> = ({ values, columns, lang }) => {
  const { t } = useTranslation(lang);

  return (
    <div className="overflow-x-scroll">
      <table className="rounded-[10px] w-full">
        <thead className="bg-[#E2E2E2] p-5 text-[14px] font-normal">
          <tr>
            {columns.map((column) => (
              <th className="p-5" key={column}>
                {t(column)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {values.map((value, index) => (
            <tr key={index}>
              {value.map((item, index) => (
                <td className="py-[10px] px-[6px] text-center" key={index}>
                  {item}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

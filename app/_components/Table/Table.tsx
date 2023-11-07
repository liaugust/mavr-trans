import { useTranslation } from "@/app/_i18n";
import { FC } from "react";

interface TableProps {
  columns: string[];
  values: string[][];
}

export const Table: FC<TableProps> = async ({ values, columns }) => {
  const { t } = await useTranslation();

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

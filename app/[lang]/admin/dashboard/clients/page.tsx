import { Table } from "@/app/_components/Table";
import { getLanguage } from "@/app/_i18n/helper";
import { UserEntity } from "@/app/_storage/modules/users/core";
import { headers } from "next/headers";

const columns = [
  "admin.pages.clients.table_columns.name",
  "admin.pages.clients.table_columns.phone",
  "admin.pages.clients.table_columns.email",
  "admin.pages.clients.table_columns.confirmed_transfer",
];

export default async function ClientsPage() {
  const baseHost = headers().get("host");
  const host =
    baseHost === "localhost:3000"
      ? "https://localhost:3000"
      : "https://www.mavrtrans.com";

  const lang = getLanguage();
  const response = await fetch(`${host}/api/users`, {
    next: { tags: ["users"] },
  });
  const leads: UserEntity[] = await response.json();

  return (
    <div className="py-5">
      <div className="container">
        <Table
          lang={lang}
          columns={columns}
          values={
            leads.map((user) => [
              user.name,
              user.phoneNumber,
              user.email,
              user.successfulRides,
            ]) as string[][]
          }
        />
      </div>
    </div>
  );
}

"use client";
import { Table } from "@/app/_components/Table";
import { useAdminContext } from "../../admin-provider";

const columns = [
  "admin.pages.clients.table_columns.name",
  "admin.pages.clients.table_columns.phone",
  "admin.pages.clients.table_columns.email",
  "admin.pages.clients.table_columns.confirmed_transfer",
];

export default function ClientsPage() {
  const { leads, lang } = useAdminContext();

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

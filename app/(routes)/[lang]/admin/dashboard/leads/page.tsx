"use client";
import { Confirm } from "@/app/_components/Ride/Confirm";
import { Table } from "@/app/_components/Table";
import { useAdminContext } from "../../admin-provider";

const columns = [
  "admin.pages.leads.table_columns.date",
  "admin.pages.leads.table_columns.name",
  "admin.pages.leads.table_columns.phone",
  "admin.pages.leads.table_columns.route",
  "admin.pages.leads.table_columns.car",
  "admin.pages.leads.table_columns.options",
  "admin.pages.leads.table_columns.total",
  "admin.pages.leads.table_columns.status",
];

export default function LeadsPage() {
  const { rides, lang } = useAdminContext();

  return (
    <div className="py-5">
      <div className="container">
        <Table
          lang={lang}
          columns={columns}
          values={
            rides.map((ride) => [
              ride.departureAt && ride.arrivalAt
                ? `${new Date(
                    ride.departureAt
                  ).toLocaleDateString()} – ${new Date(
                    ride.arrivalAt
                  ).toLocaleDateString()}`
                : `—`,
              ride.user.name,
              ride.user.phone,
              ride.allWaypoints.map((w) => w.shortAddress).join(" - "),
              ride.car.name,
              ride.options.join(", "),
              `${ride.total}€`,
              (
                <Confirm id={ride.id} status={ride.status} />
              ) as unknown as string,
            ]) as string[][]
          }
        />
      </div>
    </div>
  );
}

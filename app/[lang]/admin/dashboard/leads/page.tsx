import { Confirm } from "@/app/_components/Ride/Confirm";
import { Table } from "@/app/_components/Table";
import { getLanguage } from "@/app/_i18n/helper";
import { RideEntity } from "@/app/_storage/modules/rides/core";
import { headers } from "next/headers";

const columns = [
  "admin.pages.leads.table_columns.date",
  "admin.pages.leads.table_columns.name",
  "admin.pages.leads.table_columns.phone",
  "admin.pages.leads.table_columns.route",
  "admin.pages.leads.table_columns.car",
  "admin.pages.leads.table_columns.number",
  "admin.pages.leads.table_columns.options",
  "admin.pages.leads.table_columns.total",
  "admin.pages.leads.table_columns.status",
];

export default async function LeadsPage() {
  const baseHost = headers().get("host");
  const host =
    baseHost === "localhost:3000"
      ? "https://localhost:3000"
      : "https://www.mavrtrans.com";

  const url = `${host}/api/leads`;

  const lang = getLanguage();
  const response = await fetch(url, {
    next: { tags: ["rides"] },
  });
  const rides: RideEntity[] = await response.json();

  return (
    <div className="py-5">
      <div className="container">
        <Table
          lang={lang}
          columns={columns}
          values={
            rides.map((ride) => [
              ride.departureAt
                ? new Date(ride.departureAt).toLocaleDateString()
                : `—`,
              ride.user.name || "—",
              ride.user.phone,
              ride.allWaypoints.map((w) => w.shortAddress).join(" - "),
              ride.car.name,
              ride.number,
              ride.options.join(", "),
              `${ride.total}€`,
              (
                <Confirm
                  id={ride.id}
                  status={ride.status}
                  departureAt={ride.departureAt}
                />
              ) as unknown as string,
            ]) as string[][]
          }
        />
      </div>
    </div>
  );
}

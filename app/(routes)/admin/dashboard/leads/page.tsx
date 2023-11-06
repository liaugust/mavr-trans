import { Confirm } from "@/app/_components/Ride/Confirm";
import { Table } from "@/app/_components/Table";
import { getAllRides } from "@/app/_state/rides";

const columns = [
  "Date",
  "Name",
  "Phone number",
  "Route",
  "Car",
  "Additional options",
  "Total",
  "Status",
];

export default async function LeadsPage() {
  const rides = await getAllRides();

  return (
    <div className="py-5">
      <div className="container">
        <Table
          columns={columns}
          values={
            rides.map((ride) => [
              ride.createdAt.toLocaleDateString(),
              ride.user.name,
              ride.user.phone,
              ride.allWaypoints.map((w) => w.shortAddress).join(" - "),
              ride.car.name,
              ride.options.join(", "),
              ride.total,
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

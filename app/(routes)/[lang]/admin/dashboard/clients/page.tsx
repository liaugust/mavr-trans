import { Table } from "@/app/_components/Table";
import { getUsers } from "@/app/_state/users";

const columns = [
  "admin.pages.clients.table_columns.name",
  "admin.pages.clients.table_columns.phone",
  "admin.pages.clients.table_columns.email",
  "admin.pages.clients.table_columns.confirmed_transfer",
];

export default async function ClientsPage() {
  const users = await getUsers();

  return (
    <div className="py-5">
      <div className="container">
        <Table
          columns={columns}
          values={
            users.map((user) => [
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

import type { FunctionComponent } from "react";
import { Payment, columns } from "./columns";
import { DataTable } from "@ssms/ui/components/DataTable";

type TicketsDataTableProps = {
  data: Array<Payment>;
};

export const TicketsDataTable: FunctionComponent<TicketsDataTableProps> = ({ data }) => {
  return <DataTable data={data} columns={columns} />;
};

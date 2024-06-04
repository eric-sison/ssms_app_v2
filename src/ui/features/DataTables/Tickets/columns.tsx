"use client";

import { Badge } from "@ssms/ui/components";
import { DataTableColumnHeader } from "@ssms/ui/components/DataTableHeader";
import { DataTableSelectableTableHeader } from "@ssms/ui/components/DataTableSelectableHeader";
import { DataTableSelectableRow } from "@ssms/ui/components/DataTableSelectableRow";
import { ColumnDef } from "@tanstack/react-table";

export type Payment = {
  check?: undefined;
  id: string;
  amount: number;
  status: string;
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "check",
    header: ({ table }) => <DataTableSelectableTableHeader table={table} />,
    cell: ({ row }) => <DataTableSelectableRow row={row} />,
    enableColumnFilter: false,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Task ID" />,
    enableColumnFilter: true,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Email" />,
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <div className="max-w-[40rem] truncate">{row.original.email}</div>
      </div>
    ),
    enableColumnFilter: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
    cell: ({ row }) => (
      <Badge variant={"secondary"} className="capitalize">
        {row.original.status}
      </Badge>
    ),
    enableColumnFilter: true,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Amount" />,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    //enableColumnFilter: false,
  },
];

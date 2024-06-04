import { TicketsDataTable } from "@ssms/ui/features/DataTables/Tickets/TicketsDataTable";
import { Payment } from "@ssms/ui/features/DataTables/Tickets/columns";
import { PageBody, PageHeader, PageLink, PageLinks } from "@ssms/ui/features/PageLayout/Content";

// TODO: remove this sample data
const data: Array<Payment> = [
  {
    id: "728ed52f1",
    amount: 100,
    status: "pending",
    email:
      "m@example.com m@example.com m@example.com m@example.com m@example.com m@example.com m@example.com m@example.com m@example.com m@example.com m@example.com",
  },
  {
    id: "728ed52f2",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f3",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f4",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f5",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f6",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f7",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f8",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f9",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f10",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f11",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f12",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f13",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f14",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f15",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f16",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f17",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f18",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f19",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f20",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f21",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f22",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f23",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f24",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f25",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
];

const links: Array<PageLink> = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Tickets",
    path: "/tickets",
  },
];

export default function Tickets() {
  return (
    <div>
      <PageLinks links={links} />
      <PageHeader
        title="Tickets"
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, eligendi!"
      />

      <PageBody>
        <TicketsDataTable data={data} />
      </PageBody>
    </div>
  );
}

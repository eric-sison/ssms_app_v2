import { TicketStatus } from "@ssms/ui/features/Cards/TicketStatus";
import { PageBody } from "@ssms/ui/features/PageLayout/Content/PageBody";
import { PageHeader } from "@ssms/ui/features/PageLayout/Content/PageHeader";
import { PageLink, PageLinks } from "@ssms/ui/features/PageLayout/Content/PageLinks";
import { Clock, Activity, FileCheck2, FileX2 } from "lucide-react";

const links: Array<PageLink> = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Dashboard",
    path: "/dashboard",
  },
];

export default function Dashboard() {
  return (
    <div>
      <PageLinks links={links} />
      <PageHeader
        title="Dashboard"
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, eligendi!"
      />
      <PageBody className="flex items-center gap-5">
        <TicketStatus
          title="Pending"
          count={5}
          description="Unassigned tickets"
          icon={<Clock className="text-amber-500 w-7 h-7" />}
        />
        <TicketStatus
          title="Active"
          count={2}
          description="In progress tickets"
          icon={<Activity className="text-green-500 w-7 h-7" />}
        />
        <TicketStatus
          title="Closed"
          count={11}
          description="Resolved tickets"
          icon={<FileCheck2 className="text-indigo-500 w-7 h-7" />}
        />
        <TicketStatus
          title="Cancelled"
          count={0}
          description="Cancelled tickets"
          icon={<FileX2 className="text-rose-500 w-7 h-7" />}
        />
      </PageBody>
    </div>
  );
}

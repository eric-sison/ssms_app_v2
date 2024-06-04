import { PageHeader } from "@ssms/ui/features/PageLayout/Content/PageHeader";
import { PageLink, PageLinks } from "@ssms/ui/features/PageLayout/Content/PageLinks";

const links: Array<PageLink> = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Reports",
    path: "/reports",
  },
];

export default function Reports() {
  return (
    <div>
      <PageLinks links={links} />
      <PageHeader
        title="Reports"
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, eligendi!"
      />
    </div>
  );
}

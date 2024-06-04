import { PageHeader, PageLink, PageLinks } from "@ssms/ui/features/PageLayout/Content";

const links: Array<PageLink> = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Settings",
    path: "/settings",
  },
];

export default function Settings() {
  return (
    <div>
      <PageLinks links={links} />
      <PageHeader
        title="Settings"
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, eligendi!"
      />
    </div>
  );
}

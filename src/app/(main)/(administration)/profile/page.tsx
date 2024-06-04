import { PageHeader } from "@ssms/ui/features/PageLayout/Content/PageHeader";
import { PageLink, PageLinks } from "@ssms/ui/features/PageLayout/Content/PageLinks";

const links: Array<PageLink> = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "My Profile",
    path: "/profile",
  },
];

export default function MyProfile() {
  return (
    <div>
      <PageLinks links={links} />
      <PageHeader
        title="My Profile"
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, eligendi!"
      />
    </div>
  );
}

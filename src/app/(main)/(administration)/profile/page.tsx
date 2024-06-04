"use client";

import { Button } from "@ssms/ui/components";
import { Modal } from "@ssms/ui/components/Modal";
import { PageBody, PageHeader, PageLink, PageLinks } from "@ssms/ui/features/PageLayout/Content";
import { useState } from "react";

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
  const [open, setOpen] = useState(false);

  return (
    <div>
      <PageLinks links={links} />
      <PageHeader
        title="My Profile"
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, eligendi!"
      />
      <PageBody>
        <Button onClick={() => setOpen(true)}>Open</Button>

        <Modal open={open} onOpenChange={setOpen} title="Add Something" disableOutsideClick>
          <p>test</p>
        </Modal>
      </PageBody>
    </div>
  );
}

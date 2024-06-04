import { PageContainer } from "@ssms/ui/features/PageLayout/Content/PageContainer";
import { Sidebar } from "@ssms/ui/features/PageLayout/SideNavigation/Sidebar";
import { PropsWithChildren } from "react";

export default function MainPageLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-full">
      <Sidebar />
      <main className="h-full w-full overflow-y-auto">
        <PageContainer>{children}</PageContainer>
      </main>
    </div>
  );
}

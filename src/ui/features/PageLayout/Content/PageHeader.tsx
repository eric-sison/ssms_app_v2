import { Heading, Leading } from "@ssms/ui/typography";
import type { FunctionComponent } from "react";

type PageHeaderProps = {
  title: string;
  subTitle: string;
};

export const PageHeader: FunctionComponent<PageHeaderProps> = ({ title, subTitle }) => {
  return (
    <div className="my-7">
      <div className="flex flex-col">
        <Heading level="h2">{title}</Heading>
        <Leading>{subTitle}</Leading>
      </div>
    </div>
  );
};

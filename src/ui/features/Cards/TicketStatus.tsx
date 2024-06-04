import { FunctionComponent } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "@ssms/ui/components";

type TicketStatusProps = {
  title: string;
  count: number;
  description: string;
  icon: JSX.Element;
};

export const TicketStatus: FunctionComponent<TicketStatusProps> = ({
  title,
  count,
  description,
  icon,
}) => {
  return (
    <Card className="w-full dark:bg-secondary/40 group">
      <CardHeader>
        <section className="mb-4 flex items-center gap-4">
          {icon}
          <p className="font-medium text-lg">{title}</p>
        </section>

        <CardTitle className="text-4xl">{count}</CardTitle>
        <CardDescription className="font-medium tracking-wider">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

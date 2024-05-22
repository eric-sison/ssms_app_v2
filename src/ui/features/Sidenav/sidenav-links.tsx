import { Book, Bot, Code2, Settings, SquareTerminal } from "lucide-react";

type SidenavLink = {
  path: string;
  icon: JSX.Element;
  tooltip: string;
  selected: boolean;
};

export const sidenavLinks: Array<SidenavLink> = [
  {
    path: "/playground",
    icon: <SquareTerminal className="size-5" />,
    tooltip: "Playground",
    selected: false,
  },
  {
    path: "/models",
    icon: <Bot className="size-5" />,
    tooltip: "Models",
    selected: true,
  },
  {
    path: "/app",
    icon: <Code2 className="size-5" />,
    tooltip: "API",
    selected: false,
  },
  {
    path: "/docs",
    icon: <Book className="size-5" />,
    tooltip: "Documentation",
    selected: false,
  },
  {
    path: "/settings",
    icon: <Settings className="size-5" />,
    tooltip: "Settings",
    selected: false,
  },
];

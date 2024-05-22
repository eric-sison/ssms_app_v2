import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@mapstudio/ui/components";
import type { FunctionComponent } from "react";
import { sidenavLinks } from "./sidenav-links";

export const Sidenav: FunctionComponent = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col justify-between border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-1 px-2 sm:py-5">
        <TooltipProvider delayDuration={0}>
          {sidenavLinks.map((navLink, index) => {
            return (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`rounded-lg ${navLink.selected ? "bg-muted" : "bg-transparent"}`}
                    aria-label={`${navLink.tooltip}`}
                  >
                    {navLink.icon}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={5}>
                  {navLink.tooltip}
                </TooltipContent>
              </Tooltip>
            );
          })}
        </TooltipProvider>
      </nav>
    </aside>
  );
};

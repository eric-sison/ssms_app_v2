"use client";

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@ssms/ui/components";
import { usePathname } from "next/navigation";
import React from "react";
import { FunctionComponent } from "react";

type PageLinksProps = {
  links: Array<PageLink>;
};

export type PageLink = {
  label: string;
  path: string;
};

export const PageLinks: FunctionComponent<PageLinksProps> = ({ links }) => {
  const path = usePathname();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {links.map((link, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {path === link.path ? (
                <BreadcrumbPage>{link.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={link.path}>{link.label}</BreadcrumbLink>
              )}
            </BreadcrumbItem>

            {index + 1 < links.length && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export function PageLinksV1() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              <BreadcrumbEllipsis className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Documentation</DropdownMenuItem>
              <DropdownMenuItem>Themes</DropdownMenuItem>
              <DropdownMenuItem>GitHub</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

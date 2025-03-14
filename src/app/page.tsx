"use client";

import { useRQDevtoolsInProd } from "@ssms/lib/zustand/useRQDevtoolsProd";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@ssms/ui/components";
import { Button } from "@ssms/ui/components/Button";
import { useToast } from "@ssms/ui/hooks/use-toast";
import { BlockQuote, Heading, Paragraph, InlineCode, Leading } from "@ssms/ui/typography";
import { useTheme } from "next-themes";

export default function Home() {
  const { setTheme } = useTheme();
  const devtools = useRQDevtoolsInProd();
  const { toast } = useToast();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Heading level="h1">Taxing Laughter: The Joke Tax Chronicles</Heading>
      <Paragraph>
        The king, seeing how much happier his subjects were, realized the error of his ways and
        repealed the joke tax.
      </Paragraph>

      <BlockQuote italic>
        &quot;After all,&quot; he said, &quot;everyone enjoys a good joke, so it&apos;s only fair
        that they should pay for the privilege.&quot;
      </BlockQuote>

      <InlineCode>@radix-ui/react-alert-dialog</InlineCode>
      <Leading>
        A modal dialog that interrupts the user with important content and expects a response.
      </Leading>

      <div className="space-x-4 mt-10">
        <Button onClick={() => setTheme("light")}>Light Theme</Button>
        <Button onClick={() => setTheme("dark")}>Dark Theme</Button>
        <Button onClick={() => setTheme("system")}>System Theme</Button>
        <Button onClick={() => devtools.toggleDevtools()}>Toggle RQ Devtools</Button>
        <Button
          onClick={() => {
            toast({
              title: "Scheduled: Catch up",
              description: "Friday, February 10, 2023 at 5:57 PM",
            });
          }}
        >
          Toast
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button>Open</Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your account and remove
                your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger>Hover</TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </main>
  );
}

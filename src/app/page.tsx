"use client";

import { useRQDevtoolsProd } from "@mapstudio/lib/zustand/useRQDevtoolsProd";
import { Button } from "@mapstudio/ui/components/Button";
import { BlockQuote, Heading, Paragraph, InlineCode, Leading } from "@mapstudio/ui/typography";
import { useTheme } from "next-themes";

export default function Home() {
  const { setTheme } = useTheme();
  const devtools = useRQDevtoolsProd();

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
        <Button onClick={() => devtools.toggleShow()}>Toggle RQ Devtools</Button>
      </div>
    </main>
  );
}

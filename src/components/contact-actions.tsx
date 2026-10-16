"use client";

import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { freelanceMailto } from "@/lib/contact";
import { cn } from "@/lib/utils";
import { CheckIcon, CopyIcon, MailIcon } from "lucide-react";
import { useState } from "react";

export function ContactActions({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  // mailto links do nothing on computers without a mail app, so offer a copy option too.
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(DATA.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy my email address:", DATA.contact.email);
    }
  };

  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <div className="flex flex-wrap justify-center gap-2">
        <a href={freelanceMailto} className={buttonVariants({ size: "lg" })}>
          <MailIcon className="mr-2 size-4" />
          Email me
        </a>
        <button
          type="button"
          onClick={copyEmail}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          {copied ? (
            <CheckIcon className="mr-2 size-4" />
          ) : (
            <CopyIcon className="mr-2 size-4" />
          )}
          {copied ? "Copied!" : "Copy email"}
        </button>
        <a
          href={DATA.contact.social.LinkedIn.url}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          <Icons.linkedin className="mr-2 size-4" />
          LinkedIn
        </a>
      </div>
      <p className="text-sm text-muted-foreground">
        or write to{" "}
        <a
          href={freelanceMailto}
          className="font-medium text-foreground underline-offset-4 hover:underline"
        >
          {DATA.contact.email}
        </a>
      </p>
    </div>
  );
}

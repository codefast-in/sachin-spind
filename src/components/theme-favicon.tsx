"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

// The <link rel="icon"> tags in layout metadata pick a favicon from the OS
// colour scheme; this keeps it in sync when the site's theme toggle is used.
export function ThemeFavicon() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!resolvedTheme) return;
    const href =
      resolvedTheme === "dark" ? "/favicon-dark.png" : "/favicon-light.png";
    document
      .querySelectorAll<HTMLLinkElement>('link[rel="icon"]')
      .forEach((link) => {
        link.href = href;
      });
  }, [resolvedTheme]);

  return null;
}

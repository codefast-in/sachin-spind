import Navbar from "@/components/navbar";
import {ThemeFavicon} from "@/components/theme-favicon";
import {ThemeProvider} from "@/components/theme-provider";
import {TooltipProvider} from "@/components/ui/tooltip";
import {DATA} from "@/data/resume";
import {cn} from "@/lib/utils";
import type {Metadata} from "next";
import {Sen as FontSans} from "next/font/google";
import {SpeedInsights} from "@vercel/speed-insights/next";
import "./globals.css";
import {Analytics} from "@vercel/analytics/react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const SEO_TITLE = `${DATA.name} – React Native & Full Stack Developer`;
const SEO_DESCRIPTION =
  "Sachin Gadre (Sachin Spind) is a React Native and full stack developer in Jaipur, India, building iOS, Android and web apps with React Native and Next.js.";

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: SEO_TITLE,
    template: `%s | ${DATA.name}`,
  },
  description: SEO_DESCRIPTION,
  applicationName: DATA.name,
  authors: [{name: DATA.name, url: DATA.url}],
  creator: DATA.name,
  keywords: [
    // Name variants
    "Sachin Gadre",
    "Sachin Gadare",
    "Sachin Spind",
    "Spind",
    "sachinspind",
    // Roles
    "React Native developer",
    "React Native app developer",
    "mobile app developer",
    "app developer",
    "full stack developer",
    "software developer",
    "software engineer",
    "IT developer",
    "web developer",
    "Next.js developer",
    "Node.js developer",
    "iOS developer",
    "Android developer",
    // Location and intent
    "React Native developer Jaipur",
    "app developer Jaipur",
    "full stack developer India",
    "software developer India",
    "hire React Native developer",
    "best React Native developer",
    "best app developer",
    "best developer",
  ],
  icons: {
    icon: [
      {url: "/favicon-light.png", media: "(prefers-color-scheme: light)"},
      {url: "/favicon-dark.png", media: "(prefers-color-scheme: dark)"},
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    url: DATA.url,
    siteName: DATA.name,
    locale: "en_US",
    type: "website",
    images: [
      {url: "/og.jpg", width: 1200, height: 630, alt: SEO_TITLE},
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    creator: "@sachin_SPind",
    images: ["/og.jpg"],
  },
  // Add the Google Search Console code here once the site is verified:
  // verification: {google: "..."},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-adsense-account"
          content="ca-pub-3505726956119667"></meta>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3505726956119667"
          crossOrigin="anonymous"></script>
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <ThemeFavicon />
          <TooltipProvider delayDuration={0}>
            <SpeedInsights />
            <Analytics />
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "../styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chita",
  description: "Platform to let communities choose how they want things done",
};

import Navbar from "./_components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={`${dmsans.className} dark`}>
          <div className="grid h-screen grid-rows-[auto,1fr]">
            <Navbar />
            <main className="overflow-y-auto">{children}</main>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}

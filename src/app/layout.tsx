import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
// eslint-disable-next-line camelcase
import { Noto_Sans_Display } from "next/font/google";

import "./globals.css";
import { auth } from "@/../auth";
import { ThemeProvider } from "@/components/Providers/ThemeProvider";

const noto = Noto_Sans_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manager | Íris",
  description: "Gerenciador Íris inteligence",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={noto.className}>
        <SessionProvider session={session}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

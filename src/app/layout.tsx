import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>
          MMBytes - Empowering Your Business
        </title>
      </head>
      <body className={inter.className}>
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <a className="flex items-center justify-center" href="#">
            <span className="font-bold text-2xl">MMBytes</span>
          </a>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#services"
            >
              Services
            </a>
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#approach"
            >
              Approach
            </a>
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#contact"
            >
              Contact
            </a>
          </nav>
        </header>
        {children}
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2023 MMByte Solutions. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <a className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </a>
            <a className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </a>
          </nav>
        </footer>
      </body>
    </html>
  );
}

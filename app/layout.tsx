import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { AppShell } from "@/components/app-shell";
import { DeskProvider } from "@/components/desk-provider";
import { getSampleTasks } from "@/lib/tasks/sample-tasks";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  title: { default: "Release Desk", template: "%s · Release Desk" },
  description: "A small release dashboard: tasks, readiness and history, built to be used.",
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const tasks = await getSampleTasks();

  return (
    <html lang="en" className={inter.variable}>
      <body>
        <DeskProvider initialTasks={tasks}>
          <AppShell>{children}</AppShell>
        </DeskProvider>
      </body>
    </html>
  );
}

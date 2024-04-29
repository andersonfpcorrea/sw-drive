import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import FileTree from "@/components/file-tree/FileTree";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SW Drive",
  description: "Best file storage app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="flex">
          <aside>
            <FileTree />
          </aside>
          {children}
        </div>
      </body>
    </html>
  );
}

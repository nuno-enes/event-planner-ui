import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Event Planner",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <nav className="p-4 bg-slate-800 text-white sticky grow-0">
          <Link href="/events">Events</Link>
        </nav>
        {children}
        <footer className="p-4 grow-0">
          {`Event Planner @${new Date().getFullYear()}`}
        </footer>
      </body>
    </html>
  );
}

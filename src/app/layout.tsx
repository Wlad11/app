import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Image Gallery",
  description: "Generated Net Ninja Tutorial",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <main className="max-w-6xl mx-auto ">{children}</main>
      </body>
    </html>
  );
}

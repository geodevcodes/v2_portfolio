import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Rasheed Olatunde - Software Developer | React & Next.js | Nest.js Expert",
  description:
    "Experienced Software Developer with 4+ years of expertise in building high-performance web and mobile applications. Skilled in modern technologies and frameworks to deliver scalable, user-focused solutions. Known for strong leadership and the ability to simplify complex technical concepts for cross-functional teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}

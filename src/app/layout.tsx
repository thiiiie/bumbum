import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../styles/globals.css";


const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "BUMBUM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

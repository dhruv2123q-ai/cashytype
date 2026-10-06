import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "CashyType — Online Task Platform",
  description: "Typing, data entry, transcription and digital task opportunities."
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
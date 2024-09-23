import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/NavbarDemo";
import Footer from "@/components/Footer";
import BrochureButton from "@/components/BrochureButton"; // Import the BrochureButton component
import Logo from "@/components/Logo";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Techverse 3.0",
  description: "Departmental Tech fest of GNIT's CSE & Bsc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NavbarDemo />
        <div className="hidden sm:block">
        <Logo /> 
        </div>
        <BrochureButton /> {/* Brochure button added here */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

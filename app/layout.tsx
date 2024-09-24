import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/NavbarDemo";
import Footer from "@/components/Footer";
import BrochureButton from "@/components/BrochureButton";
import Logo from "@/components/Logo";
import PreloaderWrapper from "@/components/PreloaderWrapper"; // Import PreloaderWrapper

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Techverse 3.0",
  description: "Departmental Tech fest of GNIT's CSE & BSc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <PreloaderWrapper>
          <NavbarDemo />
          <div className="hidden sm:block">
            <Logo />
          </div>
          <BrochureButton />
          <main>{children}</main>
          <Footer />
        </PreloaderWrapper>
      </body>
    </html>
  );
}

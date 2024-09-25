// app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/NavbarDemo";
import Footer from "@/components/Footer";
import BrochureButton from "@/components/BrochureButton";
import Logo from "@/components/Logo";
import PreloaderWrapper from "@/components/PreloaderWrapper"; // Import PreloaderWrapper
import Script from "next/script"; // Import Script from next/script

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
    <html className="bg-black" lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Include Botpress Web Chat Scripts */}
        <Script
          src="https://cdn.botpress.cloud/webchat/v2.1/inject.js"
          strategy="afterInteractive" // Load after the page is interactive
        />
        <Script
          src="https://mediafiles.botpress.cloud/ef8a4258-1b9b-4295-a16b-a01651fd56ea/webchat/v2.1/config.js"
          strategy="afterInteractive" // Load after the page is interactive
        />

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

import { Roboto } from "next/font/google";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.scss";
import { ContextProvider } from "@/context/ContextProvider";

export const metadata = {
  title: "Ventura Transport Jogja",
  description: "Ventura Transport Jogja",
  metadataBase: new URL("https://venturatransportjogja.com/"),
  keywords: [
    "Ventura",
    "ventura",
    "ventura Jogja",
    "Ventura Jogja",
    "Ventura Transoport Jogja",
    "ventura transport jogja",
    "Ventrura Transport",
    "ventrura transport",
    "transport jogja",
    "Transport jogja",
    "Yogyakarta",
    "yogyakarta",
    "Rental Mobil jogja",
    "rental mobil jogja",
    "rental mobil murah",
    "Rental Mobil Murah Yogyakarta",
    "rental mobil murah jogja",
    "rental mobil",
    "Rental Mobil",
    "sewa hice jogja",
    "sewa inova reborn jogja",
    "sewa jogja",
    "sewa mobil jogja",
    "sewa hice jogja",
  ],
  verification: {
    google: "",
  },
};

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <body>
        <ContextProvider>
          <Header />
          {children}
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}

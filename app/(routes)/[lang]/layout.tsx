import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "../../_components/Header";
import { Footer } from "../../_components/Footer";
import { getServerSession } from "next-auth";
import { AuthContext } from "./authcontext";
import { options } from "@/config/options";
import { StoreProvider } from "./store-provider";
import { languages } from "@/app/_i18n/settings";

const gotham = localFont({
  src: [
    {
      path: "../../_fonts/gothampro.ttf",
      weight: "400",
    },
    {
      path: "../../_fonts/gothampro_black.ttf",
      weight: "900",
    },
    {
      path: "../../_fonts/gothampro_bold.ttf",
      weight: "700",
    },
    {
      path: "../../_fonts/gothampro_medium.ttf",
      weight: "500",
    },
    {
      path: "../../_fonts/gothampro_light.ttf",
      weight: "300",
    },
  ],
  variable: "--font-gotham",
});

export const metadata: Metadata = {
  title: "Mavr-Trans",
  description:
    "With more than 10 years of experience in the industry, Mavr-Trans is your reliable choice for transportation throughout Italy and beyond. It doesn't matter whether you are in Italy for work or a tourist, our company will make sure that you travel on time and comfortably and get only the best impressions from your trip. We have a large selection of types of cars, which will help you choose exactly what you want and for the number of people you need, regardless of whether you are traveling alone, with family or colleagues. We will take care of your comfort, speed, and optimal route.",
};

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: (typeof languages)[number] };
}) {
  const session = await getServerSession(options);

  return (
    <AuthContext session={session}>
      <html lang={lang}>
        <body className={`${gotham.variable} font-sans bg-neutral-100 `}>
          <Header lang={lang} />
          <main>
            <StoreProvider>{children}</StoreProvider>
          </main>
          <Footer />
        </body>
      </html>
    </AuthContext>
  );
}

import type { Metadata } from "next";
import { Fredoka, Inter, Cairo } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, isLocale, type Locale } from "@/i18n/routing";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HtmlAttrs } from "@/components/HtmlAttrs";

const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-fredoka", weight: ["500", "600", "700"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-cairo", weight: ["400", "500", "600", "700"] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Blend by Malak — house of ART . Blend in your own way",
  description: "Mirror, mug, canvas and crochet pop-up workshops in Doha, Qatar. Book on WhatsApp.",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);

  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <div className={`${fredoka.variable} ${inter.variable} ${cairo.variable} font-sans antialiased`}>
      <HtmlAttrs locale={locale} dir={dir} />
      <NextIntlClientProvider messages={messages}>
        <Navbar locale={locale as Locale} />
        <main>{children}</main>
        <Footer locale={locale as Locale} />
      </NextIntlClientProvider>
    </div>
  );
}

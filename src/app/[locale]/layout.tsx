import { Metadata } from "next";
import "./globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Montserrat } from "@next/font/google";
import { NextFont } from "@next/font";

interface SeoData {
	title: string;
	description: string;
	keywords: string;
	ogTitle: string;
	ogDescription: string;
}

export const metadata: Metadata = {
	title: "Pops Barbershop",
	description: "A premium barbershop experience. Haircuts, beard grooming, and more.",
};

const montserrat: NextFont = Montserrat({
	subsets: ["latin"],
});

const seoData: Record<string, SeoData> = {
	en: {
		title: "Pops Barbershop - The Best Haircuts in Warsaw",
		description: "A premium barbershop offering top-notch haircuts, beard grooming, and a relaxing atmosphere.",
		keywords: "barbershop, haircut, beard grooming, men’s haircut, pops barbershop, barbershop warsaw",
		ogTitle: "Pops Barbershop",
		ogDescription: "Experience the finest haircuts and beard grooming at Pops Barbershop. Book your appointment today!",
	},
	pl: {
		title: "Pops Barbershop - Najlepsze fryzury w Warszawie",
		description: "Premium barbershop oferujący najwyższej jakości strzyżenia, pielęgnację brody i relaksującą atmosferę.",
		keywords: "barbershop, fryzura, pielęgnacja brody, strzyżenie męskie, pops barbershop, barbershop warszawa",
		ogTitle: "Pops Barbershop",
		ogDescription: "Doświadcz najlepszych strzyżeń i pielęgnacji brody w Pops Barbershop. Zarezerwuj swoją wizytę już teraz!",
	},
};

type RootLayoutProps = {
	children: React.ReactNode;
	params: { locale: string };
};

export default async function RootLayout({
	children,
	params: { locale },
}: RootLayoutProps) {
	const messages = await getMessages();

	const currentSeo = seoData[locale] || seoData.en;
	return (
		<html lang={locale}>
			<head>
				<link rel="icon" href="../../../public/icons/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>{currentSeo.title}</title>
				<meta name="description" content={currentSeo.description} />
				<meta name="keywords" content={currentSeo.keywords} />
				<meta property="og:title" content={currentSeo.ogTitle} />
				<meta property="og:description" content={currentSeo.ogDescription} />
				<meta property="og:image" content="../../../public/image/logo_2.png" />
				<meta property="og:url" content={`https://pops.barbershop/${locale}`} />
				<meta name="twitter:card" content="../../../public/image/logo_2.png" />
				<meta name="twitter:title" content={currentSeo.ogTitle} />
				<meta name="twitter:description" content={currentSeo.ogDescription} />
				<meta name="twitter:image" content="../../../public/image/logo_2.png" />
			</head>
			<body className={montserrat.className}>
				<NextIntlClientProvider messages={messages}>
					<Header />
					<main>{children}</main>
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}

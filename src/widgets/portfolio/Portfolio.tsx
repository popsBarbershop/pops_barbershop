"use client";

import "../../app/[locale]/globals.scss";
import Heading from "@/components/heading/Heading";
import { useTranslations } from "next-intl";
import Slider from "@/components/slider/Slider";
import Image from "next/image";
import styles from "./Portfolio.module.scss";
import h2 from "../../../public/image/haircuts/h2.webp";
import h3 from "../../../public/image/haircuts/h3.webp";
import h4 from "../../../public/image/haircuts/h4.webp";

const Portfolio = () => {
	const t = useTranslations("portfolio");

	return (
		<div className="container">
			<Heading text={t("label")} />
			<Slider >
				<div key={'1'} className="embla__slide">
					<div className="aspect-w-9 aspect-h-16 w-full">
						<Image className={styles.image} src={h2} alt="Haircut 1" />
					</div>
				</div>
				<div key={'2'} className="embla__slide">
					<div className="aspect-w-9 aspect-h-16 w-full">
						<Image className={styles.image} src={h3} alt="Haircut 2" />
					</div>
				</div>
				<div key={'3'} className="embla__slide">
					<div className="aspect-w-9 aspect-h-16 w-full">
						<Image className={styles.image} src={h4} alt="Haircut 3" />
					</div>
				</div>
			</Slider>
		</div>
	);
};

export default Portfolio;

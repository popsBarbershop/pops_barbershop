import "../../app/[locale]/globals.scss";
import { useTranslations } from "next-intl";
import Heading from "@/components/heading/Heading";
import Slider from "@/components/slider/Slider";
import Image from "next/image";
import eq1 from "../../../public/image/equipment_work.webp";
import eq2 from '../../../public/image/berserk.webp';
import eq3 from '../../../public/image/tea_table.webp';
import styles from './Place.module.scss';

const Place = () => {
	const t = useTranslations("place");

	return (
		<section className={styles.place}>
			<div className={"container"}>
				<Heading text={t("label")} />
				<Slider>
					<div className="embla__slide">
						<div>
							<Image src={eq1} alt={"no Image"} />
						</div>
					</div>
					<div className="embla__slide">
						<div>
							<Image src={eq2} alt={"no Image"} />
						</div>
					</div>
					<div className="embla__slide">
						<div>
							<Image src={eq3} alt={"no Image"} />
						</div>
					</div>
				</Slider>
			</div>
		</section>
	);
};

export default Place;

import { useTranslations } from "next-intl";
import "../../app/[locale]/globals.scss";
import styles from "./Main.module.scss";
import Link from "next/link";

const Main = () => {
	const t = useTranslations("main");

	return (
		<section className={styles.block}>
			<video
				autoPlay
				loop
				muted
				playsInline
				className={styles.videoBackground}
				src="/video/bg_video.mp4"
			></video>
			<div className={styles.container}>
				<div className={styles.overlay}>
					<h1 className={styles.brandName}>
						POPS <br /> BARBERSHOP
					</h1>
					<Link
						className={styles.button}
						href="https://booksy.com/pl-pl/187397_barbershop-pops_barber-shop_3_warszawa#ba_s=seo"
					>
						{t("button")}
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Main;

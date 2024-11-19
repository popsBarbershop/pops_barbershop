import Image, { StaticImageData } from "next/image";
import styles from "./Member.module.scss";
import Link from "next/link";
import { useTranslations } from "next-intl";

type MemberProps = {
	src: StaticImageData;
	description: string;
	languages: string;
	link: string;
};

const Member = (props: MemberProps) => {
	const { src, description, languages, link } = props;

	const t = useTranslations("team");

	return (
		<div className={styles.member}>
			<Image className={styles.image} src={src} alt={"no member image"} />
			<div className={styles.content}>
				<p className={styles.description}>
					{description}
				</p>
				<p className={styles.languages}>
					{t("langs_text")}
					{languages}
				</p>
				<Link href={link}>
					<button className={styles.button}>
						{t('button')}
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Member;

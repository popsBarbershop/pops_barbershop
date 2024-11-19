import "../../app/[locale]/globals.scss";
import Logo from "@/components/logo/Logo";
import styles from "./Footer.module.scss";
import Item from "@/components/item/Item";
import { useTranslations } from "next-intl";
import scissorsIcon from "../../../public/icons/scissors.svg";
import mapIcon from "../../../public/icons/map-pin.svg";
import phoneIcon from "../../../public/icons/phone.svg";
import mailIcon from "../../../public/icons/mail.svg";
import instIcon from "../../../public/icons/instagram.svg";
import facebookIcon from "../../../public/icons/facebook.svg";
import Link from "next/link";
import Image from "next/image";
import cn from "clsx";

const Footer = () => {
	const t = useTranslations("footer");

	return (
		<footer className={styles.footer}>
			<div className={"container"}>
				<div className={styles.content}>
					<div className={"mb-3 md:mb-0"}>
						<Logo isWhite={true} />
					</div>
					<div className={cn(styles.block)}>
						<Item
							isWhite={true}
							src={scissorsIcon}
							text={t("open")}
							isVisible={true}
						/>
						<Item
							isWhite={true}
							src={mapIcon}
							text={t("address")}
							isVisible={true}
						/>
						<Link className={styles.link} href="tel:+48794086350">
							<Item
								isWhite={true}
								isVisible={true}
								src={phoneIcon}
								text={t("number") + " +48 794 086 350"}
							/>
						</Link>
						<Link className={styles.link} href={"mailto:info@pops.com"}>
							<Item
								isWhite={true}
								src={mailIcon}
								text={"info@pops.com"}
								isVisible={true}
							/>
						</Link>
					</div>
					<div className={styles.socials}>
						<div>{t("socials")}</div>
						<div className={styles.socialsItems}>
							<Link href={"https://www.instagram.com/pops.barber.shop/"} className={styles.icon}>
								<Image src={instIcon} alt={"instagram"} />
							</Link>
							<Link href={"https://facebook.com/"} className={styles.icon}>
								<Image src={facebookIcon} alt={"facebook"} />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

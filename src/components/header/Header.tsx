import { useTranslations } from "next-intl";
import Link from "next/link";
import cn from "clsx";
import Logo from "@/components/logo/Logo";
import Item from "@/components/item/Item";
import Dropdown from "@/components/dropdown/Dropdown";
import scissorsIconBlack from "../../../public/icons/scissors_black.svg";
import mapIconBlack from "../../../public/icons/map-pin_black.svg";
import phoneIconBlack from "../../../public/icons/phone_black.svg";
import styles from "./Header.module.scss";
import "../../app/[locale]/globals.scss";

const Header = () => {
	const t = useTranslations("header");

	return (
		<header className={cn("container", styles.header)}>
			<Logo />
			<div className={styles.infoBlock}>
				<Item
					text={t("street")}
					additionalText={t("details")}
					src={mapIconBlack}
				/>
				<div className={styles.sumBlock}>
					<Item text={t("open")} src={scissorsIconBlack} />
					<Link href="tel:+48794086350">
						<Item text={`+48 794 086 350`} src={phoneIconBlack} />
					</Link>
				</div>
			</div>
			<Dropdown />
		</header>
	);
};

export default Header;

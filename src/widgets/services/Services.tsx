
import "../../app/[locale]/globals.scss";
import Heading from "@/components/heading/Heading";
import { useTranslations } from "next-intl";
import Card from "@/components/card/Card";
import HaircutIcon from "../../../public/icons/haircut_icon.png";
import HaircutBeardIcon from "../../../public/icons/hb_icon.png";
import PermIcon from "../../../public/icons/perm_icon.png";

import styles from "./Services.module.scss";

const Services = () => {
	const t = useTranslations("services");

	return (
		<div className={"container"}>
			<Heading isWhite={false} text={t("label")} />
			<div className={styles.list}>
				<Card
					title={t("haircut_name")}
					price={t("haircut_price")}
					time={t("haircut_time")}
					buttonText={t("button")}
					link={""}
					src={HaircutIcon}
				/>
				<Card
					title={t("combo_name")}
					price={t("combo_price")}
					time={t("combo_time")}
					buttonText={t("button")}
					link={""}
					src={HaircutBeardIcon}
				/>
				<Card
					title={t("perm_name")}
					price={t("perm_price")}
					time={t("perm_time")}
					buttonText={t("button")}
					link={""}
					src={PermIcon}
				/>
			</div>
		</div>
	);
};

export default Services;

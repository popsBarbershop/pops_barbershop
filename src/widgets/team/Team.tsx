import "../../app/[locale]/globals.scss";
import { useTranslations } from "next-intl";
import Heading from "@/components/heading/Heading";
import Member from "@/components/member/Member";
import styles from "./Team.module.scss";
import ArtsiomMember from "../../../public/image/artsiom_card.webp";
import EvgeniiMember from "../../../public/image/evgenij_card.webp";
import RomanMember from "../../../public/image/roman_card.webp";
import NikosMember from '../../../public/image/nikos_card.webp';
import Slider from "@/components/slider/Slider";

const Team = () => {
	const t = useTranslations("team");

	return (
		<div className={styles.team}>
			<div className={"container"}>
				<Heading isWhite={true} text={t("label")} />
				<div className={styles.content}>
					<Slider>
						<div className="embla__slide">
							<div className="w-full h-full">
								<Member
									src={ArtsiomMember}
									description={t("artiom_descr")}
									languages={t("langs")}
									link={"https://booksy.com/pl-pl/187397_barbershop-pops_barber-shop_3_warszawa/staffer/388759#ba_s=seo"}
								/>
							</div>
						</div>
						<div className="embla__slide">
							<div className="w-full h-full">
								<Member
									src={EvgeniiMember}
									description={t("eugen_descr")}
									languages={t("langs")}
									link={"https://booksy.com/pl-pl/187397_barbershop-pops_barber-shop_3_warszawa/staffer/388769#ba_s=seo"}
								/>
							</div>
						</div>
						<div className="embla__slide">
							<div className="w-full h-full">
								<Member
									src={RomanMember}
									description={t("roman_descr")}
									languages={t("langs")}
									link={"https://booksy.com/pl-pl/187397_barbershop-pops_barber-shop_3_warszawa/staffer/486077#ba_s=seo"}
								/>
							</div>
						</div>
						<div className="embla__slide">
							<div className="w-full h-full">
								<Member
									src={NikosMember}
									description={t("nikos_descr")}
									languages={t("langs")}
									link={"https://booksy.com/pl-pl/187397_barbershop-pops_barber-shop_3_warszawa/staffer/566371#ba_s=seo"}
								/>
							</div>
						</div>
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default Team;

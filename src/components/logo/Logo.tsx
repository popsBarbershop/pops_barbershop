import Image from "next/image";
import styles from "./Logo.module.scss";
import logoImage from "../../../public/icons/logo.png";
import logoImageBlack from "../../../public/icons/logo_black.svg";
import cn from "clsx";

type LogoProps = {
	isWhite?: boolean;
};

const Logo = ({ isWhite }: LogoProps) => {
	return (
		<div className={styles.logo}>
			<Image
				className={styles.image}
				src={isWhite ? logoImage : logoImageBlack}
				alt={"no logo image"}
			/>
			<p className={cn(styles.text, { "text-white": isWhite })}>POP`S</p>
		</div>
	);
};

export default Logo;

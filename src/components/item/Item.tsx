import React from "react";
import Image from "next/image";
import styles from "./Item.module.scss";
import cn from "clsx";

type ItemProps = {
	src: string; // Assuming this is a relative path or URL
	text: string;
	style?: React.CSSProperties;
	isWhite?: boolean;
	additionalText?: string;
	isVisible?: boolean;
};

const Item = ({
	src,
	text,
	style,
	isWhite,
	additionalText,
	isVisible
}: ItemProps) => {
	return (
		<div className={cn(styles.item, { flex: isVisible })} style={style}>
			<Image
				className={styles.image}
				src={src}
				alt="no image"
				width={50}
				height={50}
			/>
			<p className={cn(styles.text, { "text-white": isWhite })}>
				{text}
				{additionalText && (
					<>
						<br />
						<span className={cn(styles.text, { "text-white": isWhite })}>
							{additionalText}
						</span>
					</>
				)}
			</p>
		</div>
	);
};

export default Item;

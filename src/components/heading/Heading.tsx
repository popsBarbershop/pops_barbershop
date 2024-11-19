import styles from "./Heading.module.scss";

type HeadingProps = {
	text: string;
	isWhite?: boolean;
};

const Heading = (props: HeadingProps) => {
	const { text, isWhite } = props;

	return (
		<div className={styles.content}>
			{isWhite ? (
				<h2 style={{ color: "white" }} className={styles.text}>
					{text}
				</h2>
			) : (
				<h2 style={{ color: "black" }} className={styles.text}>
					{text}
				</h2>
			)}
		</div>
	);
};

export default Heading;

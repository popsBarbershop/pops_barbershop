"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useOutside } from "@/hooks/useOutside";
import styles from "./Dropdown.module.scss";

const Dropdown = () => {
	const { isShow, setIsShow, ref } = useOutside(false);
	const t = useTranslations("languages");

	const languageOptions = [
		{ href: "en", label: t("en") },
		{
			href: "pl",
			label: t("pl")
		}
	];

	const toggleDropdown = () => {
		setIsShow(!isShow);
	};

	const closeDropdown = () => {
		setIsShow(false);
	};

	return (
		<div ref={ref} className={styles.dropdown}>
			<div className={styles.block}>
				<button
					type="button"
					className={styles.button}
					onClick={toggleDropdown}
				>
					{t("label")}
					<svg
						className="w-2.5 h-2.5 ml-2.5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 10 6"
					>
						<path
							stroke="black"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="m1 1 4 4 4-4"
						/>
					</svg>
				</button>

				{isShow && (
					<div className={styles.menu}>
						<ul
							role="menu"
							aria-orientation="vertical"
							aria-labelledby="options-menu"
						>
							{languageOptions.map(item => {
								return (
									<li key={item.href}>
										<Link
											href={item.href}
											className={styles.menuItem}
											onClick={closeDropdown}
										>
											{item.label}
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default Dropdown;

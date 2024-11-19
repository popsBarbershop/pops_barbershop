"use client";
import Image from "next/image";
import burgerIcon from "../../../public/icons/burger_menu.svg";
import { useState } from "react";
import cn from "clsx";
import styles from "./Menu.module.scss";

const Menu = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	const handleClose = () => {
		setIsOpen(false);
	};

	return (
		<>
			<Image onClick={handleToggle} src={burgerIcon} alt={"no image"} />
			<div
				onClick={handleClose}
				className={cn(styles.modal, isOpen ? styles.open : styles.close)}
			></div>
		</>
	);
};

export default Menu;

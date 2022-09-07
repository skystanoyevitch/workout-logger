import React from "react";
import Styles from "../Styles/FrontPage.module.css";

export function FrontPage(): JSX.Element {
	return (
		<div className={Styles.container}>
			<h1 className={Styles.heading}>
				<span className={Styles.text_sub_color}>SKYS TRAINING LOG</span>
			</h1>
			<h3 className={Styles.subheading}>
				to start, please type in your name
			</h3>
		</div>
	);
}

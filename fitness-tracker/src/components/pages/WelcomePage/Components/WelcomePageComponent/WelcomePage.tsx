import React, { useState, useRef } from "react";
import styles from "./welcomePage.module.css";
import InputName from "../logicComponents/InputName";

function WelcomePage(): JSX.Element {
	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>
				WELCOME TO YOUR{" "}
				<span className={styles.text_sub_color}>TRAINING LOG</span>
			</h1>
			<h3 className={styles.subheading}>
				to start, please type in your name
			</h3>
			<InputName />
		</div>
	);
}

export default WelcomePage;

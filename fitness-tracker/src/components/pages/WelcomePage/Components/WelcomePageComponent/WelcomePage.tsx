import React from "react";
// import { PropsFace } from "../../../../../App";
import styles from "./welcomePage.module.css";

// interface Iprops {
// 	message: PropsFace;
// }

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
			{/* <label htmlFor="name">Enter Name</label> */}

			<div className={styles.input_container}>
				<input
					type="text"
					name="name"
					placeholder="name"
					className={styles.input}
				/>
				<button type="submit" className={styles.input_button}>
					Enter
				</button>
			</div>
		</div>
	);
}

export default WelcomePage;

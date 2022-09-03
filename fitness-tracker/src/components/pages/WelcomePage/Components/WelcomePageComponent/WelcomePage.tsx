import React, { useState, useRef } from "react";
// import { PropsFace } from "../../../../../App";
import styles from "./welcomePage.module.css";

function WelcomePage(): JSX.Element {
	const [name, setName] = useState("");

	let nameRef = useRef(null);

	const onClickHandler = (e: any) => {
		e.preventDefault();

		let nameInput = nameRef.current.value;
		console.log(nameInput);

		setName(nameInput);
		nameRef.current.value = "";
	};

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
					ref={nameRef}
				/>
				<button
					type="submit"
					className={styles.input_button}
					onClick={onClickHandler}
				>
					Enter
				</button>
			</div>

			<h2>{name}</h2>
		</div>
	);
}

export default WelcomePage;

import React, { useState, useRef } from "react";
import styles from "../WelcomePageComponent/welcomePage.module.css";

const InputName = (): JSX.Element => {
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");

	const onSubmitHandler = (e: any) => {
		e.preventDefault();
		// console.log("click handler working!");

		if (name.trim().length == 0) {
			setMessage(
				"Oopsie, looks like there is no name, please enter a name to begin!"
			);
		} else {
			localStorage.setItem("username", name);
			setName("");
		}
	};
	return (
		<div>
			{message}
			<form className={styles.input_container} onSubmit={onSubmitHandler}>
				<input
					type="text"
					name="name"
					placeholder="name"
					minLength={3}
					maxLength={15}
					required={true}
					onChange={(e) => setName(e.target.value)}
					className={styles.input}
					value={name}
				/>
				<button type="submit" className={styles.input_button}>
					Enter
				</button>
			</form>
		</div>
	);
};

export default InputName;

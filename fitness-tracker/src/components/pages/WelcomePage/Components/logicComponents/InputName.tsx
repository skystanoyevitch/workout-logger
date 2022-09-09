import React, { useState, useRef } from "react";
import styles from "../WelcomePageComponent/welcomePage.module.css";
import { useNavigate } from "react-router-dom";
const InputName = (): JSX.Element => {
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");

	let navigate = useNavigate();

	const onSubmitHandler = (e: any) => {
		e.preventDefault();
		localStorage.setItem("username", name);
		setName("");
		navigate("/frontpage", { state: { username: name } });
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
				<button
					type="submit"
					className={styles.input_button}
					onClick={onSubmitHandler}
				>
					Enter
				</button>
			</form>
		</div>
	);
};

export default InputName;

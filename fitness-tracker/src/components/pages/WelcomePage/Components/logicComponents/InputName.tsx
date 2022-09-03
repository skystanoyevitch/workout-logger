import React, { useState, useRef } from "react";
import styles from "../WelcomePageComponent/welcomePage.module.css";

const InputName = (): JSX.Element => {
	const [name, setName] = useState("");

	let nameRef = useRef<HTMLInputElement>(null);

	const onClickHandler = (e: any) => {
		e.preventDefault();

		let nameCurrentRef = nameRef.current;
		// console.log(nameRef);

		if (null !== nameCurrentRef) {
			setName(nameCurrentRef.value);
			nameCurrentRef.value = "";
		}
	};
	return (
		<div>
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
};

export default InputName;

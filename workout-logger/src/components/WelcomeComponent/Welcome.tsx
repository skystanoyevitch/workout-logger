import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import styles from "./Styles/welcome.module.css";
import UsernameInput from "./Components/usernameInput Component/UsernameInput";


export interface UsernameInputInterface {
	name: string;
	setName: React.Dispatch<React.SetStateAction<string>>;
	onSubmitHandler: (e: React.FormEvent) => void;
}


const Welcome = ({name, setName, onSubmitHandler}: UsernameInputInterface): JSX.Element => {

	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>
				WELCOME TO YOUR PERSONAL{" "}
				<span className={styles.text_sub_color}>TRAINING LOG</span>
			</h1>
			<h3 className={styles.subheading}>
				to start, please type in your name
			</h3>
			<UsernameInput
				name={name}
				setName={setName}
				onSubmitHandler={onSubmitHandler}
			/>
		</div>
	);
};

export default Welcome;

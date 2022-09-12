// import React, { useState, useRef } from "react";
import styles from "../../Styles/welcome.module.css";

interface Props {
	name: string;
	setName: React.Dispatch<React.SetStateAction<string>>;
	submitName: (e: React.FormEvent) => void;
}

const UsernameInput: React.FC<Props> = ({
	name,
	setName,
	submitName,
}: Props) => {
	return (
		<div>
			<form className={styles.input_container} onSubmit={submitName}>
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

				{name && (
					<button type="submit" className={styles.input_button}>
						Enter
					</button>
				)}
			</form>
		</div>
	);
};

export default UsernameInput;

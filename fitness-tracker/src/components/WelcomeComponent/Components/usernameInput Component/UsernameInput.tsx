import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../Styles/welcome.module.css";

// interface Props {
// 	name: string;
// 	setName: React.Dispatch<React.SetStateAction<string>>;
// 	submitName: (e: React.FormEvent) => void;
// }

const UsernameInput = (): JSX.Element => {
	const [name, setName] = useState<string>("");
	const navigate = useNavigate();

	const onSubmitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		localStorage.setItem("username", name);
		navigate("/traininglog");
	};

	return (
		<div>
			<form className={styles.input_container} onSubmit={onSubmitHandler}>
				<input
					type="text"
					name="name"
					placeholder="name"
					minLength={3}
					maxLength={15}
					onChange={(e) => setName(e.target.value)}
					className={styles.input}
					value={name}
					required
					autoFocus
				/>

				{name.length >= 3 && (
					<button type="submit" className={styles.input_button}>
						Enter
					</button>
				)}
			</form>
		</div>
	);
};

export default UsernameInput;

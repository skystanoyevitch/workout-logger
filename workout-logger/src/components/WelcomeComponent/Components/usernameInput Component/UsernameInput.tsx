import { Link } from "react-router-dom";
import styles from "../../Styles/welcome.module.css";
import { UsernameInputInterface } from "../../Welcome";

const UsernameInput = ({
	name,
	setName,
	onSubmitHandler,
}: UsernameInputInterface): JSX.Element => {
	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
		// localStorage.setItem("username", name);
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
					onChange={onChangeHandler}
					className={styles.input}
					value={name}
					required
					autoFocus
				/>

				{name.length >= 3 && (
					<Link to="/traininglog">
						<button
							type="submit"
							onClick={() =>
								localStorage.setItem("username", name)
							}
							className={styles.input_button}
						>
							Enter
						</button>
					</Link>
				)}
			</form>
		</div>
	);
};

export default UsernameInput;

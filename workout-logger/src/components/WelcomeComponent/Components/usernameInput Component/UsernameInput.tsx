//React Imports
import { Link } from "react-router-dom";

// Component Imports
import { UsernameInputInterface } from "../../Welcome";

// Third Party Imports
import { Button, TextField, FormControl, Box } from "@mui/material";

const UsernameInput = ({
	name,
	setName,
	onSubmitHandler,
}: UsernameInputInterface): JSX.Element => {
	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	return (
		<FormControl
			sx={{
				display: "flex",
				justifyContent: "center",
				placeItems: "center",
			}}
			onSubmit={onSubmitHandler}
		>
			<Box>
				<TextField
					label="Name"
					type="text"
					name="name"
					placeholder="name"
					onChange={onChangeHandler}
					value={name}
					required
					autoFocus
				/>

				{name.length >= 3 && (
					<Link to="/traininglog" style={{ textDecoration: "none" }}>
						<Button
							sx={{
								height: "100%",
								marginLeft: 2,
							}}
							variant="contained"
							type="submit"
							onClick={() =>
								localStorage.setItem("username", name)
							}
						>
							Enter
						</Button>
					</Link>
				)}
			</Box>
		</FormControl>
	);
};

export default UsernameInput;

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
		<form onSubmit={onSubmitHandler}>
			<Box
				style={{
					display: "flex",
					justifyContent: "center",
					placeItems: "center",
				}}
			>
				<TextField
					label="name"
					type="text"
					name="name"
					placeholder="name"
					onChange={onChangeHandler}
					value={name}
					required
					autoFocus
					inputProps={{ minLength: 4 }}
				/>

				{name.length >= 3 && (
					<Link to="/traininglog" state={name}>
						<Button
							sx={{
								height: "100%",
								marginLeft: 2,
							}}
							variant="contained"
							type="submit"
						>
							Enter
						</Button>
					</Link>
				)}
			</Box>
		</form>
	);
};

export default UsernameInput;

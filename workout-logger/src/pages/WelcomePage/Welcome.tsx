// * possilby revert back to old styles
// import styles from "./Styles/welcome.module.css";

// React Imports
import React, { useState } from "react";

// Component Imports
import UsernameInput from "./Components/UserNameInput/UsernameInput";

// Third Party Imports
import { Container, Typography } from "@mui/material";

export interface UsernameInputInterface {
	name: string;
	setName: React.Dispatch<React.SetStateAction<string>>;
	onSubmitHandler: (e: React.FormEvent) => void;
}

const Welcome = ({
	name,
	setName,
	onSubmitHandler,
}: UsernameInputInterface): JSX.Element => {
	return (
		<Container
			maxWidth="md"
			sx={{
				// display: "grid",
				// placeContent: "center",
				// minHeight: "100vh",
				textAlign: "center",
				marginTop: 10,
			}}
		>
			<Typography variant="h1">
				WELCOME TO YOUR PERSONAL <span>TRAINING LOG</span>
			</Typography>
			<Typography variant="body1" sx={{ margin: 6 }}>
				to start, please type in your name
			</Typography>

			<UsernameInput
				name={name}
				setName={setName}
				onSubmitHandler={onSubmitHandler}
			/>
		</Container>
	);
};

export default Welcome;

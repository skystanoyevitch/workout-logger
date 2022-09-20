import { Container, Typography, Button } from "@mui/material";
import { InputForm } from "./Components/InputForm";
import { Link } from "react-router-dom";

const TrainingLog = (): JSX.Element => {
	const username: string | undefined = localStorage
		.getItem("username")
		?.toUpperCase();

	return (
		<Container maxWidth="md" sx={{ textAlign: "center", marginTop: 10 }}>
			<Typography variant="h1">{username}'S TRAINING LOG</Typography>
			<Typography variant="body1" paddingY={4}>
				lets add some details to begin...
			</Typography>
			<InputForm />
		</Container>
	);
};

export default TrainingLog;

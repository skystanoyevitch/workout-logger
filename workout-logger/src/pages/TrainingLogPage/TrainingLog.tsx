import { Container, Typography } from "@mui/material";
import { InputForm } from "./Components/InputForm";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import WorkoutForm from "./Components/WorkoutForm";

type UsernameType = {
	username: string;
};

const TrainingLog = (): JSX.Element => {
	const [workout, setWorkout] = useState({
		name: "",
		date: new Date().toLocaleDateString("en-US"),
		time: new Date().toLocaleTimeString("en-US"),
		notes: "",
	});

	// const [addExercise, setAddExercise] = useState({
	// 	name: "",
	// 	weight: 0,
	// 	reps: 0,
	// 	notes: "",
	// });

	const location = useLocation();
	const username = location.state as UsernameType;

	const onSubmitHandler = (e: React.FormEvent) => {};

	const props = { workout, setWorkout, onSubmitHandler };

	return (
		<>
			<Container
				maxWidth="md"
				sx={{ textAlign: "center", marginTop: 10 }}
			>
				<Typography component="h1" variant="h1">
					WELCOME {username.toString().toUpperCase()}
				</Typography>
				<Typography variant="body1" paddingY={4}>
					lets add some details to begin...
				</Typography>
				<InputForm {...props} />
			</Container>
		</>
	);
};

export default TrainingLog;

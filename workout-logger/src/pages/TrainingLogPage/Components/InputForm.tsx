import { Box, Button, Container, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Workout from "../../WorkoutPage/Workout";

interface workoutNameInterface {
	workout: {
		name: string;
		date: string;
		time: string;
		notes: string;
	};
	setWorkout: React.Dispatch<
		React.SetStateAction<{
			name: string;
			date: string;
			time: string;
			notes: string;
		}>
	>;
	onSubmitHandler: (e: React.FormEvent) => void;
}

export const InputForm = ({
	workout,
	setWorkout,
	onSubmitHandler,
}: workoutNameInterface): JSX.Element => {
	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setWorkout({
			...workout,
			[name]: value,
			[name]: value,
			[name]: value,
			[name]: value,
		});
		console.log(workout);
	};
	return (
		<Container maxWidth="sm">
			<form onSubmit={onSubmitHandler}>
				<Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
					<TextField
						sx={{ width: "100%" }}
						label="Workout Name"
						name="name"
						type="text"
						onChange={onChangeHandler}
						value={workout.name}
						required
						autoFocus
					/>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							gap: 4,
						}}
					>
						<TextField
							sx={{ width: "50%" }}
							type="date"
							name="date"
							onChange={onChangeHandler}
							value={workout.date}
						/>
						<TextField
							sx={{ width: "50%" }}
							type="time"
							name="time"
							id="timeInput"
							title="Time Started"
							onChange={onChangeHandler}
							value={workout.time}
						/>
					</Box>

					<TextField
						sx={{ width: "100%" }}
						type="text"
						label="notes"
						name="notes"
						multiline={true}
						size="medium"
						onChange={onChangeHandler}
						value={workout.notes}
					/>
				</Box>
				<Link
					to="/ExerciseCategories"
					style={{ textDecoration: "none" }}
				>
					<Button
						sx={{ marginTop: 4 }}
						variant="contained"
						type="button"
					>
						Add Exercise
					</Button>
				</Link>
				<Link
					to="/workout"
					state={workout}
					style={{ textDecoration: "none" }}
				>
					<Button
						sx={{ marginTop: 4, marginLeft: 4 }}
						variant="contained"
						color="secondary"
					>
						Enter Workout
					</Button>
				</Link>
			</form>
		</Container>
	);
};

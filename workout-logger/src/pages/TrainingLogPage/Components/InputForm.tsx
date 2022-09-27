import { Box, Button, Container, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import WorkoutForm from "./WorkoutForm";
import { useEffect, useState } from "react";
import { ExerciseCategories } from "../../ExerciseCategoriesPage/ExerciseCategories";

interface workoutPropsInterface {
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
}: workoutPropsInterface): JSX.Element => {
	const [openExerciseCategory, setOpenExerciseCategory] = useState(false);
	const [addExercise, setAddExercise] = useState([
		{
			name: "",
			weight: 0,
			reps: 0,
			notes: "",
			sets: 0,
		},
	]);
	// console.log(addExercise[0])

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setWorkout({
			...workout,
			[name]: value,
			[name]: value,
			[name]: value,
			[name]: value,
		});
	};

	const handleOnClick = () => {
		setOpenExerciseCategory(true);
	};

	const onHandleNameClick = (exerciseName) => {
		setAddExercise([...addExercise, { name: exerciseName }]);
		setOpenExerciseCategory(false);
		// localStorage.setItem("exercise", JSON.stringify(addExercise));
		// console.log(addExercise);
	};

	useEffect(() => {
		addExercise.map((exercise) => console.log(exercise.name));
	}, [addExercise]);

	return (
		<Container maxWidth="sm">
			{openExerciseCategory ? (
				<ExerciseCategories onHandleNameClick={onHandleNameClick} />
			) : (
				<form onSubmit={onSubmitHandler}>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: 4,
						}}
					>
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
					{addExercise.map((exercise, index) => {
						if (exercise.name) {
							return (
								<WorkoutForm
									exerciseForm={exercise}
									setAddExercise={setAddExercise}
									key={index}
								/>
							);
						}
						return false;
					})}

					<Button
						sx={{ marginTop: 4 }}
						variant="contained"
						type="button"
						onClick={handleOnClick}
					>
						Add Exercise
					</Button>
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
			)}
		</Container>
	);
};

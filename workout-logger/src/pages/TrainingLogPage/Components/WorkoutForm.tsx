import { Typography, TextField, Box } from "@mui/material";

const WorkoutForm = ({ exerciseForm, setAddExercise }): JSX.Element => {
	const onChangeWeight = (e) => {
		console.log(e.target.value);
	};
	const onChangeReps = (e) => {
		console.log(e.target.value);
	};
	const onChangeNotes = (e) => {
		console.log(e.target.value);
	};
	const onChangeSets = (e) => {
		console.log(e.target.value);
	};
	return (
		<>
			<Typography variant="h4" color="initial" sx={{ padding: 4 }}>
				{exerciseForm.name}
			</Typography>

			<Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						gap: 4,
					}}
				>
					{" "}
					<TextField
						id=""
						label="Weight"
						type="number"
						value={exerciseForm.weight}
						onChange={onChangeWeight}
						sx={{ width: "50%" }}
					/>
					<TextField
						id=""
						label="Reps"
						type="number"
						value={exerciseForm.reps}
						onChange={onChangeReps}
						sx={{ width: "50%" }}
					/>
					<TextField
						id=""
						label="Sets"
						type="number"
						value={exerciseForm.sets}
						onChange={onChangeSets}
						sx={{ width: "50%" }}
					/>
				</Box>
				<Box>
					<TextField
						id=""
						label="Notes"
						value={exerciseForm.notes}
						onChange={onChangeNotes}
						sx={{ width: "100%" }}
					/>
				</Box>
			</Box>
		</>
	);
};

export default WorkoutForm;

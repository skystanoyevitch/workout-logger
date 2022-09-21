import { Typography, TextField, Box } from "@mui/material";

const WorkoutForm = ({ addExercise }): JSX.Element => {
	return (
		<>
			<Typography variant="h4" sx={{ padding: 4 }}>
				{addExercise.name}
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
						//   value={}
						//   onChange={}
						sx={{ width: "50%" }}
					/>
					<TextField
						id=""
						label="Reps"
						//   value={}
						//   onChange={}
						sx={{ width: "50%" }}
					/>
				</Box>
				<Box>
					<TextField
						id=""
						label="Notes"
						//   value={}
						//   onChange={}
						sx={{ width: "100%" }}
					/>
				</Box>
			</Box>
		</>
	);
};

export default WorkoutForm;

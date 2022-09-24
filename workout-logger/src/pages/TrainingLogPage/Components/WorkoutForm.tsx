import { Typography, TextField, Box } from "@mui/material";

const WorkoutForm = ({ exerciseName }): JSX.Element => {
	return (
		<>
			<Typography variant="h4" color="initial" sx={{ padding: 4 }}>
				{exerciseName}
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

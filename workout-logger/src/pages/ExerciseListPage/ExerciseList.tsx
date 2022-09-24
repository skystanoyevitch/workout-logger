import { List, ListItemButton, Typography } from "@mui/material";
import { Container } from "@mui/system";
export const ExerciseList = ({ nameOfExercise, onHandleNameClick }): JSX.Element => {
	return (
		<>
			<Container sx={{ textAlign: "center", marginTop: 10 }}>
				<Typography variant="h1" color="initial">
					Select Exercise
				</Typography>
				<List>
					{nameOfExercise.map((exercise, index) => (
						// console.log(excercise);
						<ListItemButton
							sx={{
								border: "2px solid black",
								padding: 2,
								borderRadius: 2,
							}}
							key={index}
							onClick={() => onHandleNameClick(exercise)}
						>
							{exercise}
						</ListItemButton>
					))}
				</List>
			</Container>
		</>
	);
};

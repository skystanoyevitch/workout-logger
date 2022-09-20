import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";

export const ExerciseCategories = (): JSX.Element => {
	return (
		<>
			<Container sx={{ textAlign: "center", marginTop: 10 }}>
				<Typography variant="h1">Select Exercise Category</Typography>
				<Grid
					container
					justifyContent="center"
					gap={4}
					sx={{ paddingTop: 8 }}
				>
					<Grid
						item
						sm={4}
						sx={{ padding: 4, border: "2px solid black" }}
					>
						<Link to="/exerciselist">CHEST</Link>
					</Grid>
					<Grid
						item
						sm={4}
						sx={{ padding: 4, border: "2px solid black" }}
					>
						BACK
					</Grid>
					<Grid
						item
						sm={4}
						sx={{ padding: 4, border: "2px solid black" }}
					>
						SHOULDERS
					</Grid>
					<Grid
						item
						sm={4}
						sx={{ padding: 4, border: "2px solid black" }}
					>
						ABS
					</Grid>
					<Grid
						item
						sm={4}
						sx={{ padding: 4, border: "2px solid black" }}
					>
						LEGS
					</Grid>
					<Grid
						item
						sm={4}
						sx={{ padding: 4, border: "2px solid black" }}
					>
						BICEPS
					</Grid>
					<Grid
						item
						sm={4}
						sx={{ padding: 4, border: "2px solid black" }}
					>
						TRICEPS
					</Grid>
					<Grid
						item
						sm={4}
						sx={{ padding: 4, border: "2px solid black" }}
					>
						CARDIO
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

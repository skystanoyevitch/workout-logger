import { Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Link, useLocation } from "react-router-dom";

import db from "../../db/db.json";
import { useState } from "react";
import { ExerciseList } from "../ExerciseListPage/ExerciseList";

export const ExerciseCategories = ({ onHandleNameClick }): JSX.Element => {
	const [openComponent, setOpenComponent] = useState(false);
	const [nameOfExercise, setNameOfExercise] = useState("");
	// const location = useLocation();
	// const getExerciseName = location.state;
	// console.log(db.category[0].exercises);

	const onClickHandler = (exerciseName) => {
		setOpenComponent(true);
		setNameOfExercise(exerciseName);
	};
	return (
		<>
			<Container sx={{ textAlign: "center", marginTop: 10 }}>
				{openComponent ? (
					<ExerciseList
						nameOfExercise={nameOfExercise}
						onHandleNameClick={onHandleNameClick}
					/>
				) : (
					<>
						<Typography variant="h1">
							Select Exercise Category
						</Typography>
						<Grid
							container
							justifyContent="center"
							gap={4}
							sx={{ paddingTop: 8 }}
						>
							{db.category.map((name, index) => (
								// console.log(name.categoryName)

								<Grid
									item
									sm={4}
									sx={{
										padding: 4,
										border: "2px solid black",
									}}
									key={index}
								>
									<Button
										onClick={() =>
											onClickHandler(name.exercises)
										}
									>
										{name.categoryName}
									</Button>
								</Grid>
							))}
						</Grid>
					</>
				)}
			</Container>
		</>
	);
};

import { List, ListItem, ListItemButton, Typography } from "@mui/material";
import { Container } from "@mui/system";
export const ExerciseList = (): JSX.Element => {
	return (
		<>
			<Container sx={{ textAlign: "center", marginTop: 10 }}>
				<Typography variant="h1" color="initial">
					Select Exercise
				</Typography>
				<List>
					<ListItemButton
						sx={{
							border: "2px solid black",
							padding: 2,
							borderRadius: 2,
						}}
					>
						Barbell Bench Press
					</ListItemButton>
					<ListItemButton
						sx={{
							border: "2px solid black",
							padding: 2,
							borderRadius: 2,
							marginY: 2,
						}}
					>
						Barbell Iincline Bench Press
					</ListItemButton>
					<ListItemButton
						sx={{
							border: "2px solid black",
							padding: 2,
							borderRadius: 2,
						}}
					>
						Barbell Decline Bench Press
					</ListItemButton>
				</List>
			</Container>
		</>
	);
};

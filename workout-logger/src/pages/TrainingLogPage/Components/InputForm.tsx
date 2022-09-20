import {
	Box,
	Button,
	Container,
	FormControl,
	Grid,
	Input,
	InputLabel,
	TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
export const InputForm = (): JSX.Element => {
	return (
		<Container maxWidth="sm">
			<form>
				<Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
					<TextField
						sx={{ width: "100%" }}
						label="Workout Name"
						type="text"
						// onChange={""}
						// value={""}
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
							id="dateInput"
							title="Date Created"
						/>
						<TextField
							sx={{ width: "50%" }}
							type="time"
							name="time"
							id="timeInput"
							title="Time Started"
						/>
					</Box>

					<TextField
						sx={{ width: "100%" }}
						type="text"
						label="notes"
						multiline={true}
						size="medium"
					/>
				</Box>
			</form>
			<Link to="/ExerciseCategories">
				<Button sx={{ marginTop: 4 }} variant="contained">
					Add Exercise
				</Button>
			</Link>
		</Container>
	);
};

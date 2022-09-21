import React from "react";
import { useLocation } from "react-router-dom";

interface LocationProps {
	name: string;
	date: string;
	time: string;
	notes: string;
}
const Workout = (): JSX.Element => {
	const location = useLocation();
	const { name, date, time, notes } = location.state as LocationProps;
	return (
		<div>
			<h1>
				{name} | {date} | {time} | {notes}
			</h1>
		</div>
	);
};

export default Workout;

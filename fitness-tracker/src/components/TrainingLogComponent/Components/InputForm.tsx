export const InputForm = (): JSX.Element => {
	return (
		<>
			<form>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					name="name"
					id="nameInput"
					placeholder="name"
				/>
				<label htmlFor="date">Date</label>
				<input
					type="date"
					name="date"
					id="dateInput"
					title="Date Created"
				/>
				<label htmlFor="time">Time</label>
				<input
					type="time"
					name="time"
					id="timeInput"
					title="Time Started"
				/>
				<label htmlFor="notes">Notes</label>
				<input
					type="text"
					name="notes"
					id="notesInput"
					title="any custom notes go here"
				/>
			</form>
		</>
	);
};

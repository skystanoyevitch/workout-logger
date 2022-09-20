import React, { useState } from "react";
import TrainingLog from "./pages/TrainingLogPage/TrainingLog";
import Welcome from "./pages/WelcomePage/Welcome";

const App = (): JSX.Element => {
	const [name, setName] = useState<string>("");

	const onSubmitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(name);
	};
	return (
		<div className="">
			{localStorage.getItem("username") ? (
				<TrainingLog />
			) : (
				<Welcome
					onSubmitHandler={onSubmitHandler}
					name={name}
					setName={setName}
				/>
			)}
		</div>
	);
};

export default App;

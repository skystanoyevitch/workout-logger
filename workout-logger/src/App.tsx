import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Welcome from "./pages/WelcomePage/Welcome";

const App = (): JSX.Element => {
	const [name, setName] = useState<string>("");

	const navigate = useNavigate();

	const onSubmitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		// navigate("/traininglog", { state: { username: name } });
		// localStorage.setItem("username", name);
		console.log(name);
	};
	return (
		<div>
			<Welcome
				onSubmitHandler={onSubmitHandler}
				name={name}
				setName={setName}
			/>
		</div>
	);
};

export default App;

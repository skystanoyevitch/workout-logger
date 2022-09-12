import React from "react";
import TrainingLog from "./components/TrainingLogComponent/TrainingLog";
import Welcome from "./components/WelcomeComponent/Welcome";

const App: React.FC = () => {
	return (
		<div className="">
			{localStorage.getItem("username") ? <TrainingLog /> : <Welcome />}
		</div>
	);
};

export default App;

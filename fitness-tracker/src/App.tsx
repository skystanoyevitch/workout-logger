// import WelcomePage from "./components/pages/WelcomePage/Components/WelcomePageComponent/WelcomePage";
import React from "react";
import { WelcomePage } from "../src/components/pages";

export interface PropsFace {
	msg: String;
}

function App() {
	const messageProps: PropsFace = {
		msg: "WELCOME TO YOUR TRAINING LOG",
	};

	return (
		<div className="">
			<p>
				This is the <WelcomePage message={messageProps} />{" "}
			</p>
		</div>
	);
}

export default App;

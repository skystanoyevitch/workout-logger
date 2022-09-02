import WelcomePage from "./pages/welcome-page/Welcome";
import React from "react";

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

import React from "react";
import { WelcomePage } from "../src/components/pages";
import { FrontPage } from "./components/pages";

const App: React.FC = () => {
	return (
		<div className="">
			{localStorage.getItem("username") ? <FrontPage /> : <WelcomePage />}
		</div>
	);
};

export default App;

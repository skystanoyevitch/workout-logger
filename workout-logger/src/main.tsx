import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TrainingLog from "./components/TrainingLogComponent/TrainingLog";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/traininglog" element={<TrainingLog />} />
			<Route />
		</Routes>
	</BrowserRouter>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TrainingLog from "./pages/TrainingLogPage/TrainingLog";
import { ExerciseCategories } from "../src/pages/ExerciseCategoriesPage/ExerciseCategories";
import { ExerciseList } from "./pages/ExerciseListPage/ExerciseList";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/traininglog" element={<TrainingLog />} />
			<Route path="/exerciselist" element={<ExerciseList />} />
			<Route
				path="/ExerciseCategories"
				element={<ExerciseCategories />}
			/>
		</Routes>
	</BrowserRouter>
);

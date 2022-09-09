import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FrontPage } from "./components/pages/FrontPage/Components/FrontPage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/frontpage" element={<FrontPage />} />
			<Route />
		</Routes>
	</BrowserRouter>
);

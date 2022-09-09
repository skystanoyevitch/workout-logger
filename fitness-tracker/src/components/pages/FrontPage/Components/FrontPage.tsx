import React from "react";
import Styles from "../Styles/FrontPage.module.css";
import { useLocation, Location } from "react-router-dom";

declare function useLocation(): Location;

interface Location {
	state: any;
}

export function FrontPage(): JSX.Element {
	const location: Location = useLocation();
	const username = location?.state.username.toUpperCase();


	return (
		<div className={Styles.container}>
			<h1 className={Styles.heading}>
				<span className={Styles.text_sub_color}>
					{username}'S TRAINING LOG
				</span>
			</h1>
			<h3 className={Styles.subheading}>
				to start, please type in your name
			</h3>
		</div>
	);
}

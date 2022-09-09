import React from "react";
import Styles from "../FrontPage/Styles/frontpage.module.css";
import { useLocation } from "react-router-dom";

const FrontPage: React.FC = () => {
	const username: string | undefined = localStorage
		.getItem("username")
		?.toUpperCase();

	return (
		<div className={Styles.container}>
			<h1 className={Styles.heading}>
				<span className={Styles.text_sub_color}>
					{username}'S TRAINING LOG
				</span>
			</h1>
			<h3 className={Styles.subheading}>
				lets add some details to begin...
			</h3>
		</div>
	);
};

export default FrontPage;

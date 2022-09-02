import React from "react";
import { PropsFace } from "../../App";
import styles from "../welcome-page/styles.module.css";

interface Iprops {
	message: PropsFace;
}

function WelcomePage({ message }: Iprops): JSX.Element {
	return <div className={styles.text}>{message.msg}</div>;
}

export default WelcomePage;



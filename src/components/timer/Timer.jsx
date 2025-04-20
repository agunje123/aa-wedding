import { useState, useEffect } from "react";

import "./Timer.css";

const Timer = () => {
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [isTimeUp, setIsTimeUp] = useState(false);

	const deadline = "April, 18, 2025 16:00:00";

	const getTime = () => {
		const time = Date.parse(deadline) - Date.now();

		if (time <= 0) {
			setIsTimeUp(true);
		} else {
			setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
			setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
			setMinutes(Math.floor((time / 1000 / 60) % 60));
		}
	};

	useEffect(() => {
		const interval = setInterval(() => getTime(deadline), 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="timer">
			{isTimeUp ? (
				<a
					href="https://drive.google.com/drive/folders/1-cAiN3bYqR2nc-w56uJS3Zr3s4xtCHNg?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
					className="button_upload"
				>
					Počastite nas svojim slikama
				</a>
			) : (
				<>
					<span id="day">{days < 10 ? "0" + days : days} d</span>
					<span id="hour">{hours < 10 ? "0" + hours : hours} h</span>
					<span id="minute">
						{minutes < 10 ? "0" + minutes : minutes} min
					</span>
				</>
			)}
		</div>
	);
};

export default Timer;

import { useState, useEffect } from "react";

import "./Timer.css"

const Timer = () => {
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	const deadline = "April, 25, 2025";

	const getTime = () => {
		const time = Date.parse(deadline) - Date.now();

		setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
		setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
		setMinutes(Math.floor((time / 1000 / 60) % 60));
		setSeconds(Math.floor((time / 1000) % 60));
	};

	useEffect(() => {
		const interval = setInterval(() => getTime(deadline), 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="timer">
			<span id="day">{days < 10 ? "0" + days : days}</span>-
			<span id="hour">{hours < 10 ? "0" + hours : hours}</span>-
			<span id="minute">{minutes < 10 ? "0" + minutes : minutes}</span>-
			<span id="second">{seconds < 10 ? "0" + seconds : seconds}</span>
		</div>
	);
};

export default Timer;

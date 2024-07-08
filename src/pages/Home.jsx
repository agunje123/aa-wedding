import Timer from "../components/timer/Timer";
import "./styles/Home.css";

export default function Home() {
	return (
		<>
			<section className="welcome" id="home">
				<div className="background"></div>
				<div className="title">
					<h1>Antonija & Andrija</h1>
					<span className="date">25. 4. 2025.</span>
					<span className="timer">
						<Timer />
					</span>
				</div>
			</section>
		</>
	);
}

import Timer from "../components/timer/Timer";
import "./styles/Home.css";

export default function Home() {
	return (
		<>
			<section className="welcome" id="home">
				<div className="background"></div>
				<div className="title">
					<p>Antonija & Andrija</p>
					<p>25. 4. 2025.</p>
					<p>
						<Timer />
					</p>
				</div>
			</section>
		</>
	);
}

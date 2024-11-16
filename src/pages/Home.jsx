import Timer from "../components/timer/Timer";
import background from "../assets/background.jpg";
import "./styles/Home.css";

const backgroundStyle = {
	backgroundImage: `url(${background})`,
};

export default function Home() {
	return (
		<>
			<section className="welcome" id="home">
				<div className="background" style={backgroundStyle}></div>
				<div className="title">
					<h1 className="heading">Antonija & Andrija</h1>
					<span className="date">25. 4. 2025.</span>
					<span className="timer">
						<Timer />
					</span>
				</div>
			</section>
		</>
	);
}

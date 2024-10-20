import "./styles/About.css";

import InfoCard from "../components/info-card/InfoCard";

export default function About() {
	return (
		<>
			<h1 id="about" className="heading">
				About
			</h1>
			<div className="cards">
				<InfoCard
					image="src/assets/disco-ball.png"
					name="John Doe"
					description="A short description about John Doe."
				/>
			</div>
		</>
	);
}

import "./styles/About.css";

import InfoCard from "../components/info-card/InfoCard";

const people = [
	{
		image: "src/assets/aa.png",
		name: "Andrija i Antonija",
		description: "Show",
	},
	{
		image: "src/assets/tomo.png",
		name: "Tomislav",
		description: "HŽV",
	},
	{
		image: "src/assets/mihi.png",
		name: "Mihaela",
		description: "Garo lover",
	},
	{
		image: "src/assets/garo.png",
		name: "Garo",
		description: "Meow",
	},
];

export default function About() {
	return (
		<>
			<h1 id="about" className="heading">
				About
			</h1>
			<div className="cards">
				{people.map((person, index) => (
					<InfoCard
						key={index}
						image={person.image}
						name={person.name}
						description={person.description}
					/>
				))}
			</div>
		</>
	);
}

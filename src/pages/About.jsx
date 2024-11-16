import "./styles/About.css";
import andrija from "../assets/andrija.png";
import antonija from "../assets/antonija.png";
import mihi from "../assets/mihi.png";
import tomo from "../assets/tomo.png";
import garo from "../assets/garo.png";

import InfoCard from "../components/info-card/InfoCard";

const people = [
	{
		image: andrija,
		name: "Andrija",
		description: '"Volim duge šetnje plažama i igre upoznavanja!"',
	},
	{
		image: antonija,
		name: "Antonija",
		description: '"Umorna sam više od šetnji plažama."',
	},
	{
		image: tomo,
		name: "Tomislav",
		description: '"Nadan se da će svirat Dražen Žanko i Vinko Coce. HŽV!"',
	},
	{
		image: mihi,
		name: "Mihaela",
		description:
			'"Od hobija najdraži su mi mijenjanje posla i kritiziranje kolača."',
	},
	{
		image: garo,
		name: "Garo",
		description: '"Meow."',
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

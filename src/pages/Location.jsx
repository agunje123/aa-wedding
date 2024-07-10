import { useState } from "react";
import Map from "../components/map/Map";

import champagne from "../assets/champagne.png";
import church from "../assets/church.png";
import disco from "../assets/disco-ball.png";

import "./styles/Location.css";

export default function Location() {
	const [openPopupIndex, setOpenPopupIndex] = useState(0);
	const [currentPosition, setCurrentPosition] = useState([
		44.1110041, 15.2333336,
	]);

	const handleIconClick = (geocode, index) => {
		setCurrentPosition(geocode);
		setOpenPopupIndex(index);
	};

	return (
		<>
			<h1>Di smo?</h1>
			<div className="stepper" id="location">
				<div
					className="event_container"
					onClick={() => handleIconClick([44.1110041, 15.2333336], 0)}
				>
					<img src={champagne} alt="Domjenak" />
					<div className="description">
						<header>Domjenak</header>
						<main>Butler - 15:00</main>
					</div>
				</div>
				<div
					className="event_container"
					onClick={() => handleIconClick([44.1134336, 15.2286381], 1)}
				>
					<img src={church} alt="Crkva" />
					<div className="description">
						<header>Crkva</header>
						<main>Sveti Šime - 18:00</main>
					</div>
				</div>
				<div
					className="event_container"
					onClick={() => handleIconClick([44.1374965, 15.3153856], 2)}
				>
					<img src={disco} alt="Sala" />
					<div className="description">
						<header>Sala</header>
						<main>Divino - 20:00</main>
					</div>
				</div>
			</div>
			<div className="map">
				<Map
					currentPosition={currentPosition}
					openPopupIndex={openPopupIndex}
				/>
			</div>
		</>
	);
}

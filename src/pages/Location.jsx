import { useState } from "react";
import Map from "../components/map/Map";

import "./styles/Location.css";

export default function Location() {
	const [currentPosition, setCurrentPosition] = useState([
		44.1110041, 15.2333336,
	]);

	const handleIconClick = (geocode) => {
		setCurrentPosition(geocode);
	};

	return (
		<>
			<h1>Di smo?</h1>
			<div className="stepper" id="location">
				<div onClick={() => handleIconClick([44.1110041, 15.2333336])}>
					icon 1
				</div>
				---
				<div onClick={() => handleIconClick([44.1134336, 15.2286381])}>
					icon 2
				</div>
				---
				<div onClick={() => handleIconClick([44.1374965, 15.3153856])}>
					icon 3
				</div>
			</div>
			<div className="map">
				<Map currentPosition={currentPosition} />
			</div>
		</>
	);
}

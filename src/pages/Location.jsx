import Map from "../components/map/Map";

import "./styles/Location.css";

export default function Location() {
	return (
		<>
			<div className="stepper">
				<div>icon 1</div>
				---
				<div>icon 2</div>
				---
				<div>icon 3</div>
			</div>
			<Map />
		</>
	);
}

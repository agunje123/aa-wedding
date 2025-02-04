import { useState } from "react";
import Map from "../components/map/Map";

import champagne from "../assets/champagne.png";
import church from "../assets/church.png";
import disco from "../assets/disco-ball.png";
import menuPDF from "../assets/menu.pdf";
import invitationPDF from "../assets/invitation.pdf";

import "./styles/Location.css";

export default function Location() {
	const locations = [
		{
			id: 0,
			name: "Domjenak",
			time: "Galija - 15:00",
			coordinates: [44.1285473, 15.2158132],
			img: champagne,
		},
		{
			id: 1,
			name: "Crkva",
			time: "Sveti Šime - 18:00",
			coordinates: [44.1134336, 15.2286381],
			img: church,
		},
		{
			id: 2,
			name: "Sala",
			time: "Divino - 20:00",
			coordinates: [44.1374965, 15.3153856],
			img: disco,
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);
	const [openPopupIndex, setOpenPopupIndex] = useState(0);
	const [currentPosition, setCurrentPosition] = useState(
		locations[currentIndex].coordinates
	);

	const handleIconClick = (geocode, index) => {
		setCurrentPosition(geocode);
		setOpenPopupIndex(index);
	};

	const handleNext = () => {
		if (currentIndex < locations.length - 1) {
			const newIndex = currentIndex + 1;
			setCurrentIndex(newIndex);
			handleIconClick(locations[newIndex].coordinates, newIndex);
		}
	};

	const handlePrevious = () => {
		if (currentIndex > 0) {
			const newIndex = currentIndex - 1;
			setCurrentIndex(newIndex);
			handleIconClick(locations[newIndex].coordinates, newIndex);
		}
	};

	const handleDownload = (fileName) => {
		const link = document.createElement("a");
		link.href = fileName === "menu" ? menuPDF : invitationPDF;
		link.download = fileName;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<>
			<h1 className="heading" id="location">
				Di smo?
			</h1>
			<div className="stepper">
				<button
					onClick={handlePrevious}
					disabled={currentIndex === 0}
					className="nav-button left"
				>
					&#9664; {/* Left arrow */}
				</button>

				<div className="event_container">
					<img
						src={locations[currentIndex].img}
						alt={locations[currentIndex].name}
					/>
					<div className="description">
						<header className="heading">
							{locations[currentIndex].name}
						</header>
						<main>{locations[currentIndex].time}</main>
					</div>
				</div>

				<button
					onClick={handleNext}
					disabled={currentIndex === locations.length - 1}
					className="nav-button right"
				>
					&#9654; {/* Right arrow */}
				</button>
			</div>
			<div className="map">
				<Map
					currentPosition={currentPosition}
					openPopupIndex={openPopupIndex}
				/>
			</div>
			<div onClick={() => handleDownload("menu")} className="download">
				Preuzmite jelovnik - da ne bude iznenađenja!
			</div>
			<div
				onClick={() => handleDownload("invitation")}
				className="download"
			>
				Preuzmite ekološki prihvatljivu pozivnicu!
			</div>
		</>
	);
}

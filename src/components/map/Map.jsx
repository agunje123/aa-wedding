import { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { Icon } from "leaflet";

import "./Map.css";
import "leaflet/dist/leaflet.css";

const markerIcon = new Icon({
	iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
	iconSize: [25, 38],
});

const markers = [
	{
		geocode: [44.1110041, 15.2333336],
		popUp: "Butler",
	},
	{
		geocode: [44.1134336, 15.2286381],
		popUp: "Sveti Šime",
	},
	{
		geocode: [44.1374965, 15.3153856],
		popUp: "Divino",
	},
];

function MapPan({ position }) {
	const map = useMap();

	useEffect(() => {
		map.setView(position, map.getZoom(), { animate: true });
	}, [position, map]);

	return null;
}

export default function Map({ currentPosition, openPopupIndex }) {
	const markerRefs = useRef([]);

	useEffect(() => {
		if (markerRefs.current[openPopupIndex]) {
			const marker = markerRefs.current[openPopupIndex];
			if (marker) {
				setTimeout(() => {
					marker.openPopup();
				}, 300);
			}
		}
	}, [openPopupIndex]);

	return (
		<MapContainer center={currentPosition} zoom={16}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
				url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
				maxZoom={20}
				subdomains={["a", "b", "c", "d"]}
			/>
			<MapPan position={currentPosition} />
			{markers.map((marker, index) => (
				<Marker
					key={index}
					position={marker.geocode}
					icon={markerIcon}
					ref={(el) => (markerRefs.current[index] = el)}
				>
					<Popup className="popup">{marker.popUp}</Popup>
				</Marker>
			))}
		</MapContainer>
	);
}

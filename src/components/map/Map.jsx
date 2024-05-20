import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

import "./Map.css";
import "leaflet/dist/leaflet.css";

//TODO: zaminiti ikonicu
const markerIcon = new Icon({
	iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
	iconSize: [25, 38],
});

//TODO: koordinate domjenka treba updateati
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

export default function Map() {
	return (
		<MapContainer center={markers[0].geocode} zoom={16}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
				url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
				maxZoom={20}
				subdomains={["a", "b", "c", "d"]}
			/>
			{markers.map((marker) => (
				<Marker position={marker.geocode} icon={markerIcon}>
					<Popup>{marker.popUp}</Popup>
				</Marker>
			))}
		</MapContainer>
	);
}

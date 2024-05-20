import { MapContainer, TileLayer } from "react-leaflet";

import "./Map.css";
import "leaflet/dist/leaflet.css";

export default function Map() {
	return (
		<MapContainer center={[44.1194, 15.2314]} zoom={12}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
				url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
				maxZoom={20}
				subdomains={["a", "b", "c", "d"]}
			/>
		</MapContainer>
	);
}

import "./App.css";
import Navbar from "./components/navigation/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Location from "./components/pages/Location";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/location" element={<Location />} />
			</Routes>
		</>
	);
}

export default App;

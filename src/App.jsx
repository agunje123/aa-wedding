import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Location from "./pages/Location";

function App() {
	return (
		<>
			<Navbar />
			<Home />
			<About />
			<Location />
		</>
	);
}

export default App;

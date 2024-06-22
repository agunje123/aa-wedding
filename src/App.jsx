import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Location from "./pages/Location";
import Footer from "./components/footer/Footer";

function App() {
	document.body.style =
		"background-color: var(--background); color: var(--beige)";

	return (
		<>
			<Navbar />
			<Home />
			<About />
			<Location />
			<Footer />
		</>
	);
}

export default App;

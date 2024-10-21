import React, { useRef, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Location from "./pages/Location";
import Footer from "./components/footer/Footer";
import { useIntersectionObserver } from "./hooks/IntersectionObserver.hook";

function App() {
	useEffect(() => {
		document.body.style.backgroundColor = "var(--background)";
		document.body.style.color = "var(--beige)";
	}, []);

	const sectionsRefs = [useRef(null), useRef(null), useRef(null)];

	useIntersectionObserver(sectionsRefs, { threshold: 0.25 });

	return (
		<>
			<Navbar />
			<Home />
			<div ref={sectionsRefs[0]} className="section">
				<About />
			</div>
			<div ref={sectionsRefs[1]} className="section">
				<Location />
			</div>
			<div ref={sectionsRefs[2]} className="section">
				<Footer />
			</div>
		</>
	);
}

export default App;

import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
	//Set color on scroll
	const [color, setColor] = useState(false);
	const changeColor = () => {
		if (window.scrollY >= 90) {
			setColor(true);
		} else {
			setColor(false);
		}
	};

	window.addEventListener("scroll", changeColor);

	return (
		<nav className={color ? "nav nav-bg" : "nav"}>
			<Link to="/" className="site_name">
				A&A
			</Link>
			<ul>
				<li>
					<Link to="/about">Ko ste vi?</Link>
				</li>
				<li>
					<Link to="/location">Di, kad?</Link>
				</li>
			</ul>
		</nav>
	);
}

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
			<div className="site_name">A&A</div>
			<ul>
				<li>
					<div>Ko ste vi?</div>
				</li>
				<li>
					<div>Di, kad?</div>
				</li>
			</ul>
		</nav>
	);
}

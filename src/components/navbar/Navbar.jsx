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
			<div
				className="site_name heading"
				onClick={() => {
					const home = document.querySelector("#home");
					home.scrollIntoView({
						behavior: "smooth",
						block: "center",
					});
				}}
			>
				A&A
			</div>
			<ul>
				<li>
					<div
						className="heading"
						onClick={() => {
							const about = document.querySelector("#about");
							about.scrollIntoView({
								behavior: "smooth",
								block: "center",
							});
						}}
					>
						Ko ste vi?
					</div>
				</li>
				<li>
					<div
						className="heading"
						onClick={() => {
							const location =
								document.querySelector("#location");
							location.scrollIntoView({
								behavior: "smooth",
								block: "center",
							});
						}}
					>
						Di, kad?
					</div>
				</li>
			</ul>
		</nav>
	);
}

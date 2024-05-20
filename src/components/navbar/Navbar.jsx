import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
	return (
		<nav className="nav">
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

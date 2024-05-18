import "./Navbar.css";

export default function Navbar() {
	return (
		<nav className="nav">
			<a href="/" className="site_name">
				A&A
			</a>
			<ul>
				<li>
					<a href="/faq">Ko ste vi?</a>
				</li>
				<li>
					<a href="/location">Di, kad?</a>
				</li>
			</ul>
		</nav>
	);
}

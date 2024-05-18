import "./Navbar.css";

export default function Navbar() {
	return (
		<nav className="nav">
			<a href="/" className="site_name">
				A&A
			</a>
			<ul>
				<li>
					<a href="/faq">FAQ</a>
				</li>
				<li>
					<a href="/location">DI ŠTO KAD</a>
				</li>
			</ul>
		</nav>
	);
}

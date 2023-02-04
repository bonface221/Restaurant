import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div>
			<nav className="navbar navbar-dark navbar-expand-lg bg-dark sticky-top pt-2">
				<div className="container">
					<Link to="/" className="navbar-brand text-decoration-none">
						Restaurant search
					</Link>

					<ul className="navbar-nav ms-auto mx-3">
						<li className="nav-item">
							<Link
								className="nav-link active mx-3 text-decoration-none"
								to="/"
							>
								home
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar(props) {
	const [isNavCollapsed, setIsNavCollapsed] = useState(true);

	const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
	return (
		<nav
			className="navbar navbar-expand-lg navbar-light bg-light fs-4"
			aria-label="navbar"
		>
			<div className="container">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbar"
					aria-controls="navbar"
					aria-expanded={!isNavCollapsed ? true : false}
					aria-label="Toggle navigation"
					onClick={handleNavCollapse}
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className={`${
						isNavCollapsed ? "collapse" : ""
					} navbar-collapse justify-content-between`}
					id="navbar"
				>
					<ul className="navbar-nav mb-2 mb-lg-0">
						<li className="nav-item">
							<Link href="#ownprojects">
								<a className="nav-link">Nossos Projetos</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="#aboutus">
								<a className="nav-link">Quem Somos</a>
							</Link>
						</li>
					</ul>
					<Link href="/">
						<a className="navbar-brand">
							<Image
								src="/images/logoProjetoAlmeida.jpeg"
								alt="Logo"
								width={125}
								height={125}
							/>
						</a>
					</Link>
					<ul className="navbar-nav mb-2 mb-lg-0 mr-auto">
						<li className="nav-item">
							<Link href="#getinvolved">
								<a className="nav-link">Envolva-se</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="#partners">
								<a className="nav-link">Parceiros</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

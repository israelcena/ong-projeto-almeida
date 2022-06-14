import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
	return (
		<nav
			className="navbar navbar-expand-lg navbar-light bg-light sticky-top"
			aria-label="navbar"
		>
			<div className="container-xl">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbar"
					aria-controls="navbar"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbar">
					<ul className="navbar-nav mb-2 mb-lg-0">
						<div className="d-flex">
							<li className="nav-item">
								<Link href="#">
									<a className="nav-link active" aria-current="page">
										Nossos Projetos
									</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="#">
									<a className="nav-link">Quem Somos</a>
								</Link>
							</li>
						</div>

						<div>
							<li>
								<Link href="#">
									<a className="navbar-brand">
										<Image
											src="/images/logoProjetoAlmeida.jpeg"
											alt="Logo"
											width={100}
											height={100}
										/>
									</a>
								</Link>
							</li>
						</div>
						<div className="d-flex">
							<li className="nav-item">
								<Link href="#">
									<a className="nav-link active" aria-current="page">
										Nossos Projetos
									</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="#">
									<a className="nav-link">Quem Somos</a>
								</Link>
							</li>
						</div>
					</ul>
				</div>
			</div>
		</nav>
	);
}

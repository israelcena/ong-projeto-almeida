import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function OwnProjects() {
	return (
		<section
			className=" text-center my-5 py-5"
			id="ownprojects"
			style={{
				backgroundColor: "#74b9ff",
			}}
		>
			<div className="container">
				<div>
					<h1 className="text-primary mb-3">
						Projetos <br />
						<span>
							<BsArrowRight />
						</span>
					</h1>
				</div>
				<div className="row">
					<div className="col-lg-4">
						<svg
							className="bd-placeholder-img rounded-circle mb-2"
							width="140"
							height="140"
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							aria-label="Placeholder: 140x140"
							preserveAspectRatio="xMidYMid slice"
							focusable="false"
						>
							<title>Placeholder</title>
							<rect width="100%" height="100%" fill="#777"></rect>
							<text x="50%" y="50%" fill="#777" dy=".3em">
								140x140
							</text>
						</svg>

						<h2 className="fw-normal">Projeto</h2>
						<p>
							Some representative placeholder content for the three columns of
							text below the carousel. This is the first column.
						</p>
						<p>
							<Link href="#">
								<a className="btn btn-secondary">Conhecer »</a>
							</Link>
						</p>
					</div>
					<div className="col-lg-4">
						<svg
							className="bd-placeholder-img rounded-circle mb-2"
							width="140"
							height="140"
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							aria-label="Placeholder: 140x140"
							preserveAspectRatio="xMidYMid slice"
							focusable="false"
						>
							<title>Placeholder</title>
							<rect width="100%" height="100%" fill="#777"></rect>
							<text x="50%" y="50%" fill="#777" dy=".3em">
								140x140
							</text>
						</svg>

						<h2 className="fw-normal">Projeto</h2>
						<p>
							Another exciting bit of representative placeholder content. This
							time, weve moved on to the second column.
						</p>
						<p>
							<Link href="#">
								<a className="btn btn-secondary">Conhecer »</a>
							</Link>
						</p>
					</div>
					<div className="col-lg-4">
						<svg
							className="bd-placeholder-img rounded-circle mb-2"
							width="140"
							height="140"
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							aria-label="Placeholder: 140x140"
							preserveAspectRatio="xMidYMid slice"
							focusable="false"
						>
							<title>Placeholder</title>
							<rect width="100%" height="100%" fill="#777"></rect>
							<text x="50%" y="50%" fill="#777" dy=".3em">
								140x140
							</text>
						</svg>

						<h2 className="fw-normal">Projeto</h2>
						<p>
							And lastly this, the third column of representative placeholder
							content.
						</p>
						<p>
							<Link href="#">
								<a className="btn btn-secondary">Conhecer »</a>
							</Link>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

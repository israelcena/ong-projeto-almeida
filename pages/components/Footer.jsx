import Link from "next/link";
import { BsInfoCircleFill } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

export default function Footer() {
	return (
		<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
			<div className="col-md-4 d-flex align-items-center">
				<Link href="/">
					<a className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
						<BsInfoCircleFill />
					</a>
				</Link>
				<span className="mb-3 mb-md-0 text-muted">
					© 2022 Projeto Almeida, Organização sem fins lucrativos
				</span>
			</div>

			<ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
				<li className="ms-3">
					<Link href="/">
						<a className="text-muted">
							<BsFacebook />
						</a>
					</Link>
				</li>
				<li className="ms-3">
					<Link href="/">
						<a className="text-muted">
							<BsInstagram />
						</a>
					</Link>
				</li>
				<li className="ms-3">
					<Link href="/">
						<a className="text-muted">
							<BsYoutube />
						</a>
					</Link>
				</li>
				<li className="ms-3">
					<Link href="/">
						<a className="text-muted">
							<BsWhatsapp />
						</a>
					</Link>
				</li>
				<li className="ms-3">
					<Link href="/">
						<a className="text-muted">
							<BsLinkedin />
						</a>
					</Link>
				</li>
			</ul>
		</footer>
	);
}

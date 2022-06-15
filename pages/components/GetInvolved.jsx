import { BsArrowRight } from "react-icons/bs";
export default function GetInvolved() {
	return (
		<section className="container my-5 px-5 text-center" id="getinvolved">
			<h1 className="text-primary mb-3">
				Envolva-se
				<br />
				<span>
					<BsArrowRight />
				</span>
			</h1>
			<div className="d-lg-flex justify-content-center aling-itens-center">
				<div className="col-lg-6">
					<p>
						Lorem Ipsum é simplesmente uma simulação de texto da indústria
						tipográfica e de impressos, e vem sendo utilizado desde o século
						XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
						os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
						sobreviveu não só a cinco séculos, como também ao salto para a
						editoração eletrônica, permanecendo essencialmente inalterado. Se
						popularizou na década de 60, quando a Letraset lançou decalques
						contendo passagens de Lorem Ipsum, e mais recentemente quando passou
						a ser integrado a softwares de editoração eletrônica como Aldus
						PageMaker.
					</p>
				</div>
				<div className="col-lg-2">
					<svg
						className="bd-placeholder-img rounded-circle shadow"
						width="140"
						height="140"
						xmlns="http://www.w3.org/2000/svg"
						role="img"
						aria-label="Placeholder: 140x140"
						preserveAspectRatio="xMidYMid slice"
						focusable="false"
					>
						<title>Placeholder</title>
						<rect width="100%" height="100%" fill="#0d6efd"></rect>
					</svg>
				</div>
			</div>
		</section>
	);
}

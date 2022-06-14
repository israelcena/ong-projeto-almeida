export default function AboutUs() {
	return (
		<section className="container my-5 d-flex justify-content-center align-items-center gap-2 px-5">
			<div
				className="rounded-circle shadow bg-primary p-5 m-5"
				style={{
					height: "250px",
					width: "250px",
				}}
			></div>
			<div className="w-50">
				<h1>Quem Somos</h1>
				<p>
					Lorem Ipsum é simplesmente uma simulação de texto da indústria
					tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
					quando um impressor desconhecido pegou uma bandeja de tipos e os
					embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
					sobreviveu não só a cinco séculos, como também ao salto para a
					editoração eletrônica, permanecendo essencialmente inalterado. Se
					popularizou na década de 60, quando a Letraset lançou decalques
					contendo passagens de Lorem Ipsum, e mais recentemente quando passou a
					ser integrado a softwares de editoração eletrônica como Aldus
					PageMaker.
				</p>
			</div>
		</section>
	);
}

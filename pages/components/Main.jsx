export default function Main() {
	return (
		<main>
			<div className="px-4 py-5 text-center bg-primary text-white">
				<h1 className="display-3 fw-bold text-uppercase">Projeto Almeida</h1>
				<div className="col-lg-6 mx-auto ">
					<p className="lead mb-4 fs-1">de Volta à sociedade</p>
					<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
						<button type="button" className="btn btn-success btn-lg px-4 gap-3">
							Faça um Doação
						</button>
						<button type="button" className="btn btn-secondary btn-lg px-4">
							Conheça
						</button>
					</div>
				</div>
			</div>
		</main>
	);
}

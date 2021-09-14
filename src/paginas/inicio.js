

export default function Inicio() {





    return (
        <div className="d-flex flex-column p-2">


            <div className="d-flex justify-content-evenly">
                <div className="card text-center m-2 w-50">
                    <div className="card-header fw-bold">
                        CONSUMO DE COMBUSTIVEL
                    </div>
                    <div className="card-body ">
                        <h5 className="card-title"> </h5>
                        <p className="card-text"> </p>
                        {/* <div className="btn btn-primary">ABRIR</div> */}
                    </div>
                    <div className="card-footer text-muted"></div>
                </div>

                <div className="card text-center m-2 w-50">
                    <div className="card-header fw-bold">
                        MULTAS
                    </div>
                    <div className="card-body">
                        <h5 className="card-title"> </h5>
                        <p className="card-text"> </p>
                        {/* <div className="btn btn-primary">ABRIR</div> */}
                    </div>
                    <div className="card-footer text-muted"></div>
                </div>
            </div>



            <div className="d-flex justify-content-evenly ">
                <div className="card text-center m-2 w-50">
                    <div className="card-header fw-bold">
                        PEDÁGIO
                    </div>
                    <div className="card-body">
                        <h5 className="card-title"> </h5>
                        <p className="card-text"> </p>
                        {/* <div className="btn btn-primary">ABRIR</div> */}
                    </div>
                    <div className="card-footer text-muted"></div>
                </div>

                <div className="card text-center m-2 w-50">
                    <div className="card-header fw-bold">
                        VEICULO EM MANUTENÇÃO
                    </div>
                    <div className="card-body">
                        <h5 className="card-title"> </h5>
                        <p className="card-text"> </p>
                        {/* <div className="btn btn-primary">ABRIR</div> */}
                    </div>
                    <div className="card-footer text-muted"></div>
                </div>
            </div>


        </div>
    )
}
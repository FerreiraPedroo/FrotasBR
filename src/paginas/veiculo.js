import { Link } from "react-router-dom";
import listaVeiculo from "../dados/listaveiculo";

export default function veiculos() {

    return (
        <div className="m-2 border rounded-3">
            <table className="table table-light table-sm  table-striped caption-top">
                <caption className="text-center border-bottom ">LISTA DE VEICULOS</caption>
                <thead>
                    <tr>
                        <th scope="col">PLACA</th>
                        <th scope="col">MODELO</th>
                        <th scope="col">COR</th>
                        <th scope="col">ANO</th>
                        <th scope="col">FABRICANTE</th>
                        <th scope="col">COMBUSTIVEL</th>
                        <th scope="col">TIPO VEICULO</th>
                        <th scope="col">MOTORISTA</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaVeiculo.map((veiculo) => {
                            return (
                                <tr>
                                    <th scope="row"><Link className="text-decoration-none" to={"/veiculo/"+veiculo.placa} >{veiculo.placa}</Link></th>
                                    <td >{veiculo.modelo}</td>
                                    <td>{veiculo.cor}</td>
                                    <td>{veiculo.ano}</td>
                                    <td>{veiculo.fabricante}</td>                                    
                                    <td>{veiculo.combustivel}</td>
                                    <td>{veiculo.tipoVelculo}</td>
                                    {
                                        veiculo.motorista.matricula === 0 ?
                                        <td></td> 
                                        :
                                        <td><Link className="text-decoration-none" to={"/motorista/"+veiculo.motorista.matricula} >{veiculo.motorista.matricula} - {veiculo.motorista.nome}</Link></td> 
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
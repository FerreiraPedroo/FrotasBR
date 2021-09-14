import { Link } from "react-router-dom"
import listaMotorita from "../dados/listamotorista"


export default function Motoristas() {

    return (
        <div className="m-2 border rounded-3">
            <table className="table table-sm table-striped caption-top border">
                <caption className="text-center">LISTA DE MOTORISTA</caption>
                <thead>
                    <tr>
                        <th scope="col">MATRICULA</th>
                        <th scope="col">NOME</th>
                        <th scope="col">HABILITAÇÃO</th>
                        <th scope="col">PONTUAÇÃO</th>
                        <th scope="col">VENCIMENTO</th>
                        <th scope="col">VEICULO</th>
                        <th scope="col">PLACA</th>
                        <th scope="col">AREA</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaMotorita.map((motorista) => {
                            return (
                                <tr>
                                    <th scope="row">{motorista.matricula}</th>
                                    <td ><Link className="text-decoration-none" to={"/motorista/"+motorista.matricula} >{motorista.nome}</Link></td>
                                    <td>{motorista.habilitacao}</td>
                                    <td>{motorista.pontuacao}</td>
                                    <td>{motorista.vencimentoHabilitacao}</td>
                                    <td>{motorista.veiculo}</td>                                    
                                    <td><Link className="text-decoration-none" to={"/veiculo/"+motorista.placa} >{motorista.placa}</Link></td>
                                    <td>{motorista.area}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>

        </div>
    )
}
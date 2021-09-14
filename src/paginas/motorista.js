
export default function Motoristas() {

    return (
<div className="m-2">
        <table className="table table-sm table-striped caption-top">
            <caption className="text-center">LISTA DE MOTORISTA</caption>
            <thead>
                <tr>
                    <th scope="col ">MATRICULA</th>
                    <th scope="col">NOME</th>
                    <th scope="col">AREA</th>
                    <th scope="col">HABILITAÇÃO</th>
                    <th scope="col">PONTUAÇÃO</th>
                    <th scope="col">VEICULO</th>
                    <th scope="col">PLACA</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>

                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>Otto</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>

</div>
    )
}
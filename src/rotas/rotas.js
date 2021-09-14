import Motoristas from "../paginas/motorista";
import Inicio from "../paginas/inicio";
import Veiculo from "../paginas/veiculo";

const rotasRaiz = [
    {
        path: "/motorista",
        componete: Motoristas,
        title: "MOTORISTAS"
    },
    // {
    //     path: "/multas",
    //     componete: Multas,
    //     title: "MULTAS"
    // },
    {
        path: "/veiculo",
        componete: Veiculo,
        title: "VEICULO"
    },
    {
        path: "/",
        componete: Inicio,
        title: "INICIO"
    }
]

export default rotasRaiz;
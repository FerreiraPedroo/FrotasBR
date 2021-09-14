import Motoristas from "../paginas/motorista";
import Inicio from "../paginas/inicio";

const rotasRaiz = [
    {
        path: "/motoristas",
        componete: Motoristas,
        title: "MOTORISTAS"
    },
    // {
    //     path: "/multas",
    //     componete: Multas,
    //     title: "MULTAS"
    // },
    // {
    //     path: "/veiculo",
    //     componete: Veiculo,
    //     title: "VEICULO"
    // },
    {
        path: "/",
        componete: Inicio,
        title: "INICIO"
    }
]

export default rotasRaiz;
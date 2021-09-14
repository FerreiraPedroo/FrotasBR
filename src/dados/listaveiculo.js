
const listaVeiculo = 
[
{
    status: "ATIVO",
    placa: "LTU8050",
    modelo: "DOBLO", 
    cor: "Branca",       
    ano: "2020/2021",
    tipoVelculo: "Utilitário",    
    chassi:123456789,
    renavam: 321654,


    fabricante: "FIAT",
    combustivel: "FLEX",

    motorista: {
        matricula: 400006,
        nome: "Pedro Henrique de Assis Ferreira",
        inicioRetirada: "30/01/2021",
        devolucao: ""
    },

    contrato: {
        locadora: "ARVAL",
        valor: 1500, //mensal
        inicioContrato: "20/01/2021",
        fimContrato: "30/12/2022",
        seguro: "sim",
        kmInicial: 0
    },

    multa: [
        {
            numero: 147852,
            data: "01/01/2120",
            hora: "10:00",
            localidade: "Rua A, São Francisco, EUA",
            infracao: "Grave",
            codigoInfracao: "VL-100",
            descricao: "Velocidade acima da velocidade do ultra som de dobra.",
            pontos: "8",

            identificacaoMotorista: "",
            dataLimiteIdentificacao: "20/01/2120",
            status: "EM ABERTO - IDENTIFICAÇÃO MOTORISTA"
        }
    ]

},
{
    status: "ATIVO",
    modelo: "DOBLO",
    placa: "PZI7802",
    ano: "2020/2021",
    chassi:123456789,
    renavam: 321654,
    tipoVelculo: "Utilitário",
    cor: "Branca",
    fabricante: "FIAT",
    combustivel: "FLEX",

    motorista: {
        matricula: 0,
        nome: "",
        inicioRetirada: "",
        devolucao: ""
    },
    
    contrato: {
        locadora: "ARVAL",
        valor: 1500, //mensal
        inicioContrato: "20/01/2021",
        fimContrato: "30/12/2022",
        seguro: "sim",
        kmInicial: 0
    },

    multa: []
},
{
    status: "ATIVO",
    modelo: "DOBLO",
    placa: "ERS1278",
    ano: "2020/2021",
    chassi:123456789,
    renavam: 321654,
    tipoVelculo: "Utilitário",
    cor: "Branca",
    fabricante: "FIAT",
    combustivel: "FLEX",

    motorista: {
        matricula: 0,
        nome: "",
        inicioRetirada: "",
        devolucao: ""
    },

    contrato: {
        locadora: "ARVAL",
        valor: 1500, //mensal
        inicioContrato: "20/01/2021",
        fimContrato: "30/12/2022",
        seguro: "sim",
        kmInicial: 0
    },

    multa: []
},
]




export default listaVeiculo;
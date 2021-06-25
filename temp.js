const {Norteste,Noroeste,Sureste,Suroeste} = require('./Movs_Diagonal');
const {Norte,Sur,Este,Oeste} = require('./Movs_Rectas');

var tablero = [
    new Array(8), new Array(8), new Array(8), new Array(8),
    new Array(8), new Array(8), new Array(8), new Array(8)
];

var Accion = {
    MIN: 1,
    MAX: 0
}



function formar_matriz(estado){
    //Pasar de lineal a cuadratica
    let fila = 0, col = 0;
    for(let i in estado) {
        tablero[fila][col] = parseInt(estado[i]);

        col++;
        if(col%8 === 0){
            col = 0;
            fila++;
        }
    }
}

function calcMovimientos(turno){
    let movs = [];
    for(fila=0; fila<8; fila++){
        for(col=0; col<8; col++){
            let ficha = tablero[fila][col];

            if(ficha == turno){
                if(fila > 1) Norte(tablero,fila,col,ficha,movs);
                if(fila < 6) Sur(tablero,fila,col,ficha,movs);
                if(col < 6) Este(tablero,fila,col,ficha,movs);
                if(col > 1) Oeste(tablero,fila,col,ficha,movs);

                if(fila > 1 && col < 6) Norteste(tablero,fila,col,ficha,movs);
                if(fila > 1 && col > 1) Noroeste(tablero,fila,col,ficha,movs);
                if(fila < 6 && col < 6) Sureste(tablero,fila,col,ficha,movs);
                if(fila < 6 && col > 1) Suroeste(tablero,fila,col,ficha,movs);
                
            }
        }
    }
    
    return Minimax(movs);    
}

function Minimax(movs){
    const heuristica = [
        [120, -20, 20,  5,  5, 20, -20, 120],
        [-20, -40, -5, -5, -5, -5, -40, -20],
        [ 20,  -5, 15,  3,  3, 15,  -5,  20],
        [  5,  -5,  3,  3,  3,  3,  -5,   5],
        [  5,  -5,  3,  3,  3,  3,  -5,   5],
        [ 20,  -5, 15,  3,  3, 15,  -5,  20],
        [-20, -40, -5, -5, -5, -5, -40, -20],
        [120, -20, 20,  5,  5, 20, -20, 120]
    ];
    let index;
    let valor;

    for(let i in movs){
        if(index && valor){
            let temp = heuristica[parseInt(movs[i][0])][parseInt(movs[i][1])];
            if(temp > valor){
                valor = temp;
                index = i;                
            }
        }else{
            valor = heuristica[parseInt(movs[i][0])][parseInt(movs[i][1])]
            index = i;
        }
        
    }

    return movs[index];
}

exports.analizar = function analizar(turno, estado){
    formar_matriz(estado);
    return calcMovimientos(turno);
}

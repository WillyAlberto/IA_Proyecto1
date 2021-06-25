function Norteste(matriz, fila, col, ficha, movs){
    let pivote = matriz[--fila][++col];
    let bandera = false;
    
    while(pivote!='2'){
        bandera = true;
        col++;
        fila--;
        if(fila < 0 || col > 7 || pivote==ficha){
            bandera=false;
            break;
        }
        pivote = matriz[fila][col];
    }
    if(bandera) movs.push(fila+""+col);
}

function Noroeste(matriz, fila, col, ficha, movs){
    let pivote = matriz[--fila][--col];
    let bandera = false;
    
    while(pivote!='2'){
        bandera = true;
        col--;
        fila--;
        if(fila < 0 || col < 0 || pivote==ficha){
            bandera=false;
            break;
        }
        pivote = matriz[fila][col];
    }
    if(bandera) movs.push(fila+""+col);
}

function Sureste(matriz, fila, col, ficha, movs){
    let pivote = matriz[++fila][++col];
    let bandera = false;
    
    while(pivote!='2'){
        bandera = true;
        col++;
        fila++;
        if(fila > 7 || col > 7 || pivote==ficha){
            bandera=false;
            break;
        }
        pivote = matriz[fila][col];
    }
    if(bandera) movs.push(fila+""+col);
}

function Suroeste(matriz, fila, col, ficha, movs){
    let pivote = matriz[++fila][--col];
    let bandera = false;
    
    while(pivote!='2'){
        bandera = true;
        col--;
        fila++;
        if(fila > 7 || col < 0 || pivote==ficha){
            bandera=false;
            break;
        }
        pivote = matriz[fila][col];
    }
    if(bandera) movs.push(fila+""+col);
}

module.exports = {Norteste,Noroeste,Sureste,Suroeste}
function Norte(matriz, fila, col, ficha, movs){
    let pivote = matriz[--fila][col];
    let bandera = false;
    
    while(pivote!='2'){
        bandera = true;
        fila--;
        if(fila < 0 || pivote==ficha){
            bandera=false;
            break;
        }
        pivote = matriz[fila][col];
    }
    if(bandera) movs.push(fila+""+col);
}

function Sur(matriz, fila, col, ficha, movs){
    let pivote = matriz[++fila][col];
    let bandera = false;
    
    while(pivote!='2'){
        bandera = true;
        fila++;
        if(fila > 7 || pivote==ficha){
            bandera=false;
            break;
        }
        pivote = matriz[fila][col];
    }
    if(bandera){
        movs.push(fila+""+col);
        return [true,fila,col];
    }
    return [false,fila,col];
}

function Este(matriz, fila, col, ficha, movs){
    let pivote = matriz[fila][++col];
    let bandera = false;
    
    while(pivote!='2'){
        bandera = true;
        col++;
        if(col > 7 || pivote==ficha){
            bandera=false;
            break;
        }
        pivote = matriz[fila][col];
    }
    if(bandera) movs.push(fila+""+col);
}

function Oeste(matriz, fila, col, ficha, movs){
    let pivote = matriz[fila][--col];
    let bandera = false;
    
    while(pivote!='2'){
        bandera = true;
        col--;
        if(col < 0 || pivote==ficha){
            bandera=false;
            break;
        }
        pivote = matriz[fila][col];
    }
    if(bandera) movs.push(fila+""+col);
}

module.exports = {Norte,Sur,Este,Oeste}
function pares(){
    let numero = parseInt(document.getElementById("inputPares").value);
    let salida = "";
    if(!isNaN(numero) && numero >= 0){
        if(numero % 2 === 0 ){
            salida = "Es par";
        }else{
            salida = "Es impar";
        }
    }

    document.getElementById("salidaPares").innerHTML = salida;
}

function cuenta(){
    let numero = parseInt(document.getElementById("inputCuenta").value);
    let arreglo = new Array();
    let texto = "";
     
    try {

        while(numero >= 0){
            if(!isNaN(numero)){
                arreglo.push(numero);
                numero--;
            }
        }
    
        arreglo.forEach(function(elemento){
            texto += elemento + " , ";
        })
        document.getElementById("salidaCuenta").innerHTML = texto;

    } catch (error) {
        document.getElementById("salidaCuenta").innerHTML = error;
    }

   
}

function date(){
    let fecha = new Date().toDateString();
    document.getElementById("fecha").innerHTML = fecha;
}

function cuadrado(){
    let numero = parseInt(document.getElementById("inputCuadrado").value);
    let resultado = "";
    try {
        if(!isNaN(numero)){
            resultado = Math.pow(2, numero);
        }
        document.getElementById("salidaCuadrado").innerHTML = resultado;

    } catch (error) {
        document.getElementById("salidaCuadrado").innerHTML = error;
    }
}
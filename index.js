const operacion = document.getElementById("operacion");
const resultado = document.getElementById("resultado");
const onOff = document.getElementById("onOff");
const numeros = document.getElementsByClassName("numero");
const guion = document.getElementById("guion");
const valor = document.getElementById("numeros");
const longitudDisplay = 270;
let valorOperacion = "";
const operadores = ['+', '−', '×', '÷','√','^','%']

function encendidoApagado(){
    if(resultado.textContent.length > 0){
        resultado.innerHTML = "";
        guion.innerHTML = "";
        valor.innerHTML = "";
        valorOperacion = ""
    } else{
        valorOperacion = ""
        resultado.innerHTML = "0";
        guion.innerHTML = "_";
    }
}

function number(N){
    if(resultado.textContent.length > 0){
        let content = N;
        valor.innerHTML += content;
    } 
    valorOperacion += N;
    let calculo = "";
    calculo = valor
    let longitud = valor.offsetWidth
    if(longitud >= longitudDisplay){
        valor.textContent = "←" + calculo.textContent.substring(valor.textContent.length - 16);
        
    }
}

function operador(O){
    if(guion.textContent.length >= 1 && (!valor.textContent.includes("+") && !valor.textContent.includes("−") && !valor.textContent.includes("÷") && !valor.textContent.includes("×") && !valor.textContent.includes("√") && !valor.textContent.includes("^") && !valor.textContent.includes("%"))){
        valorOperacion += O
        valor.innerHTML += O
    }

    else if(resultado.textContent.length>0 && !resultado.textContent.includes("e")){
        
        valor.innerHTML = "Ans" + O 
        valorOperacion = resultado.textContent + O
        console.log(valorOperacion)
    }

    else if (resultado.textContent.length>0 && resultado.textContent.includes("e")){
        valor.innerHTML = "Ans" + O
        valorOperacion = parseFloat(resultado.textContent) + O
    }
}

function borrar(){
    if(valor.textContent.includes("←")){
        valorOperacion = valorOperacion.substring(0, valorOperacion.length - 1)
/*         let visibleNumbers = valorOperacion.substring()
 */        valor.textContent = "←" + valorOperacion.substring(valorOperacion.length - 16)
        longitud = valor.offsetWidth
        if(valorOperacion.length <= 17){
            valor.textContent = valorOperacion.substring(valorOperacion.length - 16)
        }
    } else {
        valorOperacion = valorOperacion.substring(0, valorOperacion.length - 1)
        valor.textContent = valorOperacion
    }
}

function AC(){
    valorOperacion = ""
    valor.textContent = ""
    resultado.textContent = "0"
}


function calculo(){
    for(i=0; i< operadores.length ;i++){
        let calculo = ""
        if(valorOperacion.includes(`${operadores[i]}`)){
            let operador = operadores[i];
            console.log(operador)
            let valores = valorOperacion.split(`${operadores[i]}`);
            console.log(valores)
            calculo = operador === "+" && (parseFloat(valores[0]) + parseFloat(valores[1])).toString().length > 12  ? `${Number.parseFloat((valores[0]) + parseFloat(valores[1])).toExponential(9)}` :
                      operador === "+" && (parseFloat(valores[0]) + parseFloat(valores[1])).toString().length < 12 ? `${parseFloat(valores[0]) + parseFloat(valores[1])}` : 
                      operador === "−" && (parseFloat(valores[0]) - parseFloat(valores[1])).toString().length > 12 ? `${Number.parseFloat((valores[0]) - parseFloat(valores[1])).toExponential(9)}` :
                      operador === "−" && (parseFloat(valores[0]) - parseFloat(valores[1])).toString().length < 12 ? `${parseFloat(valores[0]) - parseFloat(valores[1])}` :
                      operador === "÷" && (parseFloat(valores[0]) / parseFloat(valores[1])).toString(). length < 12 && valores[1] != 0 ?  `${parseFloat((valores[0]) / parseFloat(valores[1]))}` :
                      operador === "÷" && (parseFloat(valores[0]) / parseFloat(valores[1])).toString().length > 12 && valores[1] != 0 ? `${Number.parseFloat((valores[0]) / parseFloat(valores[1])).toExponential(9)}` :
                      operador === "÷" && (parseFloat(valores[0]) / parseFloat(valores[1])).toString(). length < 12 && parseFloat(valores[1]) === 0 ?  "Error" :
                      operador === "√"  &&  valores[0] === "" ?`${Math.sqrt(valores[1])}` :
                      operador === "√" && valores[0] != " " ? "Error" :
                      operador === "^" && (parseFloat(Math.pow(valores[0], valores[1]))).toString(). length < 12 ? `${parseFloat(Math.pow(valores[0], valores[1]))}` :
                      operador === "^" && (parseFloat(Math.pow(valores[0], valores[1]))).toString(). length > 12? `${Number.parseFloat(Math.pow(valores[0], valores[1])).toExponential(9)}` :
                      operador === "×" && (parseFloat(valores[0]) * parseFloat(valores[1])).toString().length > 12 ? `${Number.parseFloat((valores[0]) * parseFloat(valores[1])).toExponential(9)}` :
                      operador === "×" && (parseFloat(valores[0]) * parseFloat(valores[1])).toString().length < 12 ? `${parseFloat(valores[0]) * parseFloat(valores[1])}` :
                      operador === "%" && parseFloat(valores[0] + 0.01).toString().length > 12 ? `${Number.parseFloat(valores[0] * 0.01).toExponential(9)}` :
                      operador === "%" && parseFloat(valores[0] + 0.01).toString().length < 12 ? `${parseFloat(valores[0] * 0.01)}` : 

                      "";
            resultado.textContent = calculo 
            console.log((calculo))
        }
    }
}
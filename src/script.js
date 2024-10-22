///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ESCREVA SEU CÓDIGO AQUI!!

function Calculadora(n1,n2,operador){
  let numero1 = parseFloat(n1);
  let numero2 = parseFloat(n2);
  
  let soma = 0 ;
  if(operador === "+"){
    soma = numero1 + numero2;
  }
  if(operador === "-"){
    soma = n1 - n2;
  }
  if(operador === "*"){
    soma = n1 * n2;
  }
  if(operador === "/"){
    soma = n1 / n2;
  }
  if(operador === "e"){
    let contador = 1;
    soma = n1;
    while(contador < n2){
      
      soma = soma * n1;
      console.log(parseFloat(soma))
      contador++;
    }
    if(soma > 1000000 || soma === undefined){
      soma = "ERROR";
    }
  }
  return soma
  
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0-9]/)
  let operadores = visor.value.split(/[0-9]/)
  let operador
  operadores.forEach(x => {
    if (x != "")
      operador = x
  });

  visor.value = Calculadora(numeros[0], numeros[1], operador)
}
console.log("Olá mundo!");

 
let a  = Number(prompt("Calculadora: Digite o valor o primeiro valor para calcular"));
let b = Number(prompt("Calculadora: Digite o valor o segundo valor para calcular"));




Number(document.write(soma(a,b))+"\n");
document.write(multiplicacao(a,b))+"\n";
document.write(subtracao(a,b))+"\n";
document.write(divisao(a,b));

console.log("Soma:"+soma(a,b))
console.log
function soma (a,b){
    return "o resultado da multiplicacao é: "+a+b
}

function subtracao(a,b) {
    return "o resultado da soma é: "+a-b
}

function divisao(a,b) {
    return "o resultado da divisao é: "+a/b
}

function multiplicacao(a,b) {
    return "o resultado da subtracao é: "+a*b
}


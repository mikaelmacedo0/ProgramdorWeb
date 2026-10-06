function soma() {
   //const resultadoSoma = document.getElementById("resultadoSoma");
    const somaN1 = parseFloat(document.getElementById("numero1").value);
    const somaN2 = parseFloat(document.getElementById("numero2").value);
     document.getElementById("resultadoSoma").value = somaN1 + somaN2;
    //resultadoSoma.value = somaN1 + somaN2;
    //return somaN1 + somaN2;
}

function subtracao() {
    const resultadoSubtracao = document.getElementById("resultadoSubtracao");
    const subtracaoN1 = parseFloat(document.getElementById("numero3").value);
    const subtracaoN2 = parseFloat(document.getElementById("numero4").value);
    resultadoSubtracao.value = subtracaoN1 - subtracaoN2;
}

function multiplicacao() {
    const resultadoMultiplicacao = document.getElementById("resultadoMultiplicacao");
    const multiplicacaoN1 = parseFloat(document.getElementById("numero5").value);
    const multiplicacaoN2 = parseFloat(document.getElementById("numero6").value);
    resultadoMultiplicacao.value = multiplicacaoN1 * multiplicacaoN2;
    return multiplicacaoN1.value * multiplicacaoN2.value;
}

function divisao() {
    const resultadoDivisao = document.getElementById("resultadoDivisao");
    const divisaoN1 = parseFloat(document.getElementById("numero7").value);
    const divisaoN2 = parseFloat(document.getElementById("numero8").value);
    resultadoDivisao.value = divisaoN1 / divisaoN2;
    return divisaoN1.value / divisaoN2.value;
}

function restoDaDivisao() {
    const resultadoRestoDaDivisao = document.getElementById("resultadoRestoDaDivisao");
    const restoDaDivisaoN1 = parseFloat(document.getElementById("numero9").value);
    const restoDaDivisaoN2 = parseFloat(document.getElementById("numero10").value);
    resultadoRestoDaDivisao.value = restoDaDivisaoN1 % restoDaDivisaoN2;
    return restoDaDivisaoN1.value % restoDaDivisaoN2.value;
}








// function soma() {
//     const somaN1 = parseFloat(document.getElementById("numero1").value);
//     const somaN2 = parseFloat(document.getElementById("numero2").value);
//     document.getElementById("resultadoSoma").value = somaN1 + somaN2;
// }

// function subtracao() {
//     const subtracaoN1 = parseFloat(document.getElementById("numero3").value) || 0;
//     const subtracaoN2 = parseFloat(document.getElementById("numero4").value) || 0;
//     document.getElementById("resultadoSubtracao").value = subtracaoN1 - subtracaoN2;
// }

// function multiplicacao() {
//     const multiplicacaoN1 = parseFloat(document.getElementById("numero5").value) || 0;
//     const multiplicacaoN2 = parseFloat(document.getElementById("numero6").value) || 0;
//     document.getElementById("resultadoMultiplicacao").value = multiplicacaoN1 * multiplicacaoN2;
// }

// function divisao() {
//     const divisaoN1 = parseFloat(document.getElementById("numero7").value) || 0;
//     const divisaoN2 = parseFloat(document.getElementById("numero8").value) || 0;
    
//     if (divisaoN2 === 0) {
//         document.getElementById("resultadoDivisao").value = "Erro (divisão por 0)";
//         return;
//     }
    
//     document.getElementById("resultadoDivisao").value = divisaoN1 / divisaoN2;
// }

// function restoDaDivisao() {
//     const restoN1 = parseFloat(document.getElementById("numero9").value) || 0;
//     const restoN2 = parseFloat(document.getElementById("numero10").value) || 0;
//     document.getElementById("resultadoRestoDaDivisao").value = restoN1 % restoN2;
// }
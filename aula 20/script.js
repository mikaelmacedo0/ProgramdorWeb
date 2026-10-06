function verificar() {
    let numero = parseInt(document.getElementById("testeNum").value);
    let resultado = document.querySelector('#resultado');
    if (numero > 0) {
        resultado.innerHTML = "Positivo";
         resultado.style.color = 'green'
    } else if (numero < 0) {
        resultado.innerHTML = "Negativo";
         resultado.style.color = 'red'
    } else if (numero === 0) {
        resultado.innerHTML = "Neutro";
         resultado.style.color = 'brown'
    } else {
        resultado.innerHTML = "Vazio";
        resultado.style.color = 'brown'
    }

}
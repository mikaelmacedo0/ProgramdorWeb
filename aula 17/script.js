
function verificarIdade() {

    let idade = document.getElementById('idade').value;
    let res = document.getElementById('resultado');

    if (idade === "") {
        res.innerHTML = ('O campo está vazio');
    } else {
        if (idade < 18) {
            res.innerHTML = ('Você é menor de Idade &#127881;');
            res.style.color = 'red';

        } else {
            res.innerHTML = ('Você é maior de Idade &#128512;');
            res.style.color = 'blue';

        }
    }
}


function calcMedia() {
    let res = document.getElementById('mediaResultado');
    let nota1 = Number(document.getElementById('nota1').value);
    let nota2 = Number(document.getElementById('nota2').value);
    let nota3 = Number(document.getElementById('nota3').value);
    let nota4 = Number(document.getElementById('nota4').value);

    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    if (media >= 7) {
        res.textContent= ("O aluno com média: " + media + " está aprovado");
    } else {
        res.innerHTML= ("O aluno com média: " + media + " está reprovado");
    }

}

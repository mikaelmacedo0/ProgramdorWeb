const caixaTexto = document.querySelector('#campoNome');
const botaoDia = document.querySelector('#btnDia');
const botaoNoite = document.querySelector('#btnNoite');
const areaResultado = document.querySelector('#painelResultado');

botaoDia.addEventListener('click', function(){
    let nomeUsuario = caixaTexto.value;
    areaResultado.textContent = `Bom dia ${nomeUsuario}!`;
})

botaoNoite.addEventListener('click', function(){
    let nomeUsuario = caixaTexto.value;
    areaResultado.textContent = `Boa noite ${nomeUsuario}!`;
})
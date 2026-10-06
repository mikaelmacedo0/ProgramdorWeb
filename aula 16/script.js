const caixaTexto = document.querySelector('#campoNome');
const botaoDia = document.querySelector('#btnDia');
const botaoNoite = document.querySelector('#btnNoite');
const areaResultado = document.querySelector('#painelResultado');
const elemento = document.querySelector('#el');
const corpo = document.querySelector('#corpo');
const botaoTema = document.querySelector('#btnTema')

botaoDia.addEventListener('click', function(){
        let nomeUsuario = caixaTexto.value; // Pega o texto do input
        areaResultado.innerHTML = `<h1> Bom dia ${nomeUsuario}!</h1>`;
        areaResultado.style.backgroundColor = '#F6F1EA';
        botaoDia.classList.add('botao-clicado');
        botaoNoite.classList.remove('botao-clicado')

        
});

botaoNoite.addEventListener('click', function(){
        let nomeUsuario = caixaTexto.value; // Pega o texto do input
        areaResultado.innerHTML = `<h1>Boa noite ${nomeUsuario}!</h1>`;
        areaResultado.style.backgroundColor = '#8F8683';
        botaoNoite.classList.add('botao-clicado');
        botaoDia.classList.remove('botao-clicado')
        
});

botaoTema.addEventListener('click', function(){
        corpo.classList.toggle('modo-escuro');
})


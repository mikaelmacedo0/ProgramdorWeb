function adicionarItem() {
    const listaItem = document.getElementById('exibirLista');
    const input = document.getElementById('listaItem');
    const valorItem = input.value;

    if (valorItem.trim() === ""){
        alert("Digite um item");
        return
    } 

    const novoItem = document.createElement('li');
    novoItem.textContent = valorItem;
    listaItem.append(novoItem);
    input.value='';

}


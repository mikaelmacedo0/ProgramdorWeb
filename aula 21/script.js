

function rodarLoopFor(){
    let resultadoFor = document.querySelector('#resultado1');
    resultadoFor.innerHTML = "";
    
    for(let dias=5; dias>=1; dias--){
        const item = document.createElement('li')
        item.innerText = `Faltam ${dias} dias para a viagem! ✈️`;
        resultadoFor.appendChild(item);
        //resultadoFor.appendChild(<p> <li><ul>Faltam ${i} dias para a viagem</ul></li></p> 
 
    }
    const itemFinal = document.createElement('li')
    itemFinal.innerHTML = `<strong>Chegou o dia! Decolando! ✈️</strong>`
    resultadoFor.appendChild(itemFinal)
}

function rodarLoopWhile(){
    let resultadoWhile = document.querySelector('#resultado2');
    resultadoWhile.innerHTML = "";
    
    let peso = 1;
    while(peso <= 23){
        const item = document.createElement('li')
        item.innerText = `A mala tem ${peso} kg para a viagem! ✈️`;
        resultadoWhile.appendChild(item);
        peso += 3;
    }

    const pesoFinal = document.createElement('li')
    pesoFinal.innerHTML = `<strong>O limite de peso é ${peso-2} kg! ✈️</strong>`
    resultadoWhile.appendChild(pesoFinal)
}

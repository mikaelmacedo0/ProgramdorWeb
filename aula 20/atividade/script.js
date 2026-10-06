function verificarTemperatura() {
    const valor = parseFloat(document.querySelector("#temp").value);
    let resultado = document.querySelector("#resultado");
    const imagem = document.createElement('img');
    resultado.innerHTML= ""

    if (valor >= 34) {
        imagem.src = 'https://static.wixstatic.com/media/6bdaa3_447509d412a84a208ee960f480c3042d~mv2.jpeg/v1/fill/w_385,h_517,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/6bdaa3_447509d412a84a208ee960f480c3042d~mv2.jpeg';
        resultado.appendChild(imagem)

    } else if (valor >= 24) {
        imagem.src = 'https://blog.democrata.com.br/wp-content/uploads/2025/11/tres-homens-camisetas-estilos.jpg';
        resultado.appendChild(imagem)

    } else if (valor >= 14) {
        imagem.src = 'https://www.magnific.com/br/fotos-premium/sorriso-de-moda-e-retrato-de-pessoas-no-estudio-para-conexao-de-roupas-a-moda-e-roupas-casuais-grupo-feliz-e-amigos-com-confianca-para-satisfacao-de-estilo-e-orgulho-em-fundo-branco_393543855.htm#fromView=keyword&page=1&position=35&uuid=245de978-b961-47c6-996e-ea583ece8c17&track=ais_hybrid&query=Pessoas+vestindo+roupas';
        resultado.appendChild(imagem)

    } else {
        imagem.src = 'https://static.wixstatic.com/media/6bdaa3_235973272822487f807888a333ee0cea~mv2.jpeg/v1/fill/w_385,h_473,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/6bdaa3_235973272822487f807888a333ee0cea~mv2.jpeg';
        resultado.appendChild(imagem);
    }
}

const imagem = document.createElement('img');
let resultado = document.querySelector("#resultado");
imagem.src = 'https://mulherinteressante.net/wp-content/uploads/2019/04/qual-das-4-estacoes-do-ano-mais-combina-com-voce-escolha-uma-e-digo-como-e-a-sua-personalidade.jpg';
resultado.appendChild(imagem);

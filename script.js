const items = [
    {
        id: 0,
        nome: 'TOP',
        img: 'imagens/toppreto.jpg',
        quantidade: 0
    },

    {
        id: 1,
        nome: 'LEGGING',
        img: 'imagens/calca.jpg',
        quantidade: 0
    },

    {
        id: 2,
        nome: 'CONJUNTO',
        img: 'imagens/conjunto.jpg',
        quantidade: 0
    },

    {
        id: 3,
        nome: 'SHORT HIT',
        img: 'imagens/short.jpg',
        quantidade: 0
    },

    {
        id: 4,
        nome: 'REGATA',
        img: 'imagens/regata.jpg',
        quantidade: 0
    },

    {
        id: 5,
        nome: 'MACACÃO',
        img: 'imagens/macacao.jpg',
        quantidade: 0
    },

    {
        id: 6,
        nome: 'SHORT-SAIA',
        img: 'imagens/shortsaia.jpg',
        quantidade: 0
    },

    {
        id: 7,
        nome: 'BODY',
        img: 'imagens/body.jpg',
        quantidade: 0
    },

    {
        id: 8,
        nome: 'CROPPED',
        img: 'imagens/cropped.jpg',
        quantidade: 0
    },

    {
        id: 9,
        nome: 'CASACO',
        img: 'imagens/casaco.jpg',
        quantidade: 0
    },

    {
        id: 10,
        nome: 'VESTIDO',
        img: 'imagens/vestido.jpg',
        quantidade: 0
    },
    {
        id: 11,
        nome: 'CROPPED OMBRO',
        img: 'imagens/croppedmu.jpg',
        quantidade: 0
    },
]


inicializarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    items.map((val) => {
        containerProdutos.innerHTML += `
            
            <div class="produto-single">
                <img src="`+ val.img + `" />
                <p>`+ val.nome + `</p>
                <a data-key="`+ val.id + `" href="#">Adiconar ao carrinho<a/>
            
             </div>

             `;
    });

}

inicializarLoja(); // Chama a função para inicializar a loja


// atualizarCarrinho = () => {
//     var containerCarrinho = document.getElementById('carrinho');
//     containerCarrinho.innerHTML = "";
//     items.map((val) => {
//         if (val.quantidade > 0) {
//             containerCarrinho.innerHTML += `
//             <div class="info-single-checkout"> 
//             <p style="float:left;">Produto: `+ val.nome + `</p>
//             <p style="float:right;">Quantidade: `+ val.quantidade + `</p>
//             <div style="clear:both"></div>
            
//             </div>

//              `;
//         }
//     })

// }

// var links = document.getElementsByTagName('a');

// for (var i = 0; i < links.length; i++) {
//     links[i].addEventListener("click", function () {
//         let key = this.getAttribute('key');
//         items[key].quantidade++;
//         atualizarCarrinho();
//         return false;

//     })
// }
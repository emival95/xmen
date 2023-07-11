/* 

O que precisamos fazer ? - quando passar o mouse em cima do personagem na lista temos que adicionar a borda azul de de seleçã
dna imagem pequena e mostrar aimagem, o nomw w o texto do personagem que está selecionado.

    Objetivo 1- Quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
        passo 1 - pegar os personagens no JS para poder verificar quando o usuário
        passar o mouse em cima deles


        passo 2 - adicionar a classe selecionado no personagem que o usuario passar o cursor do mouse


        passo 3 - verificaf se ja existia um personagem selecionado, se sim, devemos remover a seleeção dele
        
    Objetivo 2 - Quando passar o mouse em cima do persnonagem na listagem, trocar a imagem, o nome e a descroição do personagem grande
        passo 1 - pegar o elemento do personagem grande paa a dicionar informações nele


        passo 2 - alterar a imagem do personagem grande 


        passo 3 - alterar o nome do personagem grande 
        
        passo 4 - alterar a descrição do personagem grande     
*/

// Objetivo 1- Quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
//         passo 1 - pegar os personagens no JS para poder verificar quando o usuário passar o mouse em cima deles

const personagens = document.querySelectorAll('.personagem');


// passo 2 - adicionar a classe selecionado no personagem que o usuario passar o cursor do mouse

personagens.forEach( (personagem)  => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth <450){
            window.scrollTo({top: 0, behavior: 'smooth' })
        }
        //   passo 3 - verificaf se ja existia um personagem selecionado, se sim, devemos remover a seleeção dele

        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado')
        
      personagem.classList.add('selecionado');

    //   Objetivo 2 - Quando passar o mouse em cima do persnonagem na listagem, trocar a imagem, o nome e a descroição do personagem grande
    //   passo 1 - pegar o elemento do personagem grande paa a dicionar informações nele  

    const imagemPersonagemGrande = document.querySelector('.personagem-grande'); 

    // passo 2 - alterar a imagem do personagem grande 
    const idPersonagem = personagem.attributes.id.value;

        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

        // passo 3 - alterar o nome do personagem grande

        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        // passo 4 - alterar a descrição do personagem grande  

        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    } )
} )



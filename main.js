$(document).ready(function() {
    console.log("Ta pronto");
    
    $('header button').click(function() {
        $('form').slideDown();
    });

    $('#cancelar').click(function() {
        $('form').slideUp();
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        const endereçoNovaImagem = $('#endereço-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${endereçoNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="imagemlink">
            <a href="${endereçoNovaImagem}" title="Ver imagem no tamanho real" target="_blank" >
                Ver imagem no tamanho real 
            </a>
        </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(500);
        $('#endereço-imagem-nova').val('')
    });
});


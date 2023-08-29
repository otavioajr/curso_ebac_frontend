$(document).ready(function () {
    

    $('button').click(function (e) {
        e.preventDefault();

        const adicionaTarefa = $('#adiciona-tarefa').val();
        const novaTarefa = $('<li></li>');

        $(adicionaTarefa).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul').text(adicionaTarefa)
        
        $('#adiciona-tarefa').val('');

    });

    $('ul').on('click', 'li', function () {
        $(this).css('text-decoration', 'line-through');
    });

});
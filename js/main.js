$(function(){


    $("button").click(function(){
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(data){

                var container = $('<div id="dane-programisty"></div>')
                container.append('<h1>'+data.imie+'</h1>')
                container.append('<h1>'+data.nazwisko+'</h1>')
                container.append('<h1>'+data.zawod+'</h1>')
                container.append('<h1>'+data.firma+'</h1>')

                $('.programmer-data').append(container);
                
             });

    })          
});
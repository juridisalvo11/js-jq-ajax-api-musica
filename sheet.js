$(document).ready(function(){

    //
    $.ajax ({
        url : 'https://flynn.boolean.careers/exercises/api/array/music',
        method : 'GET',
        success: function(data) {
            var cd = data.response;
            console.log(cd);
            var source = $('#cd-template').html();
            var template = Handlebars.compile(source);
            //console.log(source);

            //console.log(primo_artista);
            for (var i = 0; i < cd.length; i++) {
                var album_corrente = cd[i];
                //console.log(singolo_album);

                     var card_cd = {
                        copertina: album_corrente.poster,
                        artista: album_corrente.author,
                        genere : album_corrente.genre,
                        titolo : album_corrente.title,
                        anno : album_corrente.year,

                     }

                     var html_finale = template(card_cd);
                     $('.cds-container').append(html_finale)
            }

            // $('#selected-genre').change(function(){
            //
            // })

        },
        error : function() {
            alert('error');
        },
    })
})

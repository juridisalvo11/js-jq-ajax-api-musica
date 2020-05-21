$(document).ready(function(){

    //Invio una richiesta ajax per recuperare gli album
    $.ajax ({
        url : 'https://flynn.boolean.careers/exercises/api/array/music',
        method : 'GET',
        success: function(data) {
            //Recupero il calore delle chiavi degli album e le inserisco in una variabile
            var cd = data.response;
            console.log(cd);
            //Utilizzo Handlebars per compilare il template
            var source = $('#cd-template').html();
            var template = Handlebars.compile(source);
            //console.log(source);

            //console.log(primo_artista);
            //Vado a ciclare le singole chiavi degli album per recuperarne i singoli valori
            for (var i = 0; i < cd.length; i++) {
                //Vado a recuperare l'album corrente inserendolo in una variaboìile
                var album_corrente = cd[i];
                //console.log(album_corrente);
                    //Creo un oggetto per impostare i dati di ogni singolo album nelle chiavi corrispondenti
                     var card_cd = {
                        copertina: album_corrente.poster,
                        artista: album_corrente.author,
                        genere : album_corrente.genre.toLowerCase(),
                        titolo : album_corrente.title,
                        anno : album_corrente.year,

                     }
                     //Inserisco il template completo in pagina
                     var html_finale = template(card_cd);
                     $('.cds-container').append(html_finale)

            }

            //Imposto un dropdown select per scegliere singolarmente il genere
            $('#selected-genre').change(function(){
                //Vado a leggere il valore per l'elemento corrente
                var singolo_genere = $(this).val()
                //Nascondo tutti gli album
                $('.cd').hide()

                if(singolo_genere == 'lista-generi'){
                //Se il value corrisponde a lista generi mostro tutti gli album
                    $('.cd').show();
                } else {
                //Atrimenti vado ad inserire e selezionare il genere corrispondente
                    $('.cd[data-generi="' + singolo_genere + '"]').show();
                }
            });
        },
        error : function() {
            alert('error');
        },
    })

})

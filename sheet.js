$(document).ready(function(){
    //
    $.ajax ({
        url : 'https://flynn.boolean.careers/exercises/api/array/music',
        method : 'GET',
        success: function(data) {
            var cd = data.response;
            //console.log(cd);

            var primo_artista = cd[0].author;
            //console.log(primo_artista);
            for (var i = 0; i < cd.length; i++) {
                var singolo_artista = cd[i].author;
                //console.log(singolo_album);
                if () {
                    var source = $('#cd-template').html();
                    var template = Handlebars.compile(source);

                    //console.log(source);

                     var card_cd = {
                         artista: singolo_artista,
                    //     // poster : ,
                    //     // album : ,
                    //     // genre : ,
                    //     // year : ,
                    //
                     }

                     var html_finale = template(card_cd);
                     $('.cds-container').append(html_finale)
                }
            }
        },
        error : function() {
            alert('error');
        },
    })
})

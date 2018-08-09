$(function() {
  /* FOUNDATION */
  $(document).foundation();

  /* Funciones */
  getRecursos();

});

function load() {
  $("body").addClass("animated fadeIn");
}

function getRecursos() {
  $.ajax({
    type: "POST",
    url: "server/getRecursos.php",
    dataType: "json",
    success: function(response) {
      response.forEach((element, index) => {
        var htmlString = "";
        var myElement = response[index];
        console.log(myElement.id_recurso);
        $('#'+ myElement.id_recurso +'').append(
          '<a id="a-download" href="' + response[index].concat + '" download>' +
            '<div class="card">' + 
              '<i class="'+ response[index].icon +'"></i>' + 
              '<div class="card-section">' + 
                '<p class="p-card">'+ response[index].nombre_archivo +'</p>' +
              '</div>' +
            '</div>' + 
          '</a>'
        );
      });

      for(var i=1; i<8; i++){
        htmlString = $('#'+ i +'').text();
        if(htmlString.trim() == ""){
          $('#'+ i +'').html(
            '<p class="p-card">No se han cargado archivos en el modúlo</p>'
          );
        }
      }
    }
  });
}

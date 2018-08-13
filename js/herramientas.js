$(function() {
  $(document).foundation();
  getCompetencias();
  getZonas();
});

function load() {
  $("body").addClass("animated fadeIn");
}

$('#competencia').change(function(){
  var competencia = $('#competencia').val();
  getTemas(competencia);
});

function getCompetencias(){
  $('#competencia').html('<option value="0" >Seleccione</option>');
  $.ajax({
    type: "POST",
    url: "server/getCompetencias.php",
    data: "",
    dataType: "json",
    success: function(response){
      response.forEach(element => {
        var comp = element.competencia;
        var first = comp.charAt();
        $('#competencia').append(
          `<option value="${element.id_competencia}"> ${first} - ${element.competencia} </option>`
        );
      });
    }
  }); 
}

function getZonas(){
  $('#zona').html('<option value="0" >Seleccione</option>');
  $.ajax({
    type: "POST",
    url: "server/getZonas.php",
    data: "",
    dataType: "json",
    success: function(response){
      response.forEach(element => {
        $('#zona').append(
          `<option value="${element.id_zona}"> Z${element.id_zona} - ${element.zonas} </option>`
        );
      });
    }
  });
}

function getTemas(competencia){
  $('#tema').html('<option value="0" >Seleccione</option>');
  $.ajax({
    type: "POST",
    url: "server/getTemas.php",
    data: {
      competencia : competencia
    },
    dataType: "json",
    success: function(response){
      response.forEach(element => {
        $('#tema').append(
          `<option value="${element.id_temas}"> ${element.id_temas} - ${element.temas} </option>`
        );
      });
    }
  });
}
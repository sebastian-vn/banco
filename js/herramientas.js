$(function() {
  $(document).foundation();
  getCompetencias();
  getZonas();
});

function load() {
  $("body").addClass("animated fadeIn");
}

$('#competencia').change(function(){
  var value = $('#competencia').val();
  getTemas(value);
});

function getCompetencias(){
  $.ajax({
    type: "POST",
    url: "server/getCompetencias.php",
    data: "",
    dataType: "json",
    success: function(response){
      response.forEach(element => {
        $('#competencia').append(
          `<option value="${element.id_competencia}"> ${element.competencia} </option>`
        );
      });
    }
  }); 
}

function getZonas(){
  $.ajax({
    type: "POST",
    url: "server/getZonas.php",
    data: "",
    dataType: "json",
    success: function(response){
      response.forEach(element => {
        $('#zona').append(
          `<option value="${element.id_zonas}"> ${element.zonas} </option>`
        );
      });
    }
  });
}

function getTemas(competencia){
  $.ajax({
    type: "POST",
    url: "server/getZonas.php",
    data: "",
    dataType: "json",
    success: function(response){
      response.forEach(element => {
        $('#zona').append(
          `<option value="${element.id_zonas}"> ${element.zonas} </option>`
        );
      });
    }
  });
}
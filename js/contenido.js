$(function() {
  $(document).foundation();

  /* HOVERS */
  /*   $("#download_test").hover(function() {
    $(this).children().children().hover(download_icon);
  }); */

});

function load() {
  $("body").addClass("animated fadeIn");
}

function getRecursos(id_recurso) {
  $.ajax({
    type: "POST",
    url: "server/getRecursos.php",
    data: {
      id_recurso: id_recurso
    },
    dataType: "json",
    success: function(response) {
      response.forEach((element, index) => {
        console.log(response[index].concat);
        $('#videos').html(
          '<div id="download_test">'+
            '<a id="a-download" href="' + response[index].concat + '" download>' +
              '<i class="fi-video"></i>' +
            '</a>' +
          '</div>'
        );
      });
    }
  });
}

/* function download_icon() {
  var myclass = $(this).attr("class");
  console.log(myclass);
  if($(this).hasClass("fi-video")){
    $(this).removeClass("fi-video");
    $(this).addClass("fi-download");
  }else{

    $(this).removeClass("fi-download");
    $(this).addClass("fi-video");
  }
}
 */

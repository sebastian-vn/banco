$(function() {
  $(document).foundation();
  setMainHeight();
  getNavs();
  $("#side").css("display", "none");
});

function setMainHeight() {
  $("#img-fondo").css("width", "100%");
  $("#img-fondo").css("height", screen.height / 2);
}

function getNavs() {
  $(".navegacion").addClass("animated jackInTheBox");
}

//Cambio de las imgs de las bombillas cuando hay un hover
function cambioImg() {
  var $this = $(this).children("img");
  var newSource = $this.data("alt-src");
  $this.data("alt-src", $this.attr("src"));
  $this.attr("src", newSource);
}

$(".sub-navegacion").hover(cambioImg, cambioImg);

$(".sub-navegacion").click(function() {
  $("#main").addClass("animated slideOutLeft");
  setTimeout(function() {
    $("#main").css("display", "none");
  }, 1000);
});

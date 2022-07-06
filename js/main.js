updateOutput();

$(".toggle-button").hover(function (){
  $(this).addClass("highlightedButton");
}, function(){
  $(this).removeClass("highlightedButton");
});

$(".toggle-button").click(function (){
  $(this).toggleClass("active");
  $(this).removeClass("highlightedButton");

  let areaID = $(this).attr("id") + "-text-area";
  $("#" + areaID).toggleClass("hidden");

  let areasDisplayed = 4 - $(".hidden").length;
  $(".panel").width(($(window).width()/areasDisplayed) - 10);

});

$("#nav-bar").width($(window).width() - 32);
$(".panel").height($(window).height() - $("#nav-bar").height() - 50)
$(".panel").width(($(window).width()/2) - 10);

function updateOutput() {
  $("iframe").contents().find("html")
    .html("<html><head><style type='text/css'>" + $("#css-text-area").val()+ "</style></head><body>" + $("#html-text-area").val() + "</body></html>");

  let outputArea = document.getElementById("output-text-area");
  outputArea.contentWindow.eval($("#js-text-area").val());
}

$("#html-text-area").on('change keyup paste', function() {
  updateOutput();
});
$("#css-text-area").on('change keyup paste', function() {
  updateOutput();
});$("#js-text-area").on('change keyup paste', function() {
  updateOutput();
});



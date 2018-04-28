$(function(){

var defaultOpacity = $("#mywords-double").css("opacity");

$("#btn-speak").click(function(){
    var timer = 10;
    var w = $("#mywords").val();
	  var opacity = defaultOpacity;
	  if(!w) { 
       $("#mywords").attr("placeholder","說點什麼再送出吧...")
			 return false
	  }
    $("#mywords").val("");
    $("#mywords-double").text(w);
    $(".speaking").hide("fast");
    $(".vanishing").show("slow");

    var counterId = setInterval(function(){
      timer--;
      if(timer <= 0){
        $(".vanishing").hide("fast");
        $(".iknowthat").show("slow");
	      opacity = defaultOpacity;
        $("#mywords").attr("placeholder","我想說的是......")
        clearInterval(counterId);
      } else {
        opacity = opacity - 0.05;
        $("#counter span").text(timer);
        $("#mywords-double").css("opacity",opacity);
      }
    },1000);
});

$("#btn-speak-again").click(function(){
    $(".iknowthat").hide("fast");
    $(".speaking").show("slow");
    $("#mywords-double").css("opacity",defaultOpacity);
});

});

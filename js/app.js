$(function(){

$("#btn-speak").click(function(){
    var timer = 10;
    var w = $("#mywords").val();
    $("#mywords").val("");
    $("#mywords-double").text(w);
    $(".speaking").hide("slow");
    $(".vanishing").show();

    var counterId = setInterval(function(){
      timer--;
      if(timer <= 0){
        $(".vanishing").hide();
        $(".iknowthat").show();
        clearInterval(counterId);
      } else {
        $("#counter span").text(timer);
      }
    },1000);
});

$("#btn-speak-again").click(function(){
    $(".iknowthat").hide();
    $(".speaking").show();
});

});

$(document).ready(function(){


    $("#send").click(function(){
      var a=$(".input").val();
      $(".text").append('<div class="row" id="msg"><div class=" chip col s4 send" >'+a+ '</div></div>');
      setTimeout(function(){
      $(".text").append('<div class="row" id="msg"><div class=" chip col s4 send" style="margin-left:60%" >'+"Hello User"+ '</div></div>');
    },1000)
    })

});

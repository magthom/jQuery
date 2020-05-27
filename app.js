$(document).ready(function() {
    //$('#btnSubmit').click(function(e){
    //   alert('dgfhghfgh');
   // });

    $("form").submit(function(e){
        e.preventDefault();
        //($("input[name='name']").val());

    $("div").append($(`<h2>${$("input[name='name']").val()}</h2>`));
    $("h2").mouseover(function () {
           $(this).css("background-color", "blue")
         //"background-color": 'blue'
         //"border-radius": (Math.random() * 50) + "px"
           });
        
    

     



    


  //$("input[name='name']").on("keyup", function (){
       //if ($("input[name='name']").val() === "") {
         //  $('#btnSubmit').attr("disabled", true);    
       // } else {
         //  $('#btnSubmit').attr("disabled", false);
       // }
    //})
    $("body").append($("<form></form>"));
    $("body").append($("<div></div>"));


});
});


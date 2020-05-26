$(document).ready(function() {
    $('#btnSubmit').click(function(e){
    //   alert('dgfhghfgh');
   // });

    $('form').submit(function(e){
        e.preventDefault();
        alert($("input[name='name']").val());

       $("div").append($(`<h2>${$("input[name='name']").val()}</h2>`));
      $("h2").mouseover(function (e){
           $(e.target).css({
             "background-color": random_bg_color(),
              "border-radius": (Math.random() * 50) + "px"
        })
     });



    });
});
});
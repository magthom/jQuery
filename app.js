$(document).ready(function () {
    //$('#btnSubmit').click(function(e){
    //   alert('dgfhghfgh');
    // });

    $("form").submit(function (e) {
        e.preventDefault();
        //($("input[name='name']").val());

        //    $("div").append($(`<h2>${$("input[name='name']").val()}</h2>`));
        //    $("h2").mouseover(function () {
        //        $(this).css({
        //            "background-color" : random_bg_color(), 
        //            "border-radius" : (Math.random() * 50) + "px" 
        //        });
        //    });
        $("ul").append($(`<li>${$("input[name='name']").val()}</li>`));
        $("li").click(function (e){
            $(e.target).css("background-color", random_bg_color());
        });
        $("li").dblclick(function (e){
            $(e.target).remove();
        });
    });
    

    $("input[name='name']").on("keyup", function () {
        if ($("input[name='name']").val() === "") {
            $('#btnSubmit').attr("disabled", true);
        } else {
            $('#btnSubmit').attr("disabled", false);
        }
    });

    $("body").append($("<div></div>"));
    $("body").append($("<ul></ul>"));
});

    function random_bg_color() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        return bgColor
    }

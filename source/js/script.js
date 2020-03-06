$(document).ready(function(){
    $(".button--menu").click(function(){
        $(".menu").toggleClass("opened");
    });
    $(".button--payment").each(function(){
        $(this).click(function(){
            $(".popup").addClass("opened");
            var top = $(this).offset().top;
            var width = $(".popup__content").outerWidth();
            var widthButton = $(this).outerWidth()
            var left = $(this).offset().left - width + widthButton;
            $(".popup__content").offset({top:top, left:left});
        })
    })
    $(".button--close").click(function(){
            $(".popup").removeClass("opened");
        })
})
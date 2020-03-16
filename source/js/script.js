$(document).ready(function () {
    $(".menu__toggle").click(function () {
        $(".menu").toggleClass("opened");
        $("body").toggleClass("scroll-disabled");
    });
    $(".button--payment").each(function () {
        $(this).click(function () {
            $(".popup").addClass("opened");
            var top = $(this).offset().top;
            var width = $(".popup__content").outerWidth();
            var widthButton = $(this).outerWidth();
            var left = $(this).offset().left - width + widthButton;
            var difference = top + $(".popup__content").outerHeight() + $("footer").outerHeight() - window.innerHeight;
            if (difference > 0) {
                top = top - difference;
            }
            $(".popup__content").offset({ top: top, left: left });
        })
    })
    $(".button--close").click(function () {
        $(".popup").removeClass("opened");
    })
})
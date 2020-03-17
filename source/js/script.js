$(document).ready(function () {
    $(".menu__toggle").click(function () {
        $(".menu").toggleClass("opened");
        $("body").toggleClass("scroll-disabled");
    });
    $(".menu__opened").click(function () {
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
            var margin = parseInt($('.page-main').css('marginTop'));
            if (difference > 0) {
                top = top - difference;
            }
            if(left < 0) {
                left = window.innerWidth/2 - width/2;
            }
            if(top < margin) {
                $(".popup").addClass("fixed");
            }
            $(".popup__content").offset({ top: top, left: left });
            $("body").toggleClass("scroll-disabled");
        })
    })
    $(".button--close").click(function () {
        $(".popup").removeClass("opened");
        $("body").toggleClass("scroll-disabled");
    })
})

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
            $("body").toggleClass("scroll-disabled");
        })
    })
    $(".button--close").click(function () {
        $(".popup").removeClass("opened");
        $("body").toggleClass("scroll-disabled");
    })
})

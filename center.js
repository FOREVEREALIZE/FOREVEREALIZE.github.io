function center() {
    $('.main').css({
        position:'absolute',
        left: ($(window).width() - $('.main').outerWidth())/2,
        top: ($(window).height() - $('.main').outerHeight())/2
    })
}

$(window).resize(center)

center()
center()
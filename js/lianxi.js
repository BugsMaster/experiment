//第一个渐变
$(function () {
    $(".dy_bottom1").mouseenter(function () {
        $(".dy_bottom11").stop().animate({
            "opacity":"0"
        },1000)
        $(".dy_bottom_1").stop().animate({
            "opacity":"1"
        },1000)
    });
    $(".dy_bottom1").mouseleave(function () {
        $(".dy_bottom11").stop().animate({
            "opacity":"1"
        },1000)
        $(".dy_bottom_1").stop().animate({
            "opacity":"0"
        },1000)
    })


    //第二个渐变
    $(".dy_bottom2").mouseenter(function () {
        $(".dy_bottom22").stop().animate({
            "opacity":"0"
        },1000)
        $(".dy_bottom_2").stop().animate({
            "opacity":"1"
        },1000)
    });
    $(".dy_bottom2").mouseleave(function () {
        $(".dy_bottom22").stop().animate({
            "opacity":"1"
        },1000)
        $(".dy_bottom_2").stop().animate({
            "opacity":"0"
        },1000)
    })
//第三个渐变

    $(".dy_bottom3").mouseenter(function () {
        $(".dy_bottom33").stop().animate({
            "opacity":"0"
        },1000)
        $(".dy_bottom_3").stop().animate({
            "opacity":"1"
        },1000)
    })
    $(".dy_bottom3").mouseleave(function () {
        $(".dy_bottom33").stop().animate({
            "opacity":"1"
        },1000)
        $(".dy_bottom_3").stop().animate({
            "opacity":"0"
        },1000)
    })

//第四个渐变
    $(".dy_bottom4").mouseenter(function () {
        $(".dy_bottom44").stop().animate({
            "opacity":"0"
        },1000)
        $(".dy_bottom_4").stop().animate({
            "opacity":"1"
        },1000)
    })
    $(".dy_bottom4").mouseleave(function () {
        $(".dy_bottom44").stop().animate({
            "opacity":"1"
        },1000)
        $(".dy_bottom_4").stop().animate({
            "opacity":"0"
        },2000)
    })
})
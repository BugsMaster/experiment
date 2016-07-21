/**
 * Created by jonh on 2016/6/17 0017.
 */
$(function () {
//封装 鼠标移上事件
    function fn1(obj, src) {
        $(obj).mouseenter(function () {
            $(this).attr("src", "images/0"+src+".png");
        })
    }
//封装 鼠标离开事件
    function fn2(obj, src) {
        $(obj).mouseleave(function () {
            $(this).attr("src", "images/0"+src+".png");
        })
    }
//鼠标移上的调用
        fn1($("#xlmsloganone img"), 8)
        fn1($("#xlmslogantwo img"), 8)
        fn1($("#xlmsloganthree img"), 8)
        fn1($("#xlmsloganfour img"), 6)
//鼠标离开的调用
    fn2($("#xlmsloganone img"), 6)
    fn2($("#xlmslogantwo img"),6)
    fn2($("#xlmsloganthree img"), 6)
    fn2($("#xlmsloganfour img"), 8)

    //切换二维码
    $("#xlmclose").click(function () {
        $(".xlmewm img").toggleClass("hide");
    });
    //鼠标移上二维码显示大图
    $(".xlmewm").mouseover(function () {
        //alert("huhbh")
       $("#er").removeClass("hide").addClass("show");
    });
    $(".xlmewm").mouseout(function () {
        $("#er").removeClass("show").addClass("hide");
    });

})



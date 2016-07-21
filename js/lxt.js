$(function(){

    var arrow_left_lxt=document.getElementById("arrow_left_lxt");
    var arrow_right_lxt=document.getElementById("arrow_right_lxt");
    var order_display = document.getElementById("order_display");
    var ul = order_display.children[0];
    var lis = ul.children;
    var circle_inner=document.getElementById("circle_inner");
    var circle_outer=document.getElementById("circle_outer");
    var config = [
        {
            "width": 400,
            "top": 20,
            "left": 20,
            "opacity": 0.2,
            "zIndex": 2
        },
        {
            "width": 600,
            "top": 70,
            "left": 100,
            "opacity": 0.8,
            "zIndex": 3
        },
        {
            "width": 800,
            "top": 100,
            "left": 400,
            "opacity": 1,
            "zIndex": 4
        },
        {
            width: 600,
            top: 70,
            left: 600,
            opacity: 0.8,
            zIndex: 3
        },
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "zIndex": 2
        }
    ];



    $("#car").width($(window).width());
    $(window).resize(function () {
        $("#car").width($(window).width());
    })






    var flag=true;
    assign();
    arrow_left_lxt.onclick = function () {
        if(flag){
            flag=false;
            config.push(config.shift());
            assign();
        }

    }

    arrow_right_lxt.onclick = function () {

        if(flag){
            flag=false;
            config.unshift(config.pop());
            assign();
        }

    }



    function clock() {
        //获取当前时间 计算各个对象要旋转的角度
        var d = new Date();
        var ms = d.getMilliseconds();
        //秒针
        var s = d.getSeconds();//当前是多少秒
        s = s + ms / 1000;
        //一圈360° 60秒 一圈 一秒 6°
        circle_outer.style.transform = "rotate(" + (s * 18) + "deg)";
        circle_inner.style.transform = "rotate(" + (-s * 18) + "deg)";

    }
    setInterval(clock, 100);//每秒钟渲染一次




    function assign (){
        for (var i = 0; i < lis.length; i++) {
            animate(lis[i], config[i],function(){
                flag=true;
            });
        }
    }


    function animate(obj, json, fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;
            for (var k in json) {
                if (k === "opacity") {
                    var leader = getStyle(obj, k) * 100;
                    var target = json[k] * 100;
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader / 100;
                } else if (k === "zIndex") {
                    obj.style.zIndex = json[k];
                } else {
                    var leader = parseInt(getStyle(obj, k)) || 0;
                    var target = json[k];
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader + "px";
                }
                if (leader != target) {
                    flag = false;
                }
            }
            if (flag) {
                clearInterval(obj.timer);
                if (fn) {
                    fn();
                }
            }
        }, 15);
    }

    function getStyle(obj, attr) {
        if (obj.currentStyle) {
            return obj.currentStyle[attr];
        } else {
            return window.getComputedStyle(obj, null)[attr];
        }
    }


});

/**
 * Created by yj on 2016/6/17.
 */
$(function () {
    $(".E-box-da-s-l").mouseenter(function () {
        $(".E-box-da-s-l-l").stop().animate({
            "left": "10px"
        }, 500)
    });
    $(".E-box-da-s-l").mouseleave(function () {
        $(".E-box-da-s-l-l").stop().animate({
            "left": "0px"
        }, 500)
    });
    $(".E-box-da-s-r").mouseenter(function () {
        $(".E-box-da-s-r-r").stop().animate({
            "top": "0px"
        }, 500);
    });
    $(".E-box-da-s-r").mouseleave(function () {
        $(".E-box-da-s-r-r").stop().animate({
            "top": "-423px"
        }, 500);
    });
    $(".E-box-da-x-l").mouseenter(function () {
        $(".E-box-da-x-l-l").stop().animate({
            "left": "0px"
        }, 500);
    });
    $(".E-box-da-x-l").mouseleave(function () {
        $(".E-box-da-x-l-l").stop().animate({
            "left": "-560px"
        }, 500);
    });
    $(".E-box-da-x-r").mouseenter(function () {
        $(".E-box-da-x-r-r").stop().animate({
            "top": "0px"
        }, 500);
    });
    $(".E-box-da-x-r").mouseleave(function () {
        $(".E-box-da-x-r-r").stop().animate({
            "top": "293px"
        }, 500);
    });

});
//window.onload = function () {
//    $(".E-box-da-s-l").mouseenter(function () {
//        $(".E-box-da-s-l-l").stop().animate({
//            "left": "10px"
//        }, 500)
//    });
//    $(".E-box-da-s-l").mouseleave(function () {
//        $(".E-box-da-s-l-l").stop().animate({
//            "left": "0px"
//        }, 500)
//    });
//    $(".E-box-da-s-r").mouseenter(function () {
//        $(".E-box-da-s-r-r").stop().animate({
//            "top": "0px"
//        }, 500);
//    });
//    $(".E-box-da-s-r").mouseleave(function () {
//        $(".E-box-da-s-r-r").stop().animate({
//            "top": "-423px"
//        }, 500);
//    });
//    $(".E-box-da-x-l").mouseenter(function () {
//        $(".E-box-da-x-l-l").stop().animate({
//            "left": "0px"
//        }, 500);
//    });
//    $(".E-box-da-x-l").mouseleave(function () {
//        $(".E-box-da-x-l-l").stop().animate({
//            "left": "-560px"
//        }, 500);
//    });
//    $(".E-box-da-x-r").mouseenter(function () {
//        $(".E-box-da-x-r-r").stop().animate({
//            "top": "0px"
//        }, 500);
//    });
//    $(".E-box-da-x-r").mouseleave(function () {
//        $(".E-box-da-x-r-r").stop().animate({
//            "top": "293px"
//        }, 500);
//    });
//
//};
//


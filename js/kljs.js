/**
 * Created by Administrator on 2016/6/17.
 */
$(function () {
    //孔临顶部特效开始
    $(".klsubnav a").mouseenter(function () {
        $(this).children().fadeIn();
    });
    $(".klsubnav a").mouseleave(function () {
        $(this).children().fadeOut();
    });
    //孔临顶部特效结束


    //孔临F特效开始
    $(".klpic a").mouseenter(function () {
        $(this).children().fadeIn(500);
    });
    $(".klpic a").mouseleave(function () {
        $(this).children().fadeOut(500);
    });
    //孔临F特效结束
    //顶部固定导航栏开始


    //孔临手风琴开始
    var box = document.getElementById("klsfqbox");
    var ul = box.children[0];
    var lis = ul.children;
    //遍历每一个li 绑定背景图
    //给每一个li绑定鼠标经过事件 排他
    for (var i = 0; i < lis.length; i++) {
        lis[i].style.backgroundImage = "url(images/klxuan" + (i + 1) + ".jpg)";
        lis[i].onmouseover = function () {
            //排他
            //干掉所有人 让所有li的宽度 渐渐地 变窄为100px
            for (var j = 0; j < lis.length; j++) {
                //lis[j]
                animate(lis[j], {"width": 200});
            }
            //留下我自己 让当前li的宽度 渐渐地 变为800px
            animate(this, {"width": 550});
        }
        //鼠标离开后 所有的li的宽度都 渐渐地 变为240px
        lis[i].onmouseout = function () {
            for (var k = 0; k < lis.length; k++) {
                animate(lis[k], {"width": 290});
            }
        }
    }

    //需求 让 任意对象 的 任意数值属性 变为任意的目标值
    function animate(obj, json) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;//假设都拍好了
            //遍历json获取所有的属性名和属性的目标值并设置
            for (var k in json) {//json {属性名:属性目标值} { k : json[k]}
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                //判断 有问题 只要有一个达到了 就清理定时器
                //if (leader != target) {
                leader = leader + step;
                obj.style[k] = leader + "px";
                //} else {
                //    clearInterval(obj.timer);
                //}

                if (leader != target) {
                    flag = false;//告诉标记 我还没达到
                }
            }
            //这个时候 如果flag 还是true 就真的是true
            //如果这个时候flag还是true 就说明没有人告诉他 自己没达到
            //也就是说 都达到了
            if (flag) {
                clearInterval(obj.timer);
            }
            //console.log("还在运行");
        }, 15);
    }

    function getStyle(obj, attr) {
        if (obj.currentStyle) {
            return obj.currentStyle[attr];
        } else {
            return window.getComputedStyle(obj, null)[attr];
        }
    }
    //孔临手风琴结束
});

//刘志飞部分
$(function(){
    var timer=null;
    var num=1;
    var lis = $("#uls").children()
    //alert(lis.length)
    function autoplay(){
        if(num>lis.length){
            num=0;
        }
        $('#ols li').eq(num).addClass('curr').siblings().removeClass('curr');
        $('#uls li').eq(num).hide().fadeIn(500).siblings().hide();
        num++;
    }
    $('#ols li').mouseenter(function() {
        $(this).addClass('curr').siblings().removeClass('curr');
        var index=$(this).index();
        $('#uls li').eq(index).hide().fadeIn(500).siblings().hide();
        num=index+1;
    });

    timer=setInterval(autoplay,2000);

    $('.c_exhibition').mouseover(function(){
        clearInterval(timer)
    }).mouseout(function() {
        clearInterval(timer)
        timer=setInterval(autoplay,2000)
    });
});

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



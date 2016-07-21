/**
 * Created by Administrator on 2016/6/17.
 */
$(function () {
    var dy_mian = document.getElementById("dy_mian");
    var dy_arr = document.getElementById("dy_arr");
    var dy_r = document.getElementById("dy_r");
    var dy_l = document.getElementById("dy_l");
    var ul = document.getElementById("dy_conul");
    var lis = ul.children;
    var lastImg = lis[0].cloneNode(true);
    var ol=document.getElementById("dy_nav").children[0];
    var olLis=ol.children;
    var atimer=null;
    //var square=0;
    //var conLis=document.getElementById("dy_conul").children;
    ul.appendChild(lastImg);
    //鼠标经过  箭头显示

    //按钮排他
    for (var j = 0; j < olLis.length; j++) {
        olLis[j].index = j;
        olLis[j].onmouseover = function () {
            //干掉所有人
            for (var k = 0; k < olLis.length; k++) {
                olLis[k].className = "";
            }
            //留下我自己
            this.className = "current";
            //移动ul
            //目标 和 索引有关 和 图片宽度
            var target = -this.index * 1920;
            animate(ul, target);
            //把 记录图片索引的pic 以及 记录按钮索引的square
            //和当前经过的按钮的索引统一
            square = pic = this.index;
        }
    }
    dy_mian.onmouseenter = function () {
        dy_arr.style.display = "block";
        clearInterval(atimer);

    }
    dy_mian.onmouseleave = function () {
        dy_arr.style.display = "none";
        atimer = setInterval(playNext, 2000);

    }

    //点击箭头  让ul移动
    var pic=0;
    dy_r.onclick= function () {
        playNext();
        //if (pic === lis.length - 1) {
        //    ul.style.left = 0 + "px";//让ul跳到开始
        //    pic = 0;//pic也要归零
        //}
        //pic++;
        //var target = -pic * 1920;
        //animate(ul, target);
    }

    dy_l.onclick = function () {
        //如果 pic 是第一张图片的索引 就该跳了
        if (pic === 0) {
            ul.style.left = -(lis.length - 1) * 1920 + "px";//让ul跳到最后
            pic = lis.length - 1;//pic要变成最后一个图片的索引
        }
        //把ul移动到相应的位置
        pic--;
        //目标 和 当前图片的索引有关 和 图片的宽度有关 而且是负数
        var target = -pic * 1920;
        animate(ul, target);
        if (square > 0) {
            square--;
        } else {
            square = olLis.length - 1;
        }
        //干掉所有人
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].className = "";
        }
        //留下对应的
        olLis[square].className = "current";


    };

//自动滚动
    atimer = setInterval(playNext, 2000);

    var square = 0;//记录当前亮起的按钮的索引
    function playNext() {
        if (pic === lis.length - 1) {
            ul.style.left = 0 + "px";
            pic = 0;
        }
        pic++;
        //目标 和 pic有关 和 图片宽度有关 而且是负数
        var target = -pic * 1920;
        animate(ul, target);

        if (square < olLis.length - 1) {
            square++;
        } else {
            square = 0;
        }
        //干掉所有人
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].className = "";
        }
        //留下对应的
        olLis[square].className = "current";

    }




    function animate(obj, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var leader = obj.offsetLeft;
            var step = 100;
            step = leader < target ? step : -step;
            if (Math.abs(leader - target) > Math.abs(step)) {
                leader = leader + step;
                obj.style.left = leader + "px";
            } else {
                obj.style.left = target + "px";
                clearInterval(obj.timer);
            }
        }, 15);
    }
})
    //轮播图开始



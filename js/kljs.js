/**
 * Created by Administrator on 2016/6/17.
 */
$(function () {
    //���ٶ�����Ч��ʼ
    $(".klsubnav a").mouseenter(function () {
        $(this).children().fadeIn();
    });
    $(".klsubnav a").mouseleave(function () {
        $(this).children().fadeOut();
    });
    //���ٶ�����Ч����


    //����F��Ч��ʼ
    $(".klpic a").mouseenter(function () {
        $(this).children().fadeIn(500);
    });
    $(".klpic a").mouseleave(function () {
        $(this).children().fadeOut(500);
    });
    //����F��Ч����
    //�����̶���������ʼ


    //�����ַ��ٿ�ʼ
    var box = document.getElementById("klsfqbox");
    var ul = box.children[0];
    var lis = ul.children;
    //����ÿһ��li �󶨱���ͼ
    //��ÿһ��li����꾭���¼� ����
    for (var i = 0; i < lis.length; i++) {
        lis[i].style.backgroundImage = "url(images/klxuan" + (i + 1) + ".jpg)";
        lis[i].onmouseover = function () {
            //����
            //�ɵ������� ������li�Ŀ�� ������ ��խΪ100px
            for (var j = 0; j < lis.length; j++) {
                //lis[j]
                animate(lis[j], {"width": 200});
            }
            //�������Լ� �õ�ǰli�Ŀ�� ������ ��Ϊ800px
            animate(this, {"width": 550});
        }
        //����뿪�� ���е�li�Ŀ�ȶ� ������ ��Ϊ240px
        lis[i].onmouseout = function () {
            for (var k = 0; k < lis.length; k++) {
                animate(lis[k], {"width": 290});
            }
        }
    }

    //���� �� ������� �� ������ֵ���� ��Ϊ�����Ŀ��ֵ
    function animate(obj, json) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;//���趼�ĺ���
            //����json��ȡ���е������������Ե�Ŀ��ֵ������
            for (var k in json) {//json {������:����Ŀ��ֵ} { k : json[k]}
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                //�ж� ������ ֻҪ��һ���ﵽ�� ������ʱ��
                //if (leader != target) {
                leader = leader + step;
                obj.style[k] = leader + "px";
                //} else {
                //    clearInterval(obj.timer);
                //}

                if (leader != target) {
                    flag = false;//���߱�� �һ�û�ﵽ
                }
            }
            //���ʱ�� ���flag ����true �������true
            //������ʱ��flag����true ��˵��û���˸����� �Լ�û�ﵽ
            //Ҳ����˵ ���ﵽ��
            if (flag) {
                clearInterval(obj.timer);
            }
            //console.log("��������");
        }, 15);
    }

    function getStyle(obj, attr) {
        if (obj.currentStyle) {
            return obj.currentStyle[attr];
        } else {
            return window.getComputedStyle(obj, null)[attr];
        }
    }
    //�����ַ��ٽ���
});

//��־�ɲ���
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

//��һ������
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


    //�ڶ�������
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
//����������

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

//���ĸ�����
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



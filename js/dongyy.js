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
    //��꾭��  ��ͷ��ʾ

    //��ť����
    for (var j = 0; j < olLis.length; j++) {
        olLis[j].index = j;
        olLis[j].onmouseover = function () {
            //�ɵ�������
            for (var k = 0; k < olLis.length; k++) {
                olLis[k].className = "";
            }
            //�������Լ�
            this.className = "current";
            //�ƶ�ul
            //Ŀ�� �� �����й� �� ͼƬ���
            var target = -this.index * 1920;
            animate(ul, target);
            //�� ��¼ͼƬ������pic �Լ� ��¼��ť������square
            //�͵�ǰ�����İ�ť������ͳһ
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

    //�����ͷ  ��ul�ƶ�
    var pic=0;
    dy_r.onclick= function () {
        playNext();
        //if (pic === lis.length - 1) {
        //    ul.style.left = 0 + "px";//��ul������ʼ
        //    pic = 0;//picҲҪ����
        //}
        //pic++;
        //var target = -pic * 1920;
        //animate(ul, target);
    }

    dy_l.onclick = function () {
        //��� pic �ǵ�һ��ͼƬ������ �͸�����
        if (pic === 0) {
            ul.style.left = -(lis.length - 1) * 1920 + "px";//��ul�������
            pic = lis.length - 1;//picҪ������һ��ͼƬ������
        }
        //��ul�ƶ�����Ӧ��λ��
        pic--;
        //Ŀ�� �� ��ǰͼƬ�������й� �� ͼƬ�Ŀ���й� �����Ǹ���
        var target = -pic * 1920;
        animate(ul, target);
        if (square > 0) {
            square--;
        } else {
            square = olLis.length - 1;
        }
        //�ɵ�������
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].className = "";
        }
        //���¶�Ӧ��
        olLis[square].className = "current";


    };

//�Զ�����
    atimer = setInterval(playNext, 2000);

    var square = 0;//��¼��ǰ����İ�ť������
    function playNext() {
        if (pic === lis.length - 1) {
            ul.style.left = 0 + "px";
            pic = 0;
        }
        pic++;
        //Ŀ�� �� pic�й� �� ͼƬ����й� �����Ǹ���
        var target = -pic * 1920;
        animate(ul, target);

        if (square < olLis.length - 1) {
            square++;
        } else {
            square = 0;
        }
        //�ɵ�������
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].className = "";
        }
        //���¶�Ӧ��
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
    //�ֲ�ͼ��ʼ



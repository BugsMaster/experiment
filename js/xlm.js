/**
 * Created by jonh on 2016/6/17 0017.
 */
$(function () {
//��װ ��������¼�
    function fn1(obj, src) {
        $(obj).mouseenter(function () {
            $(this).attr("src", "images/0"+src+".png");
        })
    }
//��װ ����뿪�¼�
    function fn2(obj, src) {
        $(obj).mouseleave(function () {
            $(this).attr("src", "images/0"+src+".png");
        })
    }
//������ϵĵ���
        fn1($("#xlmsloganone img"), 8)
        fn1($("#xlmslogantwo img"), 8)
        fn1($("#xlmsloganthree img"), 8)
        fn1($("#xlmsloganfour img"), 6)
//����뿪�ĵ���
    fn2($("#xlmsloganone img"), 6)
    fn2($("#xlmslogantwo img"),6)
    fn2($("#xlmsloganthree img"), 6)
    fn2($("#xlmsloganfour img"), 8)

    //�л���ά��
    $("#xlmclose").click(function () {
        $(".xlmewm img").toggleClass("hide");
    });
    //������϶�ά����ʾ��ͼ
    $(".xlmewm").mouseover(function () {
        //alert("huhbh")
       $("#er").removeClass("hide").addClass("show");
    });
    $(".xlmewm").mouseout(function () {
        $("#er").removeClass("show").addClass("hide");
    });

})



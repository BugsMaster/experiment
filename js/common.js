/**
 * Created by Administrator on 2016/6/16.
 */
/*
 *��ʼ������ҳ������
 */
var viewHeight;//��������ڿ��Ӹ߶�
var viewWidth;//��������ڿ��ӿ��
var pageHeight;//�ĵ�ҳ��߶�
var pageWidth;//�ĵ�ҳ����


 $(function () {
     var t_load = setTimeout(function(){

        //ˢ�²���ȫ������
        getValue();
        //����ҳ�����
        pageAdjust();

    },10);//delayTime
 });

//window.onload = function(){
//    //window��������Ԫ�ؾ�������ɺ�ſ�ʼ���У�ע������
//    //�ӳټ���,���ڴ�������DOM���غ�ʱ�ϳ������BUG
//    var t_load = setTimeout(function(){
//
//        //ˢ�²���ȫ������
//        getValue();
//        //����ҳ�����
//        pageAdjust();
//
//    },10);//delayTime
//
//};


$(window).resize(function(){
    //ˢ�²���ȫ������
    getValue();
    //����ҳ�����
    pageAdjust();

});
function getValue()
{
    /*ȫ�ֱ���
     * ��������ڿ��Ӹ߶�
     */
    viewHeight = $(window).height();

    /*ȫ�ֱ���
     * ��������ڿ��ӿ��
     */
    viewWidth = $(window).width();
    //��ȡ����ȫ�ֱ���
    /*ȫ�ֱ���
     * �ĵ��߶�
     */
    pageHeight = $(document).height();

    /*ȫ�ֱ���
     * �ĵ����
     */
    pageWidth = $(document).width();

}

function pageAdjust()
{
    //ҳ����ʽ�ĵ���
    //�ڳ�ʼ����ҳ��ߴ�仯ʱ����getValue()����
    /*
     *nav_list�ĵ���
     */
    var width_header_menu_list = $('#header').width() - 416;
    $('#header_menu_list').width(width_header_menu_list);
    var left_header_menu_list  = (width_header_menu_list*0.28-12)/2+208;
    $('#header_menu_list').css('marginLeft', left_header_menu_list);

    //section_button_listλ�õ���
    console.log(viewHeight/2-50)
    $("#section_button").css('top', viewHeight/2-50 + "px");

    for (var i = 0; i <6; i++) {
        $('.header_detail_container').eq(i).css('left', 1000*i+'px');
    }
    //��������

    $('#bg').height(viewHeight);
    $('.bg').height(viewHeight);
}

/*
 *header_nav_list���ƶ�menu_detail�ƶ���Ч
 *
 */
(function(){
    var open_status = false;//true��ʾ��״̬
    var run_status =false;//��������״̬��true��ʾ��������
    var run1_status = false;//nav�Ķ���״̬
    $('.header_menu_list').on('mouseenter',function(){
        /*�ƶ���header_nav_list��ʱ��
         *���ж�menu_detail��û�д򿪣�����򿪾�ֱ�ӽ��������л������û�д����Ƚ��������л��ٴ�
         *
         */
        if(open_status)
        {
            //��״̬
            if(!run_status)
            {
                run_status = true;//��������
                var index = $(this).index();
                $('#header_menu_details_mask').animate({
                    left: -1000*index+'px'}, 300,function(){
                    run_status = false;//��������״̬
                })
            }
        } else {
            //�ر�״̬
            var index = $(this).index();
            $('#header_menu_details_mask').css('left', -1000*index+'px');
            if(!run1_status)
            {
                $('#header_menu_details').slideDown();
                run1_status = true;
                //����ϣ����״̬
                open_status = true;
            }
        }
    })

    $('#header_nav').on('mouseleave',function(){
        //����뿪nav���򣬹ر�header_menu_details
        $('#header_menu_details').slideUp(300,function(){
            run1_status = false;
        });
        //�ر���ϣ����״̬
        open_status = false;
    })
})();//�����Զ�����

/*
 *������Ч��
 *
 */
//
//$('#header_search_text').on('focus',function(){
//    $(this).css('color', 'black');
//    var value = $(this).val();
//    console.log(value);
//    if( value == '������������')
//    {
//        $(this).val('');
//    }
//}).on('blur',function(){
//    $(this).css('color', '#8e8e8e');
//    var value = $(this).val();
//    if( value == '')
//    {
//        $(this).val('������������');
//    }
//});

/*
 *�����л�
 */
var val = {
    fa_id:"bg",
    son_class:"bg",
    speed:1500,
    interval:3000,
};
banner(val);
function banner(opts)
{
    //����ֵΪ������ID�Լ������Ԫ�ص�����
    console.log(opts);
    console.log(opts.fa_id);
    var banner = document.getElementById(opts.fa_id);//��ȡ��ǰbanner�Ķ���
    var banner_img = $("#"+opts.fa_id).children("."+opts.son_class);//��ȡ������Ԫ�صĶ���
    var img_num = banner_img.length;//��ȡ��ǰbanner��ͼƬ����
    var speed = opts.speed;//�������ʱ�䣬��λ������
    var interval = opts.interval;//���ʱ��
    var currentImg = 0;//��ǰ��ʾ��ͼƬ����ʼ��ʱ������ʾ��һ��ͼƬ��
    init();//���ó�ʼ��������

    function init()
    {
        //��ʼ��
        console.log(img_num);
        //���ֱ���Ĭ��ֵ��ʼ��
        if(!speed){speed = 500; console.log(speed);}
        if(!interval){interval = 1000; console.log(interval);}
        if(speed<50){speed = 50; alert("�ٶ�ʱ��������С��50ms");}
        if(speed>interval){interval = speed;alert('�仯ʱ�䲻�ô��ڱ仯���');}


        for(i=1; i<img_num;i++)
        {
            //���ض����ͼƬ
            banner_img.eq(i).hide();
        }

        t1 = setTimeout(function(){picChange();},1000);
    }

    function picChange()
    {
        //�Զ��ֻ�
        banner_img.eq(currentImg).fadeOut(speed);
        banner_img.eq((currentImg + 1)%img_num).fadeIn(speed);
        currentImg = (currentImg + 1)%img_num;
        t2 = setTimeout(function(){picChange();},interval);
    }
}

//



$(function(){
    mHeight();
    $(window).resize(function() {
        mHeight();
    });
    // // 返回顶部按钮
    // $('body').js_ily_top({
    //     _btn:'.js_ily_top',
    //     _html: '<a href="javascript:void(0)" class="js_ily_top"></a>'
    // });
    function mHeight(){
        var wrapHeight=$(".wrapper").width()*0.4+"px";
        $(".wrapper").css("height",wrapHeight);
        // $('.section .bg').height($(window).height());
        var product_wrapHeight=$(".wrapper_product").width()*0.474+"px";
        $(".wrapper_product").css("height",product_wrapHeight);
        // $('.section .bg').height($(window).height());
        var social_wrapHeight=$(".wrapper_social").width()*0.432+"px";
        $(".wrapper_social").css("height",social_wrapHeight);

        var social_aimHeight=$(".social_aim").width()*0.27+"px";
        $(".social_aim").css("height",social_aimHeight);
    }
    // 导航SVG动效
    var circle = {
    	c_0 : $('circle').eq(0),
    	c_1 : $('circle').eq(1),
    	percent : .1,
    	perimeter : Math.PI * 2 * 100
    }
    circle.c_0.attr('stroke-dasharray', circle.perimeter * circle.percent + " " + circle.perimeter * (1- circle.percent));
    $('.languageBtnBox').hover(function(){		
    	circle.c_0.attr('stroke-dasharray', 0 + " " + circle.perimeter * circle.percent);
    	circle.c_1.attr('stroke-dasharray', circle.perimeter * circle.percent + " " + circle.perimeter * (1- circle.percent));
    },function(){
    	circle.c_0.attr('stroke-dasharray', circle.perimeter * circle.percent + " " + circle.perimeter * (1- circle.percent));
    	circle.c_1.attr('stroke-dasharray', circle.perimeter * (1 - circle.percent*10) + " " + circle.perimeter * circle.percent*10);
    })
    //互联网许可证弹窗
    $('.js_internetBtn').live('click',function(){
        var _popHtml = '<div class="popLicenseBox" style="display:none;position:fixed;left:0;top:0;width:100%;height:100%;z-index:9999;">'+
            '<div class="zzc" style="position:absolute;left:0;top:0;width:100%;height:100%;z-index:1;background:rgba(0,0,0,.5)"></div>'+
            '<div class="licenseBox" style="position:absolute;left:50%;top:50%;width:650px;height:450px;z-index:2;padding:30px 0;text-align:center;background:#fefefe;border-radius:5px;margin:-225px 0 0 -300px;">'+
            '<img style="width:auto;height:100%;" src="http://static.ilongyuan.cn/ld/home/license.jpg" alt="">'+'</div></div>'
        if($('.popLicenseBox').length == 0){
            $('body').append(_popHtml);
        }
        $('.popLicenseBox').show();
    })
    $('.popLicenseBox .zzc').live('click',function(){
        $(this).parent().hide();
    })
});
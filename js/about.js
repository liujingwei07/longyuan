var page_idx = 0, //记录当前fullpage页面
	slide_state = 0, //记录当前页面是否处于动画状态的值
	timer1 ; //按钮点击定时器
$(function(){
	var win_h = $(window).height(),
		bg_top = $('.home_bgBox').height(),
		zzc_top = $('.home_bgZZC').height();
	//刷新页面滚动到顶部
	$("body").animate({scrollTop : 0},100);
	//刷新页面loading背景消失
	setTimeout(function(){
		$('.loading_zzc').hide();
	},500);

	$(window).resize(function(){
		win_h = $(window).height(),
		bg_top = $('.home_bgBox').height(),
		zzc_top = $('.home_bgZZC').height();
		$('.section,.containerBox').height(win_h);
	})
	$('.section,.containerBox').height(win_h);
	//fullpage页面右上菜单按钮点击事件
	$('.header_menuBox .menu_btn').click(function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$(this).siblings('.menu_list').removeClass('active');
			$(this).siblings('.menu_list').find('.menu_line').removeClass('active');
		}else{
			$(this).addClass('active');
			$(this).siblings('.menu_list').addClass('active');
			$(this).siblings('.menu_list').find('.menu_line').addClass('active');
		}
	})
	//fullpage首页向下滚动按钮点击事件
	$('.btnDown').click(function(){
		//设置页码
		page_idx = 1;
		//设置当前状态
		slide_state = 1;
		//执行动画
		$('#myContainer .pageBox').css({transform: 'translate3D(0,-'+ bg_top +'px,0)'});
		$('.section').eq(1).addClass('animate').siblings().removeClass('animate');
		//右侧导航按钮
		$('#fp-nav li').eq(0).find('a').addClass('active').parent().siblings().find('a').removeClass('active');
		setTimeout(function(){
			$('.header_scroll,.header_menuBox,#fp-nav,.border').show();
		},500);
		//定时改变页面状态，状态值为0才能继续滚动页面
		clearTimeout(timer1);
		timer1 = setTimeout(function() {
	        slide_state = 0;
	    }, 1500);
	})
	//fullpage右侧导航按钮点击事件
	$('#fp-nav li').find('a').click(function(){
		var i = $(this).parent().index();
		slide_state = 1;
		page_idx = i + 1;
		$('#myContainer .pageBox').css({transform: 'translate3D(0,-'+ bg_top * (i + 1) +'px,0)'});
		$('#fp-nav li').eq(i).find('a').addClass('active').parent().siblings().find('a').removeClass('active');
		$('.section').eq(i + 1).addClass('animate').siblings().removeClass('animate');
		clearTimeout(timer1);
		timer1 = setTimeout(function() {
	        slide_state = 0;
	    }, 1500);
	})
	//屏幕滚动监听事件
	$(window).scroll(function(event){
		var top = $('body').scrollTop() / 2000 / 3,
			opacity = 1.25,
			y1 = 1 + top * 6,y2 = 1 + top * 2,y3 = 1 + top * 1.22,y4 = 1 + top * 1.22,y5 = 1 + top * 0.44,
			o = opacity - top * 3 * 7;
		if($(document).scrollTop() > 0){
			$('.scrollPromptBox').hide();
		}else{
			$('.scrollPromptBox').show();
		}
		//判断页面是否滚动到fullpage页面区域
		if($(document).scrollTop() >= $(document).height() - $(window).height()){
			//将fullpage页面层级提升盖住固定背景区域
			$('.containerBox').css({'z-index':'2'});
			if($('.border').css('display') == 'none' && page_idx > 0){
				$('.header_scroll,.header_menuBox,#fp-nav,.border').show();
			}
			$('#myContainer,#fp-nav,.header_scroll,.header_menuBox').mousewheel(function(event, delta, deltaX, deltaY) {
		        if (slide_state == 1) {
		            return false; //阻止默认事件
		        }
		        fullPage(delta);
		        // return false; //阻止默认事件
			});
		}else if($(document).scrollTop() <= zzc_top){
			//页面背景缩放动画效果
			$('.home_bgBox .bg.st01').css('transform','scale('+ y1 +')');
			$('.home_bgBox .bg.st02').css('transform','scale('+ y2 +')');
			$('.home_bgBox .bg.st03').css('transform','scale('+ y3 +')');
			$('.home_bgBox .bg.st04').css('transform','scale('+ y4 +')');
			$('.home_bgBox .bg.st05').css('transform','scale('+ y5 +')');
			$('.home_bgBox').css('opacity',o);
			if($('.border').css('display') != 'none'){
				$('.header_scroll,.header_menuBox,#fp-nav,.border').hide();
			}
			//将fullpage页面层级减少隐藏在固定背景区域下面
			if($('.containerBox').css('z-index') != '0'){
				$('.containerBox').css({'z-index':'0'});
			}
		}
	})
	//滚动屏幕事件执行
	function fullPage(delta) {
	    i = page_idx;
	    len = $(".pageBox .section").length;
	    if (delta < 0) { //向下滚动
	        if (i == len - 1) {
	            return false; //阻止默认事件
	        }
	        i += 1;
	        slide_state = 1;
	    } else if (delta > 0) { //向上滚动
	        if (i == 0) {
	            return;
	        }
	        i -= 1;
	        slide_state = 1;
	    }
	    //右侧导航按钮动画
	    $('#fp-nav li').eq(i-1).find('a').addClass('active').parent().siblings().find('a').removeClass('active');
		//页面切换动画
		$('.section').eq(i).addClass('animate').siblings().removeClass('animate');
	    page_idx = i;
	    //定时改变页面状态，状态值为0才能继续滚动页面
	    clearTimeout(timer1);
		timer1 = setTimeout(function() {
	        slide_state = 0;
	    }, 1500);
	    if (i == 0) { //首页导航
	    	$('#myContainer .pageBox').css({transform: 'translate3D(0,-'+ bg_top * i +'px,0)'});
	    	$('.header_scroll,.header_menuBox,#fp-nav,.border').hide();
	    	return false;
	    }else if (i == 1) { //第一屏
	    	if($('.border').css('display') == 'none'){
				$('.header_scroll,.header_menuBox,#fp-nav,.border').show();
			}
	    	$('#myContainer .pageBox').css({transform: 'translate3D(0,-'+ bg_top * i +'px,0)'});
	    	return false;
	    }else if (i == 2) { //第二屏
	    	if($('.border').css('display') == 'none'){
				$('.header_scroll,.header_menuBox,#fp-nav,.border').show();
			}
	    	$('#myContainer .pageBox').css({transform: 'translate3D(0,-'+ bg_top * i +'px,0)'});
	    	return false;
	    }else if (i == 3){ //第三屏
	    	if($('.border').css('display') == 'none'){
				$('.header_scroll,.header_menuBox,#fp-nav,.border').show();
			}
	    	$('#myContainer .pageBox').css({transform: 'translate3D(0,-'+ bg_top * i +'px,0)'});
	    	return false;
	    }else if (i == 4){ //第四屏
	    	if($('.border').css('display') == 'none'){
				$('.header_scroll,.header_menuBox,#fp-nav,.border').show();
			}
	    	$('#myContainer .pageBox').css({transform: 'translate3D(0,-'+ bg_top * i +'px,0)'});
	    	return false;
	    }
	}
})
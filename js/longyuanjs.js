/*==================================
* 更新时间：2016-11-08
* LongyuanJS
* 登录插件
* 表单验证插件
* 加载更多插件
* 手机模幕插件
* TABLE切换
* 年月日插件
* 返回顶部按钮
* 模拟下拉搜索框
* 通用表单验证
* ajax提交
* 轮播图：淡入淡出，左右滑动
*==================================*/
!function($) {
    /*==================================
    * zhaowei
    * 2016-3-23
    * 验证插件
    *==================================*/
    $.fn.LYLogin = function(options) {
        //配置
        var _options = $.extend({
            //是否需要请求检测用户登录状态
            enableCheck:true,
            //用户登录状态请求地址 必须
            status:"",
            //登录状态回掉
            logstatus:function(json) {
                if (1 > json.status) {
                    return alert("用户未登录");
                }
            },
            //用户名name
            name:"account",
            //密码name
            password:"password",
            //按钮类名
            logButton:"logSubmit",
            //表单未通过
            invalid:function(msg) {
                return alert(msg);
            },
            //登录成功回掉
            success:function(json) {
                return alert(json.info);
            },
            //登录失败回掉
            fail:function(json) {
                return alert(json.info);
            },
            //退出登录请求地址 必须
            logout:"",
            //退出登录按钮类名
            logoutButton:"logout",
            //退出登录回掉
            logoutSuccess:function() {
                return alert("退出登录成功");
            }
        }, options), //表单
        _form = $(this), //账号
        _account = _form.find('input[name="' + _options.name + '"]'), //密码
        _pwd = _form.find('input[name="' + _options.password + '"]'), //提交按钮
        _btn = _form.find("." + _options.logButton), //主要函数
        _main = function() {
            if (_btn.is("input")) {
                _btn.val("登录中..."), _btn.attr("disabled", "disabled");
            } else {
                _btn.text("登录中..."), _btn.unbind();
            }
            //验证
            var valid = $(_form).LYFValid();
            if (!valid.status) {
                if (_btn.is("input")) {
                    _btn.removeAttr("disabled"), _btn.val("登录");
                } else {
                    _btn.bind("click", _main), _btn.text("登录");
                }
                return _options.invalid.call(this, valid.info);
            }
            return $.ajax({
                type:"post",
                url:_form.attr("action"),
                data:_form.serialize(),
                cache:false,
                dataType:"json",
                success:function(json) {
                    if (1 > json.status) {
                        _options.fail.call(this, json);
                    } else {
                        _options.success.call(this, json);
                    }
                    if (_btn.is("input")) {
                        _btn.removeAttr("disabled"), _btn.val("登录");
                    } else {
                        _btn.bind("click", _main), _btn.text("登录");
                    }
                    return _form[0].reset();
                }
            });
        };
        //请求一次用户信息
        if (_options.enableCheck) {
            $.ajax({
                url:_options.status,
                cache:false,
                dataType:"json",
                success:function(json) {
                    return _options.logstatus.call(this, json);
                }
            });
        }
        //绑定退出按钮
        $("." + _options.logoutButton).unbind().bind("click", function() {
            return $.ajax({
                url:_options.logout,
                cache:false,
                success:function() {
                    return _options.logoutSuccess.call();
                }
            });
        });
        return this.each(function() {
            _btn.unbind().bind("click", _main);
        });
    };

    /*==================================
    * zhaowei
    * 2016-3-23
    * 表单验证插件
    *==================================*/
    $.fn.LYFValid = function(options) {
        var _options = $.extend({}, options), //表单
        _form = $(this), //验证结果
        _result = {
            status:true,
            info:""
        };
        this.each(function() {
            //开始验证
            _form.find("input").each(function() {
                var element = $(this);
                if (element.hasClass("not-empty") && "" == element.val()) {
                    _result.status = false;
                    _result.info = element.attr("placeholder") + "不能为空";
                    return false;
                }
                if (element.hasClass("mobile-valid") && !/^1[3|4|5|7|8]\d{9}$/.test(element.val())) {
                    _result.status = false;
                    _result.info = "手机号码格式不正确";
                    return false;
                }
                if (element.hasClass("email-valid") && !/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(element.val())) {
                    _result.status = false;
                    _result.info = "邮箱格式不正确";
                    return false;
                }
            });
        });
        return _result;
    };

    /*==================================
    * 罗凡
    * 2016-4-13
    * 加载更多插件
    *==================================*/
    $.fn.ListMore = function(options) {
        var _options = $.extend({
            //请求数据地址
            url:"",
            //请求类型
            type:"GET",
            //参数
            params:{
                p:2
            },
            //目标dom
            box:"",
            //提示
            alertbox:function(msg) {
                return alert(msg);
            },
            //有数据回掉
            success:function(json) {
                switch (json.status) {
                  case 1:
                    return _options.params.p++, _form.bind("click", main), _form.html("加载更多"), $("." + _options.box).append(json.template);

                  case 0:
                    return _form.html("没有了"), _form.animate({
                        opacity:0
                    }, 1e3);

                  case -1:
                    return _form.bind("click", main), _form.html("加载更多"), alertbox(json.info);
                }
            }
        }, options);
        var _form = $(this);
        var main = function() {
            //清除事件
            return _form.unbind(), _form.html("加载中..."), $.ajax({
                url:_options.url,
                type:_options.type,
                data:_options.params,
                cache:false,
                dataType:"json",
                success:function(json) {
                    return _options.success.call(this, json);
                },
                error:function() {
                    return _form.bind("click", main), alertbox("请求错误");
                }
            });
        };
        return this.each(function() {
            _form.unbind().bind("click", main);
        });
    };

    /*==================================
    * 罗凡
    * 2016-4-18
    * 手机模幕插件
    *==================================*/
    $.fn.js_ily_size = function(options) {
        var _options = $.extend({
            bg:"#182035",//背景色
            color:"#fff",//颜色
            size:"1.6em",//字体大小
            speed:"3s",//旋转速度
            rotate:"90"//旋转度
        }, options);
        $("body").append('<div class="appSize"><div class="appSize_box"><div class="appSize_img"></div></div><div class="appSize_txt">为了更好地体验，请将手机/平板竖过来</div></div><style>.appSize{display:none;position:fixed;left:0;top:0;right:0;bottom:0;background:'+_options.bg+';z-index:9999;} .appSize .appSize_box{position:absolute;left:0;right:0;top:10%;height:70%;text-align:center;} .appSize .appSize_box .appSize_img{width:100%;height:100%;float:left;background:url(http://static.ilongyuan.cn/ld/jcyf_web/images/appSize_img.png) center no-repeat;background-size:auto 80%;animation:mymove '+_options.speed+' infinite;-webkit-animation:mymove '+_options.speed+' infinite;} .appSize .appSize_txt{position:absolute;left:0;right:0;top:80%;color:'+_options.color+';text-align:center;font-size:'+_options.size+';line-height:1.6;} @keyframes mymove { 0% {transform:rotate(0deg);-webkit-transform:rotate(0deg);} 50% {transform:rotate('+_options.rotate+'deg);-webkit-transform:rotate('+_options.rotate+'deg);} 100% {transform:rotate(0deg);-webkit-transform:rotate(0deg);}}</style>');
        appSize();
        $(window).resize(function(){
            appSize();
        });
        function appSize(){
            if($(window).width()>$(window).height()*1.3){
                $(".appSize").show();
            }else{
                $(".appSize").hide();
            }
        };
    };

    /*==================================
    * 罗凡
    * 2016-11-08
    * TABLE切换
    *==================================*/
    $.fn.LY_table = function(options) {
        var _ops = $.extend({
            _title:".LY_title span",//点击按钮
            _list:".LY_list",//切换box
            _active:"LY_active",//战前状态
            _act:"hover"//动作
        }, options), _title = _ops._title, _list = _ops._list, _active = _ops._active, _this = this, _act = _ops._act;
        _this.each(function() {
            $(this).find(_title + ":eq(0)," + _list + ":eq(0)").addClass(_active);
            $(this).find(_title).each(function(a) {
                $(this).bind(_act,function() {
                    $(this).addClass(_active).siblings().removeClass(_active);
                    $(this).parent().parent().find(_list + ":eq(" + a + ")").addClass(_active).siblings().removeClass(_active);
                });
            });
        });
    };

    /*==================================
    * 罗凡
    * 2016-11-08
    * 图片轮播
    *==================================*/
    $.fn.LY_rollBox = function(options) {
        var _ops = $.extend({
            _listBox:".imgBox",//列表框
            _list:".LY_rollList",//列表
            _prev:".LY_prev",//上一张
            _next:".LY_next",//下一张
            _state:"0",//滚动类型   0淡入淡出   1左右滚动
            _btnSt:"0",//底部列表类型　　0为数字 1为缩略图
            _time:"800",//动画过程时间
            _automatic:"3000",//切换时间
            _clearTime:"0",//是否自动移动
            _hoverTime:"0",//鼠标悬浮时是否移动
            _act:"click"//动作
        }, options),i,_listBtn,_num="0",_num1,_listHtml,_w,_length,_clearTime=_ops._clearTime,_hoverTime=_ops._hoverTime,_btnSt=_ops._btnSt,_automatic=_ops._automatic, _act = _ops._act, _this, _listBox = _ops._listBox, _list = _ops._list, _prev = _ops._prev, _next = _ops._next, _state = _ops._state,_time=_ops._time;
        this.each(function(i){
            _this=$(this);
            _listBtn="";
            _length = _this.find(_list).length;
            _this.find(_list).each(function(){
                $(this).append("<span>"+$(this).attr("data-text")+"</span>")
            })
            _this.find(_list).each(function(i){//添加列表按钮
                "0" == _btnSt ? (_listBtn += "<span>"+(i+1)+"</span>") : "1" == _btnSt && (_listBtn += "<span><img src='"+$(this).find("img").attr("src")+"'></span>");
            })
            _listBtn = "<div class='listBtn'>"+_listBtn+"</div>";
            _this.append(_listBtn);
            
            if(_state == "0"){//淡入淡出
                _this.find(_list).fadeOut(0);
                _this.find(_list).css({"position":"absolute","left":"0","top":"0"});
                _rateIntFn = function(){
                    if(_num>=_length){
                        _num=0;
                    }
                    _this.find(_list).fadeOut(0);
                    _this.find(_list).eq(_num).stop(!0,!0).fadeIn(_time).css({"z-index":"2"}).siblings().css({"z-index":"1"});
                    _this.find(".listBtn span").eq(_num).addClass("active").siblings().removeClass("active");
                    //相应视频播放
                    //$(".game_product .game_video img").eq(_num).css("display","block").siblings().css("display","none");
                    _num++
                };
                _rateIntFn();
                if(_clearTime == "0"){//是否自动移动
                    _rateInt = self.setInterval(_rateIntFn,_automatic);
                    if(_hoverTime == "0"){//鼠标悬浮，是否播放
                        _this.find(_listBox+","+_prev+","+_next+",.listBtn").hover(function(){
                            _rateInt = window.clearInterval(_rateInt);
                        },function(){
                            _rateInt = window.clearInterval(_rateInt);
                            _rateInt = self.setInterval(_rateIntFn,_automatic);
                        })
                    }
                }
                _this.find(_prev).bind("click",function(){//上一张
                    if(_num<=1){
                        _num=_length+1;
                    }
                    _num -=2;
                    if(_clearTime == "0"){
                        _rateInt = window.clearInterval(_rateInt);
                    }
                    _rateIntFn();
                });
                _this.find(_next).bind("click",function(){//下一张
                    if(_clearTime == "0"){
                        _rateInt = window.clearInterval(_rateInt);
                    }
                    _rateIntFn();
                });
                _this.find(".listBtn span").each(function(i){//点击热点
                    $(this).bind(_act,function(){
                        if(_clearTime == "0"){
                            _rateInt = window.clearInterval(_rateInt);
                        }
                        if(_num == i+1){
                            return;
                        }
                        _num = i;
                        _rateIntFn();
                    })
                });
            }else if("1" == _state){//左右切换
                _w = _this.find(_listBox).width();
                _this.find(_listBox+" > ul").css({"width":_w*_length+"px","position":"absolute","left":"0","top":"0"});
                _this.find(_listBox+" > ul > li").css({"width":_w,"float":"left","margin":"0"});
                _listHtml = _this.find(_listBox+" > ul").clone().css({"left":_w*_length});
                _this.find(_listBox).append(_this.find(_listBox+" > ul").clone()).find("ul").eq(1).css({"left":_w*_length});//克隆html
                _rateIntFn1 = function(){//执行滚动
                    _num1 = _num;
                    if(_num>=_length){
                        _num1=_num-_length;
                        _this.find(_listBox+" >  ul").eq(0).stop(!0,0).animate({"left":-_w*_num+_w*_length*0},_time*1,function(){
                            _this.find(_listBox).append(_this.find(_listBox+" > ul").eq(0).clone().css({"left":_w*_length}));//克隆html
                            _this.find(_listBox+" ul").eq(0).remove();
                        });
                        _this.find(_listBox+" >  ul").eq(1).stop(!0,0).animate({"left":-_w*_num+_w*_length*1},_time*1);
                        _num=_num1;
                    }else{
                        _this.find(_listBox+" >  ul").each(function(i){
                            $(this).stop(false,false).animate({"left":-_w*_num+_w*_length*i},_time*1);
                        })
                    }
                    _num++;
                    _this.find(".listBtn span").eq(_num1).addClass("active").siblings().removeClass("active");
                    //相应视频播放
                    //$(".game_product .game_video img").eq(_num1).css("display","block").siblings().css("display","none");
                };
                _rateIntFn1();
                if(_clearTime == "0"){//是否自动移动
                    _rateInt1 = self.setInterval(_rateIntFn1,_automatic);
                    if(_hoverTime == "0"){//鼠标悬浮，是否播放
                        _this.find(_listBox+","+_prev+","+_next+",.listBtn").hover(function(){
                            _rateInt1 = window.clearInterval(_rateInt1);
                        },function(){
                            _rateInt1 = window.clearInterval(_rateInt1);
                            _rateInt1 = self.setInterval(_rateIntFn1,_automatic);
                        })
                    }
                }
                _this.find(_prev).bind("click",function(){//上一张
                    if(_num<=1){
                        _num=_length+1;
                    }
                    _num -=2;
                    if(_clearTime == "0"){
                        _rateInt1 = window.clearInterval(_rateInt1);
                    }
                    _rateIntFn1();
                });
                _this.find(_next).bind("click",function(){//下一张
                    if(_clearTime == "0"){
                        _rateInt1 = window.clearInterval(_rateInt1);
                    }
                    _rateIntFn1();
                });
                _this.find(".listBtn span").each(function(i){//点击热点
                    $(this).bind(_act,function(){
                        if(_clearTime == "0"){
                            _rateInt1 = window.clearInterval(_rateInt1);
                        }
                        if(_num == i+1){
                            return;
                        }
                        _num = i;
                        _rateIntFn1();
                    })
                });
            }
        })
    };

    /*==================================
    * 罗凡
    * 2016-5-28
    * 年月日插件
    *==================================*/
    $.fn.LY_date = function(options) {
        var _ops = $.extend({
            yy:".LY_yy",//年
            mm:".LY_mm",//月
            dd:".LY_dd",//日
            yyName:"年",//单位
            mmName:"月",//单位
            ddName:"日",//单位
            _min:80,//多少年前
            _max:10,//多少年后
            _active:".LY_active",//时间框
            _list:".LY_list",//列表框
            label:"span"//列表标签
        }, options), i, n, b,m, num, num1, _this = this, myDate = new Date().getFullYear(), YY = myDate - _ops._min, YY_max = myDate + 1 * _ops._max, MM = 12, yy = $(_ops.yy), mm = $(_ops.mm), dd = $(_ops.dd), yyName = _ops.yyName, mmName = _ops.mmName, ddName = _ops.ddName, _active = $(_ops._active), _list = $(_ops._list), _list1 = _ops._list, label = _ops.label;
        _this.each(function() {
            $(this).find(yy).find("input").val($(this).find(yy).find(_active).html().replace(/[^0-9]/gi, ""));//获取默认年
            $(this).find(mm).find("input").val($(this).find(mm).find(_active).html().replace(/[^0-9]/gi, ""));//获取默认月
            $(this).find(dd).find("input").val($(this).find(dd).find(_active).html().replace(/[^0-9]/gi, ""));//获取默认日
            for (i = YY; i <= YY_max; i++) {
                $(this).find(yy).find(_list).append("<" + label + ">" + i + "</" + label + ">");//循环年数
            }
            $(this).find(yy).find(_active).click(function(a) {//点击年，显示下拉
                $(this).parent().parent().siblings().find(yy).find(_list).hide();
                $(this).parent().find(_list).toggle();
                mm.find(_list).hide();
                dd.find(_list).hide();
                a.stopPropagation();
                $(document).click(function() {//点击其余地方，隐藏下拉列表
                    return _this.find(_list).hide();
                });
            });
            $(this).find(mm).find(_active).click(function(a) {
                $(this).parent().parent().siblings().find(mm).find(_list).hide();
                $(this).parent().find(_list).toggle();
                b = $(this).parent().parent().find(yy).find(_active).html().replace(/[^0-9]/gi, "");
                if (b.length < 1) {//判断是否选择了年
                    alert("请选择年");
                    return _this.find(_list).hide();
                }
                yy.find(_list).hide();
                dd.find(_list).hide();
                a.stopPropagation();
                $(document).click(function() {//点击其余地方，隐藏下拉列表
                    return _this.find(_list).hide();
                });
            });
            $(this).find(yy).find(_list1 + " " + label).click(function() {//点击选择年
                i = $(this).html();
                m = $(this).parent().parent();
                m.find(_active).html(i + "" + yyName);
                m.find("input").val(m.find(_active).html().replace(/[^0-9]/gi, ""));
                m.parent().find(mm).find(_active).html("1" + mmName);
                m.parent().find(mm).find("input").val(m.parent().find(mm).find(_active).html().replace(/[^0-9]/gi, ""));
                m.parent().find(dd).find(_active).html("1" + ddName);
                m.parent().find(dd).find("input").val(m.parent().find(dd).find(_active).html().replace(/[^0-9]/gi, ""));
            });
            for (i = 1; i < MM + 1; i++) {
                $(this).find(mm).find(_list).append("<span>" + i + "</span>");
            }
            $(this).find(mm).find(_list1 + " " + label).click(function() {//点击选择月
                i = $(this).html();
                m = $(this).parent().parent();
                m.find(_list).hide();
                m.find(_active).html(i + "" + mmName);
                m.find("input").val(m.find(_active).html().replace(/[^0-9]/gi, ""));
                m.parent().find(dd).find(_active).html("1" + ddName);
                m.parent().find(dd).find("input").val(m.parent().find(dd).find(_active).html().replace(/[^0-9]/gi, ""));
            });
            $(this).find(dd).find(_active).click(function(time) {
                m = $(this).parent();
                b = m.parent().find(mm).find(_active).html().replace(/[^0-9]/gi, "");
                if (b.length < 1) {//判断是否选择了月
                    return alert("请选择月");
                }
                m.parent().siblings().find(dd).find(_list).hide();
                m.find(_list).toggle();
                yy.find(_list).hide();
                mm.find(_list).hide();
                i = b;
                if (i == "1" || i == "3" || i == "5" || i == "7" || i == "8" || i == "10" || i == "12") {//大月
                    n = 31;
                    m.find(_list).html("");
                    for (i = 1; i <= n; i++) {
                        m.find(_list).append("<span>" + i + "</span>");
                    }
                    m.find(_list1 + " " + label).click(function() {
                        i = $(this).html();
                        m.find(_active).html(i + "" + ddName);
                    });
                } else if (i == "4" || i == "6" || i == "9" || i == "10" || i == "11") {//小月
                    n = 30;
                    m.find(_list).html("");
                    for (i = 1; i <= n; i++) {
                        m.find(_list).append("<span>" + i + "</span>");
                    }
                } else if (i == "2") {
                    b = m.parent().find(yy).find(_active).html().replace(/[^0-9]/gi, "");
                    num = b / 4;
                    num1 = Math.ceil(num);//向上取整
                    if (num1 > num) {//平年
                        n = 28;
                        m.find(_list).html("");
                        for (i = 1; i <= n; i++) {
                            m.find(_list).append("<span>" + i + "</span>");
                        }
                    } else {//闰年
                        n = 29;
                        m.find(_list).html("");
                        for (i = 1; i <= n; i++) {
                            m.find(_list).append("<span>" + i + "</span>");
                        }
                    }
                }
                m.find(_list1 + " " + label).click(function() {//选择天
                    i = $(this).html();
                    m = $(this).parent().parent();
                    m.find(_list).hide();
                    m.find(_active).html(i + "" + ddName);
                    m.find("input").val(m.find(_active).html().replace(/[^0-9]/gi, ""));
                });
                time.stopPropagation();
                $(document).unbind().bind('click',function() {//点击其余地方，隐藏下拉列表
                    return _this.find(_list).hide();
                });
            });
        });
    };

    /*==================================
    * 罗凡
    * 2016-5-28
    * 返回顶部按钮
    *==================================*/
    $.fn.js_ily_top = function(options) {
        var _ops = $.extend({
            _btn:"",//点击按钮
            _speed:300,//滚动速度
            _top:100,//滚动多少像素显示按钮
            _inTime:500,//显示时动画过渡时间
            _outTime:200,//隐藏时动画过渡时间
            _html:"<a href='javascript:' class='js_ily_top' style='position:fixed;right:30px;bottom:30px;display:none;'>返回顶部</a>"//html代码
        }, options), b, i, _html = _ops._html, _top = _ops._top, _inTime = _ops._inTime, _outTime = _ops._outTime, _speed = _ops._speed, _btn = _ops._btn;
        $("body").append(_html);//添加代码到body
        i = $(_ops._btn);
        topbtn();
        $(window).scroll(topbtn);
        i.click(function() {//点击回到顶部
            $("body,html").animate({
                scrollTop:0
            }, _speed);
        });
        function topbtn() {
            b = $(window).scrollTop();
            if (b > _top) {
                i.fadeIn(_inTime);
            } else {
                i.fadeOut(_outTime);
            }
        }
    };


    /*==================================
    * 罗凡
    * 2016-11-28
    * 模拟下拉搜索框
    *==================================*/
    $.fn.LY_searchSelect = function(options) {
        var _ops = $.extend({
            _url:"data/data.json",//ajax请求地址
            _state:"1",//状态 0为ajax请求数据 1为列表匹配数据 
            _type:"post",//状态 0为ajax请求数据 1为列表匹配数据 
            _dataType:"json",//状态 0为ajax请求数据 1为列表匹配数据 
            _this:".LY_searchSelect",//外框
            _hide:"LY_hide",//隐藏类
            _focusSt:"LY_active",//选中类
            _keyDown:"keyDown",//显示类
            _LY_error:"LY_error",//错误提示类
            _data:"data-num",//属性
            _input:".LY_searchText",//输入框
            _getData:".LY_searchData",//储存域
            _list:".LY_list"//下拉列表
        }, options), b, c, d, g,h,m,n,o,p,t,i,k,_tVal,_tHtml,_tLength,_tText, _var,strVar, _data = _ops._data, _input = _ops._input, _getData = _ops._getData, _list = _ops._list, _this = _ops._this,_LY_error=_ops._LY_error,_hide=_ops._hide,_keyDown=_ops._keyDown,_focusSt=_ops._focusSt,_state=_ops._state,_url=_ops._url,_type=_ops._type,_dataType=_ops._dataType;
        $(_this).each(function(d) {
            b = $(this).find(_getData).val();
            $(this).find(_input).val($(this).find(_list + " span[" + _data + "='" + b + "']").html());//获取默认值
            $(this).find(_input).focus(function(a) {
                $(_list).hide();
                g = new RegExp("<b>", "g");
                m = $(this).parent();
                h = m.find(_list).html().replace(g,"");
                g = new RegExp("<\/b>", "g");
                h = h.replace(g,"");
                _var = $.trim($(this).val());
                g = new RegExp(_var, "g");
                _thisIn=$(this);
                m.find(_list).html(h);
                $(this).select();
                $(_this).find(_list).hide();
                m.find(_list).show();
                c = m.find(_list).find("span");
                //c.addClass(_hide).removeClass(_keyDown);
                c.each(function() {//匹配输入框里的值
                    if(_var != ""){
                        $(this).html($(this).html().replace(g, "<b>" + _var + "</b>"));
                        $(this).addClass(_hide).removeClass(_keyDown);
                    }else{
                        $(this).removeClass(_hide).addClass(_keyDown);
                    }
                    if ($(this).html().indexOf("<b>") >= 0) {
                        $(this).removeClass(_hide).addClass(_keyDown);
                    }
                });
                m.find(_list + " span").unbind().bind("click", function() {//点击列表
                    g = $(this).html().replace(/<b>/g, "");
                    g = g.replace(/<\/b>/g, "");
                    m.find(_input).val(g).removeClass(_LY_error);
                    m.find(_input).next().val($(this).attr(_data));
                });
                keyCode();//上下键盘操作
                $(document).click(function() {//点击其余地方，隐藏下拉列表
                    $(_this).find(_list).hide();
                });
                a.stopPropagation();
            }).click(function(a) {
                $(document).click(function() {//点击其余地方，隐藏下拉列表
                    $(_this).find(_list).hide();
                });
                a.stopPropagation();
            });
            $(this).find(_input).bind("input propertychange", function(a) {//内容改变事件
                _tVal = $(this).val();
                _tHtml = $(this).next().next(_list);
                _tText="";
                if(_state == 0){
                    $.ajax({
                        url:_url,
                        data:{"str":_tVal},
                        type:_type,
                        dataType:_dataType,
                        success:function(data){
                            for(i=0;i<data.data.lists.length;i++){
                                _tText+="<span data-num='"+data.data.lists[i].num+"'>"+data.data.lists[i].text+"</span>";
                            }
                            if ($(this).val() == "") {
                                _tHtml.html("");
                            }else{
                                _tHtml.html(_tText);
                            }
                            keyCode();//上下键盘操作
                        },
                        error:function(msg){
                            console.log(msg.error);
                        }
                    })
                }
                m = $(this).parent();
                g = new RegExp("<b>", "g");
                h = m.find(_list).html().replace(g,"");
                g = new RegExp("<\/b>", "g");
                h = h.replace(g,"");
                m.find(_list).html(h);
                _var = $.trim($(this).val());
                g = _var;
                //g = new RegExp(_var, "g");
                c = m.find(_list).find("span");
                n = m.find(_list).find("span").length;
                _thisIn=$(this);
                m.find(_list + " span").unbind().bind("click", function() {
                    g = $(this).html().replace(/<b>/g, "");
                    g = g.replace(/<\/b>/g, "");
                    m.find(_input).val(g).removeClass(_LY_error);
                    m.find(_input).next().val($(this).attr(_data));
                });
                c.addClass(_hide).removeClass(_keyDown);
                if ($(this).val() == "") {
                    c.removeClass(_hide).addClass(_keyDown);
                    $(this).next().val("");
                    $(this).removeClass(_LY_error);
                }else{
                    strVar = _var.replace(/\s+/g, " ").split(" ");//去掉前后空格，多个空格改成单个空格，字符串转换数组
                    c.each(function() {
                        $(this).html($(this).html().replace(g, "<b>" + _var + "</b>"));
                        if ($(this).html().indexOf("<b>") >= 0) {
                            $(this).removeClass(_hide).addClass(_keyDown);
                        }
                    });
                    for(i = 0;i<n;i++){
                        g = new RegExp("<b>", "g");
                        h = $(this).parent().find(_list+" span:eq("+i+")").html().replace(g,"");
                        g = new RegExp("</b>", "g");
                        h = h.replace(g,"");
                        if(h==_var){
                            $(this).next().val($(this).parent().find(_list+" span:eq("+i+")").attr(_data));
                            $(this).removeClass(_LY_error);
                            $(document).click(function() {//点击其余地方，隐藏下拉列表
                                $(_this).find(_list).hide();
                            });
                            return false;
                        }
                    }
                    $(this).addClass(_LY_error);
                    $(this).next().val("");
                }
                keyCode();//上下键盘操作
                $(document).click(function() {//点击其余地方，隐藏下拉列表
                    $(_this).find(_list).hide();
                });
                a.stopPropagation();
            });
            function keyCode(){
                m.find(_list+" ."+_keyDown+":eq(0)").addClass(_focusSt).siblings().removeClass(_focusSt);//添加初始值
                m.find(_list).scrollTop(0);
                $(document).unbind();
                k=0;
                p=0;
                $(document).keydown(function(e){
                    if(e.keyCode == 38){
                        if(k>0){
                            o=m.find(_list).height();
                            k--;
                            m.find(_list+" ."+_keyDown+":eq("+k+")").addClass(_focusSt).siblings().removeClass(_focusSt);
                            p-=m.find("."+_focusSt).outerHeight()
                            t=m.find("."+_focusSt).outerHeight();
                            m.find(_list).scrollTop(p+t-o);
                        }
                        g = m.find("."+_focusSt).text();
                        setTimeout(function(){
                            $(':focus').val(g).removeClass(_LY_error);
                            $(':focus').next().val(m.find("."+_focusSt).attr(_data));
                        },1)
                    }else if (e.keyCode == 40){
                        if(k<m.find(_list+" ."+_keyDown).length-1){
                            o=m.find(_list).height();
                            p+=m.find("."+_focusSt).outerHeight()
                            k++;
                            m.find(_list+" ."+_keyDown+":eq("+k+")").addClass(_focusSt).siblings().removeClass(_focusSt);
                            g = m.find("."+_focusSt).text();
                            $(':focus').val(g).removeClass(_LY_error);
                            $(':focus').next().val(m.find("."+_focusSt).attr(_data));
                            t=m.find(_list).find("."+_focusSt).outerHeight();
                            m.find(_list).scrollTop(p+t-o);
                        }
                    }else if (e.keyCode == 13){
                        g = m.find("."+_focusSt).text();
                        $(':focus').val(g).removeClass(_LY_error);
                        $(':focus').next().val(m.find("."+_focusSt).attr(_data));
                    }
                });
            }
        });
    };

    /*==================================
    * 罗凡
    * 2016-11-28
    * 通用表单验证
    *==================================*/
    $.fn.LY_formBox = function(options){
        var _ops = $.extend({
            _btn:"#formBtn",//按钮
            _box:"#formBox",//验证表单
            _labe:":input",//验证元素
            _area:"data-area",//最小长度和最大长度，两个数字用英文","隔开
            _state:"data-state",//是否必填，1为必填
            _inputSt:"data-inputSt",//类型区分：1、电话号码。2、邮箱
            _isNum:"data-isNum",//1:纯数字，2:可以带"+" "-" "." 数字，3:纯字母，4:字母、"_"、
            _isNumText:"data-isNumText",//内容格式提示文字
            _defaultText:"格式不正确！",//内容格式默认提示文字
            _errorText:"data-error",//错误提示文字
            _alike:"data-alike",//需要一至的元素里的值写成一样的
            _alikeError:"data-alikeError",//不一至的元素错误提示文字,错误文字放在第一个元素里
            _active:"active",//错误框添加类
            _callBack:function(){}//成功回调
        },options), _btn = _ops._btn, _box = _ops._box, _labe = _ops._labe, _labeList = $(_box).find(_labe), _state= _ops._state, _errorText = _ops._errorText, _area = _ops._area, _alike = _ops._alike, _area1, _this, _alikeAttr = [], _newAlikeAttr = [], _alikeText, _alikeError = _ops._alikeError, _inputSt = _ops._inputSt, _inputSt = _ops._inputSt, _isNum = _ops._isNum, _defaultText = _ops._defaultText, _isNumText = _ops._isNumText, _active = _ops._active, _isNumText1, _alikeError1, _alikeName1, _alikeName2, items, i, a;
        $(_btn).bind('click',function(){
            _labeList.each(function(){
                $(this).bind('input propertychange',function(){
                    $(this).removeClass(_active);
                });
            })
            for(var i = 0 ; i<_labeList.length ; i++){
                _this = _labeList.eq(i);
                _isNumText1 = _this.attr(_errorText);
                if(typeof(_isNumText1) == "undefined" ){//如果没有提示文字，调用默认文字
                    _isNumText1 = _defaultText;
                }
                if(typeof(_this.attr(_area)) == "undefined"){//如果没有长度限制，把限制设置成1-100000
                    _area1 = [1,100000];
                }else{
                    _area1 = _this.attr(_area).split(',');
                }
                if(_this.attr(_state) == "1" && _this.val().length < _area1[0] || _this.val().length >_area1[1]){//判断是否必填
                    defaultErrorFn();
                    return false;
                }else if(_this.attr(_state) != "1" &&  _this.val().length != 0 && _this.val().length < _area1[0] || _this.val().length >_area1[1]){//判断不必填时，长度是否满足条件
                    defaultErrorFn();
                    return false;
                }
                if(_this.attr(_inputSt) == "1"){//手机号码格式验证
                    if (!_this.val().match(/^((13|14|15|17|18)+\d{9})$/)  && _this.val() != "") {
                        alert("手机号码格式不正确！"); 
                        _this.select(); 
                        return false; 
                    }
                }else if(_this.attr(_inputSt) == "2"){//邮箱地址格式验证
                    if (!_this.val().match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) && _this.val() != "") { 
                        alert("邮箱格式不正确"); 
                        _this.select(); 
                        return false; 
                    }
                }else if(typeof(_this.attr(_isNum)) != "undefined"){
                    _val = _this.val();
                    _isNumText1 = _this.attr(_isNumText);
                    if(typeof(_isNumText1) == "undefined" ){
                        _isNumText1 = _defaultText;
                    }
                    if(_this.attr(_isNum) == "1" && _val !=""){//判断是否为纯数字
                        for (a = 0; a < _val.length; a++) {
                            if(isNaN(_val[a])){
                                defaultErrorFn();
                                return false;
                            }
                        };
                    }else if(_this.attr(_isNum) == "2" && _val !=""){//判断是否为数字
                        if(isNaN(_val)){
                            defaultErrorFn();
                            return false;
                        }
                    }else if(_this.attr(_isNum) == "3" && _val !=""){//判断是否是纯字母
                        if(!_val.match(/^[A-Za-z]*$/)){
                            defaultErrorFn();
                            return false;
                        }
                    }else if(_this.attr(_isNum) == "4" && _val !=""){//判断是否密码组合
                        if(!_val.match(/^[A-Za-z0-9_-]*$/)){
                            defaultErrorFn();
                            return false;
                        }
                    }
                }
                function defaultErrorFn(){//格式错误事件
                    alert(_isNumText1);
                    _this.select().addClass(_active);
                }
            }
            _labeList.each(function(){//需要一至的内容放在数组里
                if(typeof($(this).attr(_alike))!="undefined"){
                    _alikeAttr.push($(this).attr(_alike))
                }
            })
            for(i=0;i<_alikeAttr.length;i++) {//去重复数组
            　　items=_alikeAttr[i];
            　　if($.inArray(items,_newAlikeAttr)==-1) {
                    _newAlikeAttr.push(items);
            　　}
            }
            for(i = 0 ; i < _newAlikeAttr.length ; i++ ){//判断需要一至的列表内容是否一至
                _alikeName1 = $(_box).find(_labe+"["+_alike+"="+_newAlikeAttr[i]+"]");
                _alikeText = _alikeName1.val();
                _alikeError1 = _alikeName1.attr(_alikeError);
                for(a = 0 ; a < _alikeName1.length ; a++){
                    _alikeName2 = _alikeName1.eq(a);
                    if(_alikeName2.val() != _alikeText){
                        alert(_alikeError1);
                        _alikeName2.select();
                        return false;
                    }
                }
            }
            _ops._callBack();
        })
    };

    /*==================================
    * 罗凡
    * 2016-11-28
    * ajax提交
    *==================================*/
    $.fn.LY_ajax = function(options) {
        var _ops = $.extend({
            _url:"",
            _data:this.serialize(),
            _type:"post",
            _dataType:"json",
            _box:"#LY_ajax",
            _btn:"#LY_ajaxBtn",
            _must:".LY_must",
            _success:function() {},
            _error:function() {}
        },options), _url = _ops._url, _data = _ops._data, _type = _ops._type, _dataType = _ops._dataType, _box = _ops._box, _btn = _ops._btn, _must = _ops._must;
        _btn.bind("click", function() {
            $.ajax({
                url:_url,
                data:_data,
                type:_type,
                dataType:_dataType,
                success:function() {
                    _ops._success();
                },
                error:function() {
                    ops._error();
                }
            });
        });
    };
}(jQuery);
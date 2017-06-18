

$(function(){
	//个人中心
    $("#header .member").hover(function () {
        $(this).css('background', 'url(images/arrow2.png) no-repeat 55px center');
        $('#header .member_ul').show().animate({
            step:10,
            t:30,
            mul:{
                o:100,
                h:120
            }
        });
    }, function () {
        $(this).css('background', 'url(images/arrow.png) no-repeat 55px center');
        $('#header .member_ul').animate({
            step:10,
            t:30,
            mul:{
                o:0,
                h:0
            },
            fn:function(){
                $('#header .member_ul').hide();
            }
        });
    });

    //登录框
    var login = $('#login');
    var screen = $('#screen');
    login.center(350, 250).resize(function () {
        if (login.css('display') == 'block') {
            screen.lock();
        }
    });
    $('#header .login').click(function () {
        login.center(350, 250).css('display', 'block');
        screen.lock().animate({
            attr:'o',
            target:30,
            t:30,
            step:10
        });
    });
    $('#login .close').click(function () {
        login.css('display', 'none');
        //先执行渐变动画,动画完毕之后再执行关闭unlock
        screen.animate({
            attr:'o',
            target:0,
            t:30,
            step:10,
            fn:function(){
               screen.unlock();
            }
        });
    });

    //拖拽
    login.drag($("#login h2").first(),$("#login .other").first());


    //alert(document.documentElement.scrollTop);
    //百度分享初始化位置
    $("#share").css("top",getScroll().top + (getInner().height-parseInt(getStyle($("#share").first(),"height")))/2+"px");

    //滚动条的触发事件
    addEvent(window,"scroll",function(){
        $("#share").css("top",getScroll().top + (getInner().height-parseInt(getStyle($("#share").first(),"height")))/2+"px");
        $("#share").animate({
            attr:"y",
            target:getScroll().top + (getInner().height-parseInt(getStyle($("#share").first(),"height")))/2,
        });
    });

	//百度分享收缩效果
	$("#share").hover(function(){
		$(this).animate({
			attr:"x",
			target:0
		})
	},function(){
		$(this).animate({
			attr:"x",
			target:-211,
            t:30
		})
	});

	//滑动导航
    $("#nav .about li").hover(function(){
        var target=$(this).first().offsetLeft;
        //alert(target);
        $("#nav .nav_bg").animate({
          step:10,
          t:30,
          target:target+20,
           fn:function(){
                $("#nav .white").animate({
                    attr:'x',
                    target:-target
                })
            }
        });
    },function(){
        $("#nav .nav_bg").animate({
            attr:'x',
            target:20,
            fn:function(){
                $("#nav .white").animate({
                    attr:'x',
                    target:0
                })
            }
        });
        //document.getElementById("test").innerHTML+='a';
    });
});



















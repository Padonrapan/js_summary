/*
window.onload=function(){
    alert(document.body);
}

 $().ready(function(){
 alert(document.body);
 });
*/

$(function(){
	//个人中心
    $("#header .member").hover(function () {
        $(this).css('background', 'url(images/arrow2.png) no-repeat 55px center');
        $('#header .member_ul').show().animate({
            target:100,
            step:10,
            attr:'o',
            t:30
        });
    }, function () {
        $(this).css('background', 'url(images/arrow.png) no-repeat 55px center');
        $('#header .member_ul').animate({
            start:100,
            target:0,
            step:10,
            attr:'o',
            t:30,
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
    //test
    $("#test").click(function(){
        $(this).animate({
            t:30,
            step:10,
            target:300,
            attr:'x',
            //mul参数是个对象,只有两种值：属性和目标值

            mul:{
                w:300,          //宽变为300
                h:300,          //高变为300
                o:30,
                fontSize:100
            }

        });
    });
    /*
    $("#test").click(function(){
        var _this=this;
        $(_this).animate({
            attr:'font-size',
            target:300,
            step:10,
            t:50,
            fn:function(){
                $(_this).animate({
                    attr:'height',
                    target:300,
                    step:10,
                    t:50,
                });
            }
        });
    });
    */


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
			target:-211
		})
	});
});



















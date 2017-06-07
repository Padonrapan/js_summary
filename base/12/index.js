window.onload=function(){
    //个人中心下拉菜单
    $().getClass("member").hover(function(){
        //$().getClass("member").css("background","url(images/arrow2.png) no-repeat right center");
        //this.css("background","url(images/arrow2.png) no-repeat right center");//没有效果,因为这里的this不在this.elements中
        //alert(this);//HTML DIVelement
        $(this).css("background","url(images/arrow2.png) no-repeat right center");
        $().getClass("member_ul").show();
    },function(){
        //$().getClass("member").css("background","url(images/arrow.png) no-repeat right center");
        $(this).css("background","url(images/arrow.png) no-repeat right center");
        $().getClass("member_ul").hide();
    });

    //登录页+遮罩锁屏
            /*
            var top=(document.documentElement.clientHeight-250)/2;
            var left=(document.documentElement.clientWidth-350)/2;
            $().getId("login").css("top",top+"px").css("left",left+"px");//登录页居中设置,但是当屏幕大小变化时需刷新才会有效果，体验不好
            //添加重新计算屏幕大小事件
            window.onresize=function(){
                var top=(document.documentElement.clientHeight-250)/2;
                var left=(document.documentElement.clientWidth-350)/2;
                $().getId("login").css("top",top+"px").css("left",left+"px");
            }
            */
    var login=$().getId("login");
    var screen=$().getId("screen");
    login.center(350,250);
    $().resize(function(){
        login.center(350,250);
        if(login.css("display")=="block"){
            screen.lock();
        }
    });
    $().getClass("login").click(function(){
        login.css("display","block");
        screen.lock();

    });
    $().getClass("close").click(function(){
        login.css("display","none");
        screen.unlock();
    });
    //$().addRule(0, 'html', 'font-size:200px', 0);
    //$().removeRule(0);

};

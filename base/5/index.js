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
}

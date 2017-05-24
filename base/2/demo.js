//所谓连缀，最简单的理解就是一句话同时设置一个或多个节点两个或两个以上的操作。
//比如：
//$().getId('box').css('color', 'red').html('标题').click(function () {alert('a')});

/*
    基于Base对象核心库
    Base.getId('box')执行完后应该返回Base对象；
    Base.getId('box').css('color', 'red')执行完后也要返回Base对象；
    Base.getId('box').css('color', 'red').html('标题')执行完后也要返回Base对象；
    Base.getId('box').css('color', 'red').html('标题').click(function () {alert('a')});执行完后也要返回Base对象；

 */

window.onload=function(){
    //alert($().getTagName("p"));
    $().getId("box").css("backgroundColor","red");
    $().getTagName("p").css("color","yellow").html("hello").click(function(){
        alert("被点击了");
    }).css("backgroundColor","green");
};

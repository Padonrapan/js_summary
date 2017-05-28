

window.onload=function(){
    //$().getId("box").html("pox").css("color","blue");
    //alert($().getId("box").html()); //未给html()传参数,表示想要获取该节点的内容
    //$().getId("box").html("pox");//继续设置也不会受到影响
    //alert($().getId("box").css("color"));//获取行内的css属性
    //$().getId("box").css("color","red");/继续设置也不会受到影响
    //alert($().getId("box").css("fontSize"));//获取外部css属性
    //alert($().getClass("red").elements.length);
    //alert($().getClass("red").getElement(1).elements.length);
    $().getClass("red").getElement(1).css("color","blue");
};

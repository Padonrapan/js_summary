

window.onload=function(){
   //$().getId("box").css("color","red");//设置box本文颜色为红
   //$().getId("pox").css("color","blue");//本来想只设置pox为蓝色,但是因为Base.prototype.elements=[]为公有化方法,所以都变蓝了
                                            //解决方案，将Base.prototype.elements=[]私有化

    $().getId("box").addClass("a").addClass("b").removeClass("b");
};

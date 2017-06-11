/*
$(function(){
    var box=document.getElementById("box");
    //alert(getStyle(box,"left"));
    setInterval(function(){
        box.style.left=getStyle(box,"left")+1+"px";
    },50);
});
*/
$(function(){
    $("#button").click(function(){
        $("#box").animate({
            'target':10,
            'start':90,
            "step":7,
            "attr":"o",
            'type':1
        });
    });
});


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
            "start":100,
            'target':0,
            'alter':200,
            "step":7,
            "attr":"x",
            "speed":10
        });
    });
});


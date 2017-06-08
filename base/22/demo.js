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
            "alter":100,
            "attr":"top"
        });
    });
});


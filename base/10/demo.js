/*
window.onload=function(){
    alert("1");
};
window.onload=function(){
    alert("2");
};
window.onload=function(){
    alert("3");
};

addEvent(window,"load",function(){
    alert("1");
});
addEvent(window,"load",function(){
    alert("2");
});
addEvent(window,"load",function(){
    alert("3");
});
    */
window.onload=function(){
    var oButton=document.getElementById("button");
    addEvent(oButton,"click",fn);
    //removeEvent(oButton,"click",fn);
};
function fn(e){
    alert(e.clientX);
    //alert(this.value);//IE为"undefined",因为IE中的this指向window;用事件冒充call来解决
}
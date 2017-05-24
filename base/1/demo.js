
/*
//传统获取节点方式
window.onload=function(){
    alert(document.getElementById("box").innerHTML);
    alert(document.getElementsByName("sex")[0].value);
    alert(document.getElementsByTagName("p")[0].innerHTML);
}

//函数式
 window.onload=function(){
     alert(getId("box").innerHTML);
 }
*/


//对象式
window.onload=function(){
    alert(Base.getId("box").innerHTML);
    alert(Base.getName("sex").value);
    alert(Base.getTagName("P").innerHTML);
}

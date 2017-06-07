/*
//传统的DOM加载
window.onload=function(){
    var box=document.getElementById("box");
    alert(box.innerHTML);
};
//PS::等待文档的所有内容(包括图片,音频文件)加载完毕之后再执行onload里边的内容,当文件太大了，执行太慢


//现代DOM加载
addEvent(window,"DOMContentLoaded",function(){
    var box=document.getElementById("box");
    alert(box.innerHTML);
});
    //PS:当文档中有图片等大文件时,先执行节点操作的内容,然后再缓缓加载图片,也就是说当DOM树结构加载完毕后即可执行了


//IE使用传统的DOM加载
window.onload=function(){
    var box=document.getElementById("box");
    alert(box.innerHTML);
};
//PS:IE678不支持DOMContentLoaded



//IE678模拟DOMContentLoaded
document.write('<script id="ie_loaded" defer="defer" src="javascript:void(0)"></script>');
var ie_loaded=document.getElementById("ie_loaded");
ie_loaded.onreadystatechange=function(){
    //判断是否加载完毕DOM了
    if(this.readyState=="complete"){
        var box=document.getElementById("box");
        alert(box.innerHTML);
    }
};
//PS:有效,DOM加载完毕后执行了节点操作,并且后面才加载完毕图片
//PS:缺陷,如果有iframe标签,必须等iframe标签里边的内容加载完毕之后再执行节点


addEvent(window,"DOMContentLoaded",function(){
    var box=document.getElementById("box");
    alert(box.innerHTML);
});
//非IE得现在DOM加载事件,可以在iframe加载完毕之前执行


//使用doScroll
var timer=null;
timer=setInterval(function(){
    try{
        document.documentElement.doScroll("left");
        var box=document.getElementById("box");
        alert(box.innerHTML);
    }catch(e){};
});
//PS:可以解决iframe问题
*/



function addDomLoaded(fn) {
    if (document.addEventListener) {//W3C
        addEvent(document, 'DOMContentLoaded', function () {
            fn();
            removeEvent(document, 'DOMContentLoaded', arguments.callee);
        });
    } else {
        var timer = null;
        timer = setInterval(function () {
            try {
                document.documentElement.doScroll('left');
                fn();
            } catch (e) {};
        });
    }
}

addDomLoaded(function () {
    var box = document.getElementById('box');
    alert(box.innerHTML);
});

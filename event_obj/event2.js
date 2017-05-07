/*
//target属性:点击哪里获取哪里的DOM元素对对象
    PS:IE不支持terget属性;IE支持srcElement
    window.onload=function(){
    var box=document.getElementById("box");
        box.onclick=function(){
            alert(this);
        }
    }

    window.onload=function(){
        document.onclick=function(evt){     //并没有通过getElementById("box")来获取div,但通过target属性依旧可以获取到点击的元素节点
            var e=evt||window.event;
            //alert(e.target);              //非IE浏览器
            //alert(e.srcElement);          //IE浏览器
            alert(e.target||e.srcElement);//兼容各个浏览器
        }
    }


//事件冒泡,事件捕获
window.onload=function(){
    document.onclick=function(){
        alert("document");
    }
    document.documentElement.onclick=function(){                   //点击按钮会向外冒泡从而向外触发document
        alert("html");
    }
    document.body.onclick=function(){                               //点击按钮会向外冒泡从而触发html直至document才结束
        alert("body");
    }
    document.getElementById("box").onclick=function(){              //点击按钮会向外冒泡从而触发body直至document才结束
        alert("div");
    }
    document.getElementsByTagName("input")[0].onclick=function(){   //点击按钮会向外冒泡从而触发div直至document才结束
        alert("input");

    }
}


    //非IE取消冒泡方法stopPropagation()，IE取消冒泡cancelBubble=true
window.onload=function(){
    document.onclick=function(){
        alert("document");
    }
    document.documentElement.onclick=function(){
        alert("html");
    }
    document.body.onclick=function(){
        alert("body");
    }
    document.getElementById("box").onclick=function(){
        alert("div");
    }
    document.getElementsByTagName("input")[0].onclick=function(evt){
        var e=evt||window.event;
        alert("input");
        //e.stopPropagation();        //取消冒泡，非IE支持此方法
        //e.cancelBubble=true;        //IE支持
        alert(e.stopPropagation);
    }
}


//跨浏览器兼容
window.onload=function(){
    document.onclick=function(){
        alert("document");
    }
    document.documentElement.onclick=function(){
        alert("html");
    }
    document.body.onclick=function(){
        alert("body");
    }
    document.getElementById("box").onclick=function(){
        alert("div");
    }
    document.getElementsByTagName("input")[0].onclick=function(evt){
        alert("input");
        setStop(evt);
    }
}
function setStop(evt){
    var e=evt||window.event;
    (typeof e.stopPropagation=="function") ? e.stopPropagation() : e.cancelBubble=true;
}
 */


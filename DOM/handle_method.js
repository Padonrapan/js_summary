window.onload=function(){
    /*
    document.write("<p>测试write</p>");       //非DOM方法，一般用于测试
    */

    /*
    var p=document.createElement("p");        //只是创建了一个文本节点，并没有添加到文档中去
    var box=document.getElementById("box");
    box.appendChild(p);                         //添加到文档中的id="box"的div节点的末尾上
    var text=document.createTextNode("测试4");
    p.appendChild(text);                        //把文本添加到p里边
    */

    var p=document.createElement("p");
    var box=document.getElementById("box");
    box.parentNode.insertBefore(p,box);         //先索引到父节点；在box的父节点中添加一个p,再把该节点插入到box之前的位置
}

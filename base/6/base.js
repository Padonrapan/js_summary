var $=function(_this){
    return new Base(_this);      //防止多次连缀后面的效果覆盖前面的效果
};

//基础库
function Base(_this){
    //创建一个数组,来保存获取的节点和节点数组
    this.elements=[];
    if(_this!=undefined){   //_this是对象,undefined也是一个对象,区别于typeof返回的带引号的"undefined";
        this.elements[0]=_this;
    }
}



//获取id节点
Base.prototype.getId=function(id){
    this.elements.push(document.getElementById(id));
    return this;
};

//获取元素节点
Base.prototype.getTagName=function(name){
    for(var i=0;i<document.getElementsByTagName(name).length;i++){
        this.elements.push(document.getElementsByTagName(name)[i]);
    }
    return this;
};

//获取Clss节点
Base.prototype.getClass=function(className){
    var all=document.getElementsByTagName("*");
    for(var i=0;i<all.length;i++){
        if(all[i].className==className){
            this.elements.push(all[i]);
        }
    }
    return this;
};

//筛选某一节点
Base.prototype.getElement=function(num){
    var element=this.elements[num];
    this.elements=[];
    this.elements[0]=element;
    return this;
};

//添加class节点
Base.prototype.addClass=function(className){
    for(var i=0;i<this.elements.length;i++){
        if(!this.elements[i].className.match(new RegExp(/"(\\s|^)"+ className+"(\\s|$)"/))) {//避免叠加相同的class
            this.elements[i].className += " " + className;    //叠加class
        }
    }
    return this;
};

//移除Class
Base.prototype.removeClass = function (className) {
    for (var i = 0; i < this.elements.length; i ++) {
        if (this.elements[i].className.match(new RegExp('(\\s|^)' +className +'(\\s|$)'))) {
            this.elements[i].className = this.elements[i].className.replace(new RegExp('(\\s|^)' +className +'(\\s|$)'), ' ');
        }
    }
    return this;
};

//设置css
Base.prototype.css=function(attr,value){
    for(var i=0;i<this.elements.length;i++) {
        //当函数传递一个参数时，表示想要获取css属性值
        if(arguments.length==1){
            //获取行内的css属性
            //return this.elements[i].style[attr];

            //获取外部的css属性
            if(typeof window.getComputedStyle!="undefined"){
                return window.getComputedStyle(this.elements[i],null)[attr];
            }else if( typeof this.elements[i].currentStyle !="undefined"){
                return this.elements[i].currentStyle[attr];
            }
        }
        this.elements[i].style[attr] = value;
    }
    return this;
};

//设置innerHTML
Base.prototype.html=function(str){

    for(var i=0;i<this.elements.length;i++) {
        //当函数没有传参数时,表示想要获取该节点内容
        if(arguments.length==0){
            return this.elements[i].innerHTML;
        }
        this.elements[i].innerHTML=str;
    }
    return this;
};

//触发点击事件
Base.prototype.click=function(fn){
    for(var i=0;i<this.elements.length;i++) {
        this.elements[i].onclick=fn;
    }
    return this;
};

//设置鼠标移入移出方法
Base.prototype.hover=function(over,out){
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].onmouseover=over;
        this.elements[i].onmouseout=out;
    }
    return this;
};

//设置显示
Base.prototype.show=function(){
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].style.display="block";
    }
    return this;
};

//设置隐藏
Base.prototype.hide=function(){
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].style.display="none";
    }
    return this;
};

//设置屏幕居中
Base.prototype.center=function(width,height){
    var top=(document.documentElement.clientHeight-height)/2;
    var left=(document.documentElement.clientWidth-width)/2;
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].style.top=top+"px";
        this.elements[i].style.left=left+"px";
    }
    return this;
};

//设置浏览器屏幕触发
Base.prototype.resize=function(fn){
    window.onresize=fn;
    return this;
};
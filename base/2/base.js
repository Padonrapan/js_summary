function Base(){
    this.elements=[];
    this.getId=function(id){
        this.elements.push(document.getElementById(id));
        return this;
    };
    this.getTagName=function(name){
        for(var i=0;i<document.getElementsByTagName(name).length;i++){
            this.elements.push(document.getElementsByTagName(name)[i]);
        }
        return this;
    }
}

Base.prototype.css=function(attr,value){
    for(var i=0;i<this.elements.length;i++) {
        this.elements[i].style[attr] = value;
    }
    return this;
};
var $=function(){
    return new Base();      //防止多次连缀后面的效果覆盖前面的效果
};
Base.prototype.html=function(str){
    for(var i=0;i<this.elements.length;i++) {
        this.elements[i].innerHTML=str;
    }
    return this;
};
Base.prototype.click=function(fn){
    for(var i=0;i<this.elements.length;i++) {
        this.elements[i].onclick=fn;
    }
    return this;
};
﻿

//前台调用
var $ = function (args) {
	return new Base(args);
};

//基础库
function Base(args) {
	//创建一个数组，来保存获取的节点和节点数组
	this.elements = [];
	if(typeof args =="string"){
		switch(args.charAt(0)){
			case "#":
				this.elements.push(this.getId(args.substring(1)));
				break;
			case ".":
				this.elements=this.getClass(args.substring(1));
				break;
			default:
				this.elements=this.getTagName(args);
		}
	}else if(typeof args =="object") {
        if (args != undefined) {    //_this是一个对象，undefined也是一个对象，区别与typeof返回的带单引号的'undefined'
            this.elements[0] = args;
        }
    }
}

//获取ID节点
Base.prototype.getId = function (id) {
	this.elements.push(document.getElementById(id));
};

//获取元素节点数组
Base.prototype.getTagName = function (tag,parentNode) {
    var node = null;
    var temps=[];
    if (parentNode!=undefined) {
        node =parentNode;
    } else {
        node = document;
    }
    var tags = node.getElementsByTagName(tag);
    for (var i = 0; i < tags.length; i ++) {
            temps.push(tags[i]);
    }
    return temps;
};

//获取CLASS节点数组
Base.prototype.getClass = function (className,parentNode) {
	var node = null;
	var temps=[];
	if (parentNode!=undefined) {
		node =parentNode;
	} else {
		node = document;
	}
	var all = node.getElementsByTagName('*');
	for (var i = 0; i < all.length; i ++) {
		if (all[i].className == className) {
			temps.push(all[i]);
		}
	}
	return temps;
};

// 设置CSS选择器子节点
Base.prototype.find=function(str){
	var childElements=[];
	for(var i=0;i<this.elements.length;i++){
        switch(str.charAt(0)){
            case "#":
            	childElements.push(document.getElementById(str.substring(1)));
                break;
            case ".":
            	/*
                var all = this.elements[i].getElementsByTagName('*');
                for (var j = 0; j < all.length; j++) {
                    if (all[j].className == str.substring(1)) {
                        childElements.push(all[j]);
                    }
                }
                */
            	var temps=this.getClass(str.substring(1),this.elements[i]);
            	for(var j=0;j<temps.length;j++){
            		childElements.push(temps[j]);
				}
                break;
            default:
            	/*
                var tags=this.elements[i].getElementsByTagName(str);
                for(var j=0;j<tags.length;j++){
                    childElements.push(tags[j]);
				}
				*/
            	var temps=this.getTagName(str,this.elements[i]);
                for(var j=0;j<temps.length;j++){
                    childElements.push(temps[j]);
                }

        }
	}
	this.elements=childElements;
	return this;

};

//获取某一个节点,并获取Base对象
Base.prototype.getElement = function (num) {	
	return this.elements[num];
};
//获取某一个节点,并获取Base对象
Base.prototype.eq = function (num) {
    var element = this.elements[num];
    this.elements = [];
    this.elements[0] = element;
    return this;
};

//设置CSS
Base.prototype.css = function (attr, value) {
	for (var i = 0; i < this.elements.length; i ++) {
		if (arguments.length == 1) {
			return getStyle(this.elements[i], attr);
		}
		this.elements[i].style[attr] = value;
	}
	return this;
}

//添加Class
Base.prototype.addClass = function (className) {
	for (var i = 0; i < this.elements.length; i ++) {
		if (!hasClass(this.elements[i], className)) {
			this.elements[i].className += ' ' + className;
		}
	}
	return this;
}

//移除Class
Base.prototype.removeClass = function (className) {
	for (var i = 0; i < this.elements.length; i ++) {
		if (hasClass(this.elements[i], className)) {
			this.elements[i].className = this.elements[i].className.replace(new RegExp('(\\s|^)' +className +'(\\s|$)'), ' ');
		}
	}
	return this;
}

//添加link或style的CSS规则
Base.prototype.addRule = function (num, selectorText, cssText, position) {
	var sheet = document.styleSheets[num];
	insertRule(sheet, selectorText, cssText, position);
	return this;
}

//移除link或style的CSS规则
Base.prototype.removeRule = function (num, index) {
	var sheet = document.styleSheets[num];
	deleteRule(sheet, index);
	return this;
}

//设置innerHTML
Base.prototype.html = function (str) {
	for (var i = 0; i < this.elements.length; i ++) {
		if (arguments.length == 0) {
			return this.elements[i].innerHTML;
		}
		this.elements[i].innerHTML = str;
	}
	return this;
}

//设置鼠标移入移出方法
Base.prototype.hover = function (over, out) {
	for (var i = 0; i < this.elements.length; i ++) {
		addEvent(this.elements[i], 'mouseover', over);
		addEvent(this.elements[i], 'mouseout', out);
	}
	return this;
};

//设置显示
Base.prototype.show = function () {
	for (var i = 0; i < this.elements.length; i ++) {
		this.elements[i].style.display = 'block';
	}
	return this;
}

//设置隐藏
Base.prototype.hide = function () {
	for (var i = 0; i < this.elements.length; i ++) {
		this.elements[i].style.display = 'none';
	}
	return this;
}

//设置物体居中
Base.prototype.center = function (width, height) {
	var top = (getInner().height - 250) / 2;
	var left = (getInner().width - 350) / 2;
	for (var i = 0; i < this.elements.length; i ++) {
		this.elements[i].style.top = top + 'px';
		this.elements[i].style.left = left + 'px';
	}
	return this;
}

//锁屏功能
Base.prototype.lock = function () {
	for (var i = 0; i < this.elements.length; i ++) {
		this.elements[i].style.width = getInner().width + 'px';
		this.elements[i].style.height = getInner().height + 'px';
		this.elements[i].style.display = 'block';
		document.documentElement.style.overflow = 'hidden';
		/*
		addEvent(this.elements[i], 'mousedown', function (e) {
			e.preventDefault();
			addEvent(document, 'mousemove', function (e) {
				e.preventDefault();
			});
		});
		*/
		addEvent(window, 'scroll', scrollTop);
	}
	return this;
};

Base.prototype.unlock = function () {
	for (var i = 0; i < this.elements.length; i ++) {
		this.elements[i].style.display = 'none';
		document.documentElement.style.overflow = 'auto';
		removeEvent(window, 'scroll', scrollTop);
	}
	return this;
}

//触发点击事件
Base.prototype.click = function (fn) {
	for (var i = 0; i < this.elements.length; i ++) {
		this.elements[i].onclick = fn;
	}
	return this;
}

//触发浏览器窗口事件
Base.prototype.resize = function (fn) {
	for (var i = 0; i < this.elements.length; i ++) {
		var element = this.elements[i];
		addEvent(window, 'resize', function () {
			fn();
			if (element.offsetLeft > getInner().width - element.offsetWidth) {
				element.style.left = getInner().width - element.offsetWidth + 'px';
			}
			if (element.offsetTop > getInner().height - element.offsetHeight) {
				element.style.top = getInner().height - element.offsetHeight + 'px';
			}
		});
	}
	return this;
};
//插件入口
Base.prototype.extend=function(name,fn){
	Base.prototype[name]=fn;
};

/*
//拖拽功能
Base.prototype.drag = function () {

};
*/















/*
//一、relatedTarget和fromElement属性

function addEvent(obj,type,fn){
    if(obj.addEventListener){
        obj.addEventListener(type,fn,false);
    }else if(obj.attachEvent){
        obj.attachEvent("on"+type,fn);
    }
}

function removeEvent(obj,type,fn){
    if(obj.removeEventListener){
        obj.removeEventListener(type,fn,false);
    }else if(obj.detachEvent){
        obj.detachEvent("on"+type,fn);
    }
}

            addEvent(window,"load",function(){
                var box=document.getElementById("box");
                //PS:W3C的mouseover，mouseout
                    //addEvent(box,"mouseover",function(evt){
                    //    alert(evt.relatedTarget);   //mouseover鼠标事件中relatedTarget属性得到移入box最近的那个DOM对象
                    //});
                    //addEvent(box,"mouseout",function(evt){
                    //    alert(evt.relatedTarget);   //mouseout鼠标事件中relatedTarget属性得到移出box最近的那个DOM对象
                    //})
                //PS:IE的mouseover，mouseout
                    //addEvent(box,"mouseover",function(){
                    //    alert(window.event.fromElement);
                    //})
                    //addEvent(box,"mouseout",function(){
                    //    alert(window.event.toElement);
                    //})

            });

            //跨浏览器兼容
            addEvent(window,"load",function(){
                var box=document.getElementById("box");
                addEvent(box,"mouseout",function(evt){
                    alert(getTarget(evt));
                })
            });
            function getTarget(evt){
                var e=evt||window.event;
                if(e.srcElement){
                    if(e.type=="mouseover"){
                        return e.fromElement;
                    }else if(e.type=="mouseout"){
                        return e.toElement;
                    }
                }else if(e.Target){
                    return e.relatedTarget;
                }
            }

/*
    //二、阻止事件的默认行为

    function addEvent(obj,type,fn){
        if(obj.addEventListener){
            obj.addEventListener(type,fn,false);
        }else if(obj.attachEvent){
            obj.attachEvent("on"+type,fn);
        }
    }

    function removeEvent(obj,type,fn){
        if(obj.removeEventListener){
            obj.removeEventListener(type,fn,false);
        }else if(obj.detachEvent){
            obj.detachEvent("on"+type,fn);
        }
    }
    addEvent(window,"load",function(){
        var link=document.getElementsByTagName("a")[0];
        /*
        link.onclick=function(){                    //传统的事件处理函数用返回false取消事件的默认行为
            alert("hello");
            //return true;
            return false;
        }
        //PS:return false不好的原因：必须放在函数最后，如果前面一旦出现了return true导致根本无法阻止默认行为；放到前面，后面的额代码又无法执行
        */

        /*
        addEvent(link,"click",function(evt){
            evt.preventDefault();                   //W3C阻止事件的默认行为方法preventDefault()
            alert("hello");//后面的代码仍然可以执行
        })
        */
        /*
        addEvent(link,"click",function(){
            window.event.returnValue=false;     //IE阻止事件的默认行为方法:设置属性returnValue=false
            alert("hello");//后面的代码仍然可以执行
        })
        */
    /*
        //跨浏览器兼容
        addEvent(link,"click",function(evt){
            preDef(evt);
        });
    });
    function preDef(evt){
        var e=evt||window.event;
        if(e.preventDefault){
            e.preventDefault();
        }else{
            e.returnValue=false;
        }
    }

    //三、上下文菜单事件:contextmenu;
    function addEvent(obj,type,fn){
        if(obj.addEventListener){
            obj.addEventListener(type,fn,false);
        }else if(obj.attachEvent){
            obj.attachEvent("on"+type,fn);
        }
    }


    function preDef(evt){
        var e=evt||window.event;
        if(e.preventDefault){
            e.preventDefault();
        }else{
            e.returnValue=false;
        }
    }
    addEvent(window,"load",function(){
        var text=document.getElementById("text");
        addEvent(text,"contextmenu",function(evt){
            var e=evt||window.event;
            preDef(evt);
            var menu=document.getElementById("menu");
            menu.style.display="block";
            menu.style.left=e.clientX + "px";
            menu.style.top=e.clientY+ "px";
            addEvent(document,"click",function(){
                menu.style.display="none";
            })

        })
    })

    //卸载前事件beforeunload
    function addEvent(obj,type,fn){
        if(obj.addEventListener){
            obj.addEventListener(type,fn,false);
        }else if(obj.attachEvent){
            obj.attachEvent("on"+type,fn);
        }
    }

    function preDef(evt){
        var e=evt||window.event;
        if(e.preventDefault){
            e.preventDefault();
        }else{
            e.returnValue=false;
        }
    }
    addEvent(window,"beforeunload",function(evt){               //beforeunload是window下事件
        preDef(evt);
    });

    //PS:IE和firefox支持；chrome不支持;不知道为什么？？？？
    */

   //滚轮事件"mousewheel"（IE和Chrome支持）、"DOMMousEScroll"火狐支持；
    function addEvent(obj,type,fn){
        if(obj.addEventListener){
            obj.addEventListener(type,fn,false);
        }else if(obj.attachEvent){
            obj.attachEvent("on"+type,fn);
        }
    }

    function preDef(evt){
        var e=evt||window.event;
        if(e.preventDefault){
            e.preventDefault();
        }else{
            e.returnValue=false;
        }
    }
    addEvent(document,"DOMMouseScroll",function(evt){
        var e=evt||window.event;
        alert(e.detail);
    });

/*
//一、传统事件绑定
                window.onload=function(){
                    alert("hello");
                }

                window.onload=function(){
                    alert("world");
                }               //world; 这个事件处理函数会覆盖前面的事件处理函数,函数没有重载
            alert(typeof window.onload);        //function；函数没有重载


            //解决覆盖问题
                window.onload=function(){
                    alert("hello");
                }
                if(typeof window.onload=="function"){
                    var saved=null;
                    saved=window.onload;
                }
                window.onload=function(){
                    if(saved);
                    saved();            //saved是window.onload,所以saved()相当于执行window.onload=function(){};执行上一个事件
                    alert("world");    //执行本事件
                }

         //一.2事件切换器
         window.onload=function(){
             var box=document.getElementById("box");
             // box.onclick=function(){                 //缺点1：被下面的toBlue覆盖
             //    alert("hello");
             //}
             //box.onclick=toBlue;//this指向box
             box.onclick=function(){                 //改进方法：两个绑定事件写在一起，(缺点2:)可读性下降
                alert("hello");                      //只执行一次,因为下面的toBlue里边的onclick又会覆盖掉
                 //toBlue();   //并不执行,因为通过匿名函数来执行某一函数,那么里面的this指针指向window; box.onclick=toBlue里的this才指向box,需用call()来改变指向
                 //缺点3:this传递问题
                 toBlue.call(this);
              }
         }
         function toRed(){
             this.className = "red";
             this.onclick=toBlue;
          }
         function toBlue(){
             this.className = "blue";
             this.onclick=toRed;
         }


 //二、1自定义添加事件函数
         //对比传统事件绑定：obj相当于window;type相当于onload;fn相当于function(){};
         function addEvent(obj,type,fn){
             //用于保存上一个事件
             var saved=null;
             //判断上一个事件是否存在
             if(typeof obj["on"+type]=="function"){
                saved=obj["on"+type];       //保存上一个事件
             }
             //执行事件
             obj["on"+type]=function(){
                 if(saved) {
                    saved();                //执行上一个事件
                 }
                 fn();                      //执行本次事件
              }
         }

         addEvent(window,"load",function(){
            alert("hello");
         });
         addEvent(window,"load",function(){
            alert("html");
         });
         addEvent(window,"load",function(){
            alert("javascript");
         });
         //改进后：解决覆盖问题


 //二.2事件切换函数
         function addEvent(obj,type,fn){
             var saved=null;
             if(typeof obj["on"+type]=="function"){
                saved=obj["on"+type];
             }
             obj["on"+type]=function(){
                if(saved) {
                    saved();
                 }
             fn.call(this);                          //传递this
             }
         }
         addEvent(window,"load",function(){
             var box=document.getElementById("box");
             addEvent(box,"click",toBlue);                   //要把toBlue里的this指向box；
         });
         function toRed(){
             this.className = "red";
             //this.onclick=toBlue;      传统绑定
             //改为函数
             addEvent(this,"click",toBlue);
         }
         function toBlue(){
             this.className = "blue";
             //this.onclick=toBlue;      传统绑定
             //改为函数
             addEvent(this,"click",toRed);
         }




        function addEvent(obj,type,fn){
            var saved=null;
            if(typeof obj["on"+type]=="function"){
                saved=obj["on"+type];
            }
            obj["on"+type]=function(){
                if(saved) {
                    saved();
                }
                fn.call(this);
            }
        }
        addEvent(window,"load",function(){
            var box=document.getElementById("box");
            addEvent(box,"click",function(){
                alert("hello");
            });                          //改进后:解决可读性问题，并且不会覆盖，每次都可以执行
            addEvent(box,"click",toBlue);
        });
        function toRed(){
            this.className = "red";
            addEvent(this,"click",toBlue);
        }
        function toBlue(){
            this.className = "blue";
            addEvent(this,"click",toRed);
        }
        //当不停地切换的时候，浏览器会卡死，并报错：too much recursion太多的递归
        //因为积累了太多的事件
        //解决方案：用完的事件就里立刻移除


        //二.3自定义移除事件函数
        function removeEvent(obj,type){
            if(obj["on"+type]){
                obj["on"+type]=null;        //手动移除已经执行的绑定事件
            }
        }
        function addEvent(obj,type,fn){
            var saved=null;
            if(typeof obj["on"+type]=="function"){
                saved=obj["on"+type];
            }
            obj["on"+type]=function(){
                if(saved) {
                    saved();
                }
                fn.call(this);
            }
        }
        addEvent(window,"load",function(){
            var box=document.getElementById("box");
            addEvent(box,"click",toBlue);
        });
        function toRed(){
            this.className = "red";
            removeEvent(this,"click");
            addEvent(this,"click",toBlue);
        }
        function toBlue(){
            this.className = "blue";
            removeEvent(this,"click");
            addEvent(this,"click",toRed);
        }


    //三.1W3C的事件绑定机制：事件添加函数obj.addEventListener("click",function(){},flase)冒泡为false，捕获为true
    //W3C事件移除函数obj.removeEventListener(click",function(){},flase)
            //1.覆盖问题,解决
        window.addEventListener("load",function(){
            alert("hello html");
        },false);
        window.addEventListener("load",function(){
            alert("hello javascript");
        },false);
        window.addEventListener("load",function(){
            alert("hello css");
        },false);
*/
/*
            //2.相同函数屏蔽问题,解决
        function init(){
            alert("hello html");
        }
        window.addEventListener("load",init,false);
        window.addEventListener("load",init,false);
        window.addEventListener("load",init,false);
                    //三个相同函数只执行一次
*/

/*
            //3.是否可以传递this,解决
        window.addEventListener("load",function() {
            var box = document.getElementById("box");
            box.addEventListener("click", toBlue, false);
        },false);
        function toRed(){
            this.className = "red";
            this.removeEventListener("click",toRed,false);
            this.addEventListener("click",toBlue,false);
        }
        function toBlue(){
            this.className = "blue";
            this.removeEventListener("click",toBlue,false);
            this.addEventListener("click",toRed,false);
        }

            //4添加一个额外的方法会不会被覆盖或者只能执行一次,解决
        window.addEventListener("load",function() {
            var box = document.getElementById("box");
            box.addEventListener("click",function(){
                alert("hello js");
            },false);
            box.addEventListener("click", toBlue, false);
        },false);
        function toRed(){
            this.className = "red";
            this.removeEventListener("click",toRed,false);
            this.addEventListener("click",toBlue,false);
        }
        function toBlue(){
            this.className = "blue";
            this.removeEventListener("click",toBlue,false);
            this.addEventListener("click",toRed,false);
        }
        //W3C事件添加函数比较完美地解决了这些问题，非常好用
        PS:但是IE8及以下版本不支持；IE9以上支持
*/


/*
                //三.1.1冒泡和捕获

    window.addEventListener("load",function() {
        var box = document.getElementById("box");
        box.addEventListener("click",function(){
            alert("DIV");
        },true);
        document.addEventListener("click",function(){
            alert("document");
        }, true);
    },false);
    //W3C既可以设置冒泡，也可以设置捕获；但是一般不设置捕获
*/
/*
        //三.2 IE的事件绑定机制：事件添加函数attachEvent()和移除事件函数detachEvent()
            //1覆盖问题,是解决了,但执行顺序是反着的
            window.attachEvent("onload",function(){
                alert("hello html");
            });
            window.attachEvent("onload",function(){
                alert("hello js");
            });
            window.attachEvent("onload",function(){
                alert("hello css");
            });
*/
/*
            //2.相同函数屏蔽问题,不能解决
            function init(){
                alert("hello html");
            }
            window.attachEvent("onload",init);
            window.attachEvent("onload",init);
            window.attachEvent("onload",init);
*/
/*
            //3.是否可以传递this,不能解决
            window.attachEvent("onload",function() {
                var box = document.getElementById("box");
                box.attachEvent("onclick", function(){
                    alert(this);        //object window  而不是object box;
                });
            });
*/

            //4添加一个额外的方法会不会被覆盖或者只能执行一次,解决
            window.attachEvent("onload",function() {
                var box = document.getElementById("box");
                box.attachEvent("onclick",function(){
                    alert("hello js");
                });
                box.attachEvent("onclick", function(){
                    alert("hello html")
                });
            });

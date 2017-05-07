/*
    window.onload=function(){
         function box(){
         alert(arguments.length);
         }
         //box(1,2);       //2
         box();      //0        //没有参数传递
    }



    window.onload=function(){
        document.onclick=function(){
            alert(arguments.length);    //1;如果是时间处理函数绑定的函数,浏览器会默认绑传递一个参数，该参数为相应的事件对象
            alert(arguments[0]);//mouseevent;鼠标事件对象
        }
    }

    window.onload=function(){
        document.onkeydown=function(){
            alert(arguments.length);    //1;如果是时间处理函数绑定的函数,浏览器会默认绑传递一个参数，该参数为相应的事件对象
            alert(arguments[0]);//onkeyboardeven;键盘事件对象
        }
    }


    window.onload=function(){
        document.onclick=function(evt){
            alert(evt);         //比使用arguments[0]隐藏对象来得方便；但是这是W3C标准，IE不支持
        }
    }

    window.onload=function(){
        document.onclick=function(e){
            e=window.event;
            alert(e);         //IE支持window.event
        }
    }

     //实现兼容
     window.onload=function(){
         document.onclick=function(evt){
         var e=evt||window.event;
         alert(e);         //IE支持window.event
         }
     }

     window.onload=function(){
         document.onmouseup=function(evt){
         var e=evt||window.event;
         alert(e.button);         //W3C:左0；滚轮1；右2；IE:左1;滚轮4;右2;
        }
     }

     //PS：window.event IE支持,Chrome也是支持的；Chrome还支持W3C，如果两者都支持的话window.button的值已W3C为准

     //跨浏览器兼容
     window.onload=function(){
         document.onmouseup=function(evt){
         alert(getButton(evt));         //W3C:左0；滚轮1；右2；IE:左1;滚轮4;右2;
         }
     }
     function getButton(evt){
         var e=evt||window.event;
         if(evt){
            return e.button;
         }
         else if(window.event){
             switch(e.button){
                 case 1:
                    return 0;
                 case 2:
                    return 2;
                 case 4:
                    return 1;
             }
        }
     }



//可视区及距屏幕距离
    window.onload=function(){
        document.onclick=function(evt){
            var e=evt||window.event;
            alert(e.clientX+','+ e.clientY);        //距离页面左边和顶端的可视化距离
            alert(e.clientX+document.documentElement.scrollTop+','+ e.clientY);     //距离页面左边和顶端的实际距离
            //Chrome不支持document.documentElement.scrollTop,要用document.body.scrollTop
        }
    }


 //修改键；判断是否按下了某些修改键
     window.onload=function(){
         document.onkeydown=function(evt){
         alert(getKeys(evt));
         }
     }
     function getKeys(evt){
         var e=evt||window.event;
         var keys=[];
         if(e.shiftKey){
             keys.push("shift");
             }
         if(e.ctrlKey){
             keys.push("ctrl");
             }
         if(e.altKey){
             keys.push("alt");
             }
        return keys;
     }

*/

//键盘事件：键码keyCode;字符编码charCode
        //发生键盘事件(onkeydown和onkeyup)时,event对象的keyCode属性中包含一个代码,与键盘上的一个特定的键相对应,可以返回任意键的编码,不认识大小写

    window.onload=function(){
        document.onkeydown=function(evt){
            var e=evt||window.event;
            alert(e.keyCode);
        }
    }
        //charCode,这个属性只在发生onkeypress事件时才包含值,这个值是按下的键所代表的ASCII编码
    window.onload=function(){
        document.onkeypress=function(evt){
            var e=evt||window.event;
            alert(e.charCode);          //firefox,Chrome和safari支持charCode属性，IE和opera不支持
        }
    }

    //跨浏览器兼容
    window.onload=function(){
        document.onkeypress=function(evt){
            var e=evt||window.event;
           // alert(getCharCode(evt));
            alert(String.fromCharCode(getCharCode(evt)));
        }
    }
    function getCharCode(evt){
        var e=evt||window.event;
        if(typeof e.charCode=="number" ){
            return e.charCode;
        }
        else{
            return e.keyCode;
        }
    }
/*
//获取form对象的方法
    addEvent(window,"load",function(){
            var fm;
            //fm=document.getElementById("myForm");
            //fm=document.getElementsByTagName("form")[0];
            //fm=document.forms[0];     //HTML DOM通过0下标获取
            //fm=document.forms["yourForm"];    //HTML DOM通过name下标获取
            fm=document.yourForm;   //不推荐使用；低版本兼容方法
            alert(fm);
    });
*/

addEvent(window,"load",function(){
    var fm=document.getElementById("myForm");
   /*

    //取消submit的默认事件(即默认的提交行为)
    addEvent(fm,"submit",function(evt){
        preDef(evt);
    });
    //PS:submit事件的传统事件处理函数为:fm.onsubmit=function(){}
    //疑问:submit事件为什么是由form来触发,而不是由input中的submit按钮来触发？？？
    */

    /*
       var sub=document.getElementById("sub");
       addEvent(sub,"submit",function(evt){
           preDef(evt);
       });  //PS:把submit事件注册到input的submit按钮，是无法触发submit事件的
    //PS:必须把submit事件绑定到form对象上，才可以触发submit事件
    //PS:只不过触发submit事件的流程是通过点击submit按钮来实现而已
    */

    /*
    //使用fm.submit()使非submit按钮提交表单;使用submit()方法自定义触发事件
    var span=document.getElementsByTagName("span")[0];
    addEvent(span,"click",function(){
        fm.submit();        //可以让非submit按钮提交提交表单；必须是fm.submit
    });
    */

    //使用ctrl+Enter对页面进行提交
        addEvent(document,"keydown",function(evt){
            var e=evt||window.event;
            if(e.ctrlKey&&e.keyCode==13){
                fm.submit();
            }
        })
    });
    //尽量不要在表单中使用name="submit"和id="submit"，这样会和submit()方法冲突,导致表单不能提交


/*
       //内联模型。onclick是时间处理函数
        <input type="button"  value="按钮" onclick="alert('我是按钮');"/>  //第一种

        <input type="button"  value="按钮" onclick="box();"/>     //第二种
         function box(){
         alert("我是按钮");
         }

                //把box()放在匿名函数里边，onclick="box()"就访问不到了，相当于闭包；因此下面的代码执行没有效果
                 window.onload=function(){       //window.onload指的是等页面加载完毕之后再执行这个函数
                     function box(){
                     alert("我是按钮");
                     }
                }

                 window.onload=function(){       //window.onload指的是等页面加载完毕之后再执行这个函数
                 }
                 function box(){                 //如果放在匿名函数里边就访问不到了
                 alert("我是按钮");
                }

       //脚本模型
                 window.onload=function(){
                     var input=document.getElementsByTagName("input")[0];
                     //对象.事件处理函数=匿名函数或函数名
                     input.onclick= function(){             //匿名函数
                         alert("我是按钮");
                     }
                 }

                 window.onload=function(){
                     var input=document.getElementsByTagName("input")[0];
                     //对象.事件处理函数=匿名函数或函数名
                     input.onclick=box;                  //函数名；后面不加括号；加括号的话在页面加载时就会自动执行了，点击按钮没效果
                     function box(){
                         alert("我是按钮");
                     }
                 }

//事件（on+事件名称）
        鼠标事件
                单机click
                 window.onload=function(){
                     var input=document.getElementsByTagName("input")[0];
                     //对象.事件处理函数=匿名函数或函数名
                     input.onclick= function(){             //匿名函数
                     alert("我是按钮");
                     }
                 }
               双击dblclick
                 window.onload=function(){
                     var input=document.getElementsByTagName("input")[0];
                     //对象.事件处理函数=匿名函数或函数名
                     input.ondblclick= function(){             //匿名函数
                     alert("我是按钮");
                     }
                 }
            mousedown当鼠标按下但没有松开时

            mouseout当鼠标从按钮上移开时

            mousemove当鼠标移到按钮上时

            keydown当按下键盘上的任意键时
                 window.onload=function(){
                     var input=document.getElementsByTagName("input")[0];
                     //对象.事件处理函数=匿名函数或函数名
                     onkeydown= function(){             //键盘事件，因此不需要在对象下，可以用window.onkeydown
                     alert("我是按钮");
                     }
                 }

            keypress当按下键盘上的字符键时

            keyup当按下键盘上的键盘松开时

       HTML事件
            load事件

            select事件:当用户选定文本框(input或者textarea)中的一个或多个字符时失去焦点时触发
                 window.onload=function(){
                     var input=document.getElementsByTagName("input")[0];
                     //对象.事件处理函数=匿名函数或函数名
                     input.onselect= function(){             //匿名函数
                     alert("我是按钮");
                     }
                 }

           change事件:当文本框(input或者textarea)内容改变且失去焦点时触发

           focus事件:当页面或元素获得焦点时在页面或元素上触发

           blur事件：当页面或元素失去焦点时在页面或元素上触发

           submit事件:当用户点击提交按钮在<form>元素上触发
                 window.onload=function(){
                     var input=document.getElementsByTagName("input")[0];
                     var form=document.getElementsByTagName("form")[0];      //form上触发
                     //对象.事件处理函数=匿名函数或函数名
                     form.onsubmit= function(){             //form上触发
                     alert("我是按钮");
                     }
                 }
          reset事件:当用户点击重置按钮在<form>元素上触发

          resize事件:当窗口或框架的大小变化时window或框架上触发
                 window.onload=function(){
                     var input=document.getElementsByTagName("input")[0];
                     var form=document.getElementsByTagName("form")[0];
                     //对象.事件处理函数=匿名函数或函数名
                     window.onresize= function(){             //在window上触发
                     alert("我是按钮");
                     }
                 }

          scroll事件:当用户的滚动带滚动条的元素时触发
 */


window.onload=function(){
    var input=document.getElementsByTagName("input")[0];
    var form=document.getElementsByTagName("form")[0];      //form上触发
    //对象.事件处理函数=匿名函数或函数名
    window.onresize= function(){             //匿名函数
        alert("我是按钮");
    }
}


//value的获取
    /*
    addEvent(window,"load",function(){
        var fm=document.getElementById("myForm");
        var user=fm.elements["user"];
        var context=fm.elements["context"];
        //使用HTML DOM获取
            //alert(user.value);
            //alert(context.value);
            alert(user.defaultValue);//获取一开始的value值，在页面上更改值并不会改变defaultValue的值；

            //PS:HTML中input标签有value属性,textarea标签没有value属性
            //PS:js中input和textarea都有value属性

        //使用标准DOM获取
            //alert(user.getAttribute("value"));
            //alert(context.getAttribute("value"));//兼容性会有问题,非IE获取不到,IE获取得到
            //还有一个问题:标注DOM不能及时获取到更改的value

        //PS:在表单中,要获取value值,推荐用HTML DOM
    })
*/

//选定文本方法
/*
addEvent(window,"load",function(){
    var fm=document.getElementById("myForm");
    var user=fm.elements["user"];
    var context=fm.elements["context"];

    //非IE
        //user.select();                  //select()选定全部文本
        //user.setSelectionRange(0,1);    //非IE支持,新版本的浏览器需要先使用select()选定文本之后,再使用setSelectionRange(0,1)
                                    //可选定从第0个位置到第1个位置的文本

    //IE
        var range=user.createTextRange();   //创建文本范围对象
        range.collapse(true);               //将文本指针指向开头
        range.moveStart('character',0);    //从第0个位置开始逐字移动
        range.moveEnd('character',2);      //逐字移动至第1个位置；
        range.select();
        //不知道为什么我的电脑上的360不支持，IE支持？？？？？？可能版本问题

        //PS:setSelectionRange(n,m)从第n个位置到第m个位置；IE是从第n个位置选择m个文本

});
*/

/*
//跨浏览器兼容选择部分文本
addEvent(window,'load',function(){
    var fm=document.getElementById("myForm");
    var user=fm.elements["user"];
    var context=fm.elements["context"];
    getSelectText(user,1,3);
});

function getSelectText(text,start,stop){
    if(text.select){
        text.select();
        text.setSelectionRange(start,stop);
    }else if(text.createTextRange){
        var range=text.createTextRange();
        range.collapse(true);
        range.moveStart('character',start);
        range.moveEnd('character',stop-start);
        range.select();
    }
}       //不知道为什么我的电脑上的IE不支持，360支持？？？？？？

*/

/*
//select事件:当选定文本时触发
addEvent(window,'load',function(){
    var fm=document.getElementById("myForm");
    var user=fm.elements["user"];
    var context=fm.elements["context"];
    addEvent(user,'select',function(){
        alert(this.value);
    });         //;注意IE和非IE的区别,非IE释放鼠标时触发,IE只要一选到文本就触发
});
*/

//取得选择的文本:非IE利用selectionStart和selectionEnd属性
addEvent(window,'load',function(){
    var fm=document.getElementById("myForm");
    var user=fm.elements["user"];
    var context=fm.elements["context"];
    addEvent(user,'select',function(){
        /*
        //非IE
            //alert(this.selectionStart);     //获取选定文本的起始位置
            //alert(this.selectionEnd);       //获取选定文本的结束位置
            //alert(this.value.substring(this.selectionStart,this.selectionEnd));


        //IE使用selection对象,这个对象属于document
        //alert(document.selection.createRange().text);
            //document.selection对象可以选择
            //document.selection对象有一个方法可以创建文本范围对象：createRange()
        */

        //跨浏览器兼容
        document.getElementById("p").innerHTML=getSelectText(user);
    });
        function getSelectText(text){
            if(typeof text.selectionStart=="number"){       //用typeof来判断
                return text.value.substring(text.selectionStart,text.selectionEnd);
            }else if(document.selection) {
                return document.selection.createRange().text;
            }
        }
});

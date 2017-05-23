/*
window.onload=function() {
    try {
        window.abcde();
    } catch (e) {          //e表示接收的错误对象,
        //alert(e);       //打印错误对象,会输出错误信息
        alert(e.name);      //打印错误名称
        alert(e.message);//打印错误信息,message属性是跨浏览器最好的
    }

//PS:try表示尝试着执行里边的代码,如果有错误就去执行catch里边的代码
    alert("hello");
}
    */

/*
function box(){
    try{
        var b={};
        window.abcde();
    }catch(e){
        alert(e);
        return ;        //因为执行了catch说明有错误,那么继续往下执行还是会出错,所以就返回了
    }finally{
        alert("不管怎么样,我这里都会执行");
        alert("hello");
        b=null;
    }
}

box();
    */

//new Array(-5);  //RangeError: invalid array length范围错误
//var box=x; //ReferenceError: x is not defined引用错误,变量未定义
//a $ b;//SyntaxError: missing ; before statement语法错误
/*
try{
    //new 10;
    afasdf;
}catch(e){
    if(e instanceof TypeError){
        alert("类型错误:"+e.message);
    }else{
        alert("未知错误:"+e.message);
    }
}

//相等和全等
alert(1=="1");  //true相等比的是值,类型不比较
alert(1==="1");  //false全等需比较类型
alert(1==true); //true,1会隐性转化为布尔类型
alert(1===true);    //false,1本身是数值,true本身是布尔类型

var num1=1;
alert(num1 instanceof Number);
var num2="b";
alert(num1+num2);
console.error("错误");
console.info("信息");
console.log("日志");
console.warn("警告");
*/
addEvent(window,'load',function(){
    var box=document.getElementById("box");
    addEvent(box,"click",function(){
        this.innerHTML="被点了";
    })
})
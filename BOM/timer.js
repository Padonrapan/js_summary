//window对象之定时器：超时调用和间歇调用
    /*
    //超时调用：setTimeout()接收两个参数，第一个参数可以是字符串，而里边是代码块，因为它有解析功能，所以里边的代码块可以执行
    //setTimeout("alert('Lee')",2000);  //第一个参数是字符串代码块；第二个参数是时间，单位毫秒
                //不推荐上面这种写法，容易出错，不好扩展

    var box=function(){
        alert("Lee");
    }
    setTimeout(box,2000);//第一个参数也可以是函数；函数不需要加后面的括号,加括号会立即执行，起不到定时的作用


    setTimeout(function(){
        alert("Lee");
    },2000);                            //也可以这样写（推荐），扩展性号，封装性好

        //调用setTimeout()之后，会返回一个数值ID，表示超时调用，这是ID是计划执行代码的唯一标识符，可以用clearTimeout()取消
    var timer=setTimeout(function(){    //返回超时调用器的数字ID
        alert("Lee");
    },2000);
    alert(timer);  //1，此处的ID值为,1
    clearTimeout(timer); //取消当前超时调用计划


    //间歇调用setInterval(),接收两个参数
    var timer=setInterval(function(){             //间歇调用，可以重复不断的调用
        alert("Lee");
    },2000);
    alert(timer);//1,数值ID
    clearInterval(timer);                           //对应的取消方法


    //定时器
    var num=0,
        max=5;
    var timer=setInterval(function(){
        num++;
        if(num==max){
            clearInterval(timer);
            alert("5秒到啦！！！");
        }
    },1000);


    var num=0,
        max=5;
    var timer=setInterval(function(){
        num++;
        document.getElementById("a").innerHTML=num;    //实时显示时间
        if(num==max){
            clearInterval(timer);
            alert("5秒到啦！！！");
        }
    },1000);
    */
    //使用超时调用模拟定时器
    var num=0,
        max=5;
    var box=function(){
        num++;
        document.getElementById("a").innerHTML=num;    //实时显示时间
        if(num==max){
            alert("5秒到啦！！！");
        }else{
            setTimeout(box,1000);
        }
    };
    setTimeout(box,1000);

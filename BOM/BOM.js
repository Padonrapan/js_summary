/*
//window对象之系统对话框alert();confirm(),prompt();

    //确定和取消
    // confirm("string")，弹出按钮，按钮有“确认”和“取消”，点击“确认”返回true,点击“取消”，返回false;
    if(confirm("请选择!!!")){
        alert("您点击了确定按钮");
    }else{
        alert("您点击了取消按钮");
    }

    //输入提示框
    //prompt("请输入一个数字",0)   两个参数，第一个说明，第二个默认值；返回输入的值(按确定按钮的情形下)
   var box=prompt("请输入一个数字",100);
    if(box){
        alert(box);
    }

//open()新建窗口，本身会返回子窗口的window对象
    //open("http://www.baidu.com");                         //1.新建页面并打开百度
    //open("http://www.baidu.com","baidu");                 //2.新建页面并命名窗口并打开窗口
    //open("http://www.baidu.com","baidu","_parent");
    //open("http://www.baidu.com","baidu","_blank");        //3."_parent"在本业打开窗口，"_blank"是新建窗口
    //open("http://www.baidu.com","baidu","width=400,height=400,left=100,top=100");
            //PS:不命名每次会打开新窗口，命名第一次打开新窗口，之后在命名窗口加载
    var box=open("http://www.baidu.com","baidu","width=400,height=400,left=100,top=100");
    //alert("这是父窗口弹出的对话框");
    //open()本身会返回子窗口的window对象
    box.alert("这是子窗口弹出的对话框")
*/
//opener子窗口操作父窗口
    open("opener.html","opener","width=400,height=400,left=100,top=100");



/*
//防止重复提交
addEvent(window,"load",function() {
    var fm = document.getElementById("myForm");
    //取消submit的默认事件(即默认的提交行为)
    var flag=false;
    addEvent(fm, "submit", function (evt) {
        preDef(evt);
        //document.getElementById("sub").disabled=true;//1.第一次提交后提交按钮将禁用;这种方法只限用提交按钮防止重复提交的
        if(flag==true) {
            return;
        }
        else {
            flag = true;//表示已经提交过一次；
            alert("提交");
            //模拟延迟
            setTimeout(function () {
                fm.submit();
            }, 5000);
        }
    });

   // PS:F5只能浅刷新，缓存级别的刷新，如果要从源头刷新，用Ctrl+F5;
})
*/


addEvent(window,"load",function(){
//获取表单控件的方法
    var fm=document.getElementById("myForm");
    //alert(fm.elements);//表单控件集合
    //alert(fm.length);//获取表单集合的长度;不推荐,向下兼容的方法
    //alert(fm[0]);//获取表单集合的第一个元素;不推荐，向下兼容的方法;不是表单控件会被忽略掉
    //alert(fm.elements.length);//推荐
    //alert(fm.elements[0]);//推荐
    //alert(fm.elements["user"]);//推荐

    //PS:什么叫表单控件?form里边的input,select,texterea等元素
    var sexList=fm.elements["sex"];
    //alert(sexList[0]);

// 表单控件常用属性
    //alert(sexList[0].value);
    //alert(sexList[0].name);
    //sexList[1].disabled=true;
    //alert(sexList[0].form);//得到控件所属的form;
    //alert(sexList[0].type);//radio
    //sexList[1].type="checkbox";//可修改表单空间的类型,不推荐修改

//表单字段事件focus,blur,change和方法focus(),blur()
    var user=fm.elements["user"];
   // addEvent(user,"focus",function(){
   //     alert("hello");
   // });

    addEvent(user,"blur",function(){
        alert("hello");
    });

    addEvent(user,"change",function(){
        alert("hello");
    })

})


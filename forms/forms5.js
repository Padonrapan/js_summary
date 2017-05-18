/*
addEvent(window,'load',function(){
    var fm=document.getElementById("myForm");
    var city=fm.elements["city"];
    //alert(city);    //object hTMLSelectElement
//select的属性
    //city.multiple=true;
    //city.size="5";
    //alert(city.options);    //Object HTMLOptionsCollection得到select对象里边的option集合
    //alert(city.options.length);
    //alert(city.type);//select-one单行，select-multiple多行
    //alert(city.selectedIndex);

//使用HTML DOM获取option的value和text的值；可以参考HTML DOM手册
    //alert(city.options[0].value);   //得到HTML中option标签value属性的值
    //alert(city.options[0].text);    //得到HTML中option标签之间的内容

//也可以使用标准DOM获取option的value和text的值;不建议在表单中使用标准DOM,因为HTML DOM的兼容性非常好,并且简单容易好理解
    //alert(city.options[0].getAttribute("value"));
    //alert(city.options[0].firstChild.nodeValue);

//select对象的selectedIndex属性

    //addEvent(city,"change",function(){
    //    alert(this.selectedIndex);//得到options集合的索引值
    //    alert(this.options[this.selectedIndex].value);
    //    alert(this.options[this.selectedIndex].text);
    });


    //PS:这个定位是必须在select对象上
    //city.selectedIndex="2";//可以定位到指定索引的选项上
    //PS:这个定位是必须在option对象上
    city.options[1].selected=true;
    addEvent(city,"change",function(){
        if(city.options[1].selected){
            alert("正确");
        }else{
            alert("错误");
        }
    });
});



//添加选项
addEvent(window,'load',function(){
    var fm=document.getElementById("myForm");
    var city=fm.elements["city"];

    //1.标准DOM添加选项
    var option=document.createElement("option");
    var text=document.createTextNode("北京t");
    option.appendChild(text);
    option.setAttribute("value","北京v");
    city.appendChild(option);


    //2.使用option构造函数
    var option=new Option("北京t","北京v");
    city.appendChild(option);       //IE不兼容
    //IE有自己的add()方法
    city.add(option,0); //0表示在集合列表的索引，除了IE都不识别；但是我的IE也不识别？？？？？
    city.add(option,null);//除了IE都可以用
    city.add(option,undefined);//最佳兼容方案

    //PS：在DOM 规定，add()中两个参数是必须的，如果不确定索引，那么第二个参数设
    //置null 即可，即默认移入最后一个选项。但这是IE 中规定第二个参数是可选的，所以设置
    //null 表示放入不存在的位置，导致失踪，为了兼容性，我们传递undefined 即可兼容。
});
*/
/*
//移除选项
addEvent(window,'load',function(){
    var fm=document.getElementById("myForm");
    var city=fm.elements["city"];
    //标准DOM
    //city.removeChild(city.options[0]);

    //HTML DOM
    city.remove(2); //remove(),一个参数，需要移除的索引

    //手动设置
    //city.options[1]=null;

});
*/

//移动选项
addEvent(window,'load',function(){
    var fm=document.getElementById("myForm");
    var city=fm.elements["city"];
    var info=fm.elements["info"];
    addEvent(city,"click",function(){
        info.appendChild(this.options[city.selectedIndex]);
    })
})
/*
//一、过滤输入模式:纯数字
//1.禁止或屏蔽数字键的输入,阻止数字键的默认行为
addEvent(window,'load',function(){
    var fm=document.getElementById("myForm");
    var user=fm.elements["user"];
    var context=fm.elements["context"];

    //1.1屏蔽非数字键的输入
    addEvent(user,'keypress',function(evt){
        var e=evt||window.event;
        var charCode=getCharCode(evt);
        //alert(charCode);
        //alert(String.fromCharCode(charCode));   //String的方法,可接受一个指定的 Unicode 值，然后返回一个字符串
        //正则表达式来获取文本是否为数字
        var str=String.fromCharCode(charCode);
        if(!/\d/.test(str)){
            preDef(evt);
        }

        //PS：条件判断只有数字才可以输入，导致常规按键，比如光标键、退格键、删除键等无法使用部分浏览器比如Firfox，
        // 需要解放这些键，而非字符触发的编码均为0；
    })

//1.2屏蔽copy,cut,paste等事件
    //addEvent(user,"copy",function(evt){
    //    alert('复制时');
    //})
    //addEvent(user,"beforecopy",function(evt){  //复制前事件很少用到
    //     alert('复制前');
    //})
    addEvent(user,'copy',function(evt){
        preDef(evt);                            //屏蔽复制
    })
    addEvent(user,'paste',function(evt){
        preDef(evt);                            //屏蔽粘贴
    })
//1.3屏蔽中文输入法,但是Chrome无效
    user.style.imeMode="disabled";               //文本输入框input和textarea的属性ime-mode


    //PS:屏蔽方法导致用户体验不好,用户会以为自己电脑坏了
});
*/


/*
//2.验证后取消,你可以先输入非法字符,然后再判断,取消你刚输入的非法字符
addEvent(window,'load',function(){
    var fm=document.getElementById("myForm");
    var user=fm.elements["user"];
    var context=fm.elements["context"];
    addEvent(context,"keyup",function(){
        this.value=this.value.replace(/[^\d]/g,"");   //将非数字字符转换为空;\d表示数字;^表示非;[]表示多个;g表示全局
    })
});
*/

//二、自动切换焦点
addEvent(window,'load',function(){
    var fm=document.getElementById("myForm");
    var user=fm.elements["user"];
    var context=fm.elements["context"];
    addEvent(fm.elements["a1"],"keyup",toForward);
    addEvent(fm.elements["a2"],"keyup",toForward);
    addEvent(fm.elements["a3"],"keyup",toForward);
    function toForward(){
        //判断当前长度是否与我们输入的长度一致
        if(this.value.length==this.maxLength){
            //遍历所有控件元素
            for(var i=0;i<fm.elements.length;i++){
                if(fm.elements[i]==this){
                    fm.elements[i+1].focus();
                    return;
                }
            }
        }
    }
});
/*
function getState(){
    alert("");
}
getState();         //需要调用才执行,比较麻烦
*/

//alert("");  //全局函数,比较乱

/*
(function getState(){       //闭包
    alert("");
})();
*/

(function(){        //匿名立即执行函数
    window.sys={};                                      //让外部可以访问,保存浏览器对象
    var ua=navigator.userAgent.toLowerCase();         //获取浏览器字符信息
    var s;                                               //浏览器信息数组;浏览器+版本
    //alert(ua);
    //alert(ua.match(/msie ([\d.]+)/));       //msie 8.0,8.0
    //alert(ua.match(/firefox\/([\d.]+)/));     //firefox/53.0,53.0
    //alert(ua.match(/chrome\/([\d.]+)/));
    //alert(window.opera.version());                    //js自带的获取opera浏览器的方法
    //alert(ua.match(/opera\/.*version\/([\d.]+)/));
    //alert(ua.match(/version\/([\d.]+).*safari/));

    /*
    if(/msie ([\d.]+)/.test(ua)){
        s=ua.match(/msie ([\d.]+)/);
        sys.ie=s[1];
    }
    if(/firefox\/([\d.]+)/.test(ua)){
        s=ua.match(/firefox\/([\d.]+)/);
        sys.firefox=s[1];
    }
    if(/chrome\/([\d.]+)/.test(ua)){
        s=ua.match(/chrome\/([\d.]+)/);
        sys.chrome=s[1];
    }
    if(/opera\/.*version\/([\d.]+)/.test(ua)){
        s=ua.match(/opera\/.*version\/([\d.]+)/);
        sys.opera=s[1];
    }
    if(/version\/([\d.]+).*safari/.test(ua)){
        s=ua.match(/version\/([\d.]+).*safari/);
        sys.safari=s[1];
    }
    */
    (s=ua.match(/msie ([\d.]+)/))?sys.ie=s[1]:
        (s=ua.match(/firefox\/([\d.]+)/))?sys.firefox=s[1]:
            (s=ua.match(/chrome\/([\d.]+)/))?sys.chrome=s[1]:
                (s=ua.match(/opera\/.*version\/([\d.]+)/))?sys.opera=s[1]:
                    (s=ua.match(/version\/([\d.]+).*safari/))?sys.safari=s[1]:0





})();
alert(sys.chrome);

/*
//三元
true?s=1:0; //如果是真,s等于1，否则s等于0
alert(s);

(s=1)?b=1:0  //如果s等于1,b等于1，否则b等于0

(s=1)?b=1:(s=2)?b=2:0  //如果s等于1,b等于1;否则如果s等于2,b等于2;否则s既不等于1也不等于2,则b等于0

(s=1)?b=1:(s=2)?b=2:(s=3)?b=3:0

    */
/*
//设置cookie
document.cookie="user=hello";
document.cookie="url=yc60.com";
document.cookie="email=yc60@gmail.com";
//获取cookie
alert(document.cookie);
//PS:很麻烦
*/

/*
//设置ccokie
function setCookie(name,value,expires,path,domain,secure){
    var cookieName=document.cookie=encodeURIComponent(name)+"="+encodeURIComponent(value);
    if(expires instanceof Date){
        cookieName+=";expires="+expires;
    }
    if(path){
        cookieName+=";path="+path;
    }
    if(domain){
        cookieName+=";domain"+domain;
    }
    if(secure){
        cookieName+=";secure";
    }
    document.cookie=cookieName;
}
//获取cookie
function getCookie(name){
    var cookieName=encodeURIComponent(name)+"=";
    var cookieStart=document.cookie.indexOf(cookieName);//获取cookieName的起始位置
    var cookieValue=null;
    if(cookieStart>-1) {
        var cookieEnd = document.cookie.indexOf(";", cookieStart);//获取Value的起始位置
        if (cookieEnd == -1) {      //最后一个cookie没有";"indexOf ";"得到的值为0
            cookieEnd = document.cookie.length;
        }
        cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
    }
    return cookieValue;
}
alert(getCookie("user"));

//设置过期时间函数
function setCookieDate(day){           //传递一个天数,比如传递7就表示7天后过期
    var date=null;
    if(typeof day=="number"&& day>0){
        date=new Date();
        date.setDate(date.getDate()+day);
    }else{
        throw new Error("您传递的天数不合法!必须是数字且大于0");
    }
    return date;
}
*/

//web存储(sessionStorage对象,localStorage对象;新版本的localStirage已经代替globalStorage;这三个对象都是永久缓存)
//通过方法存储和获取，删除
sessionStorage.setItem("name","hello");
//sessionStorage.removeItem("name");
alert(sessionStorage.getItem("name"));

//通过属性来存储和获取
sessionStorage.user="shenpan";
alert(sessionStorage.user);



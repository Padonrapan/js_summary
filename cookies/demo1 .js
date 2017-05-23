//完整形式
//document.cookie="user=值;expirs=失效时间; path=路径访问;domain=域名访问;secure=安全的https";
/*
document.cookie="user="+encodeURIComponent("沈盼");
alert(decodeURIComponent(document.cookie));
*/
var date=new Date();
date.setDate(7+date.getDate());
document.cookie="user="+encodeURIComponent("沈盼")+";expires="+date;
alert(decodeURIComponent(document.cookie));
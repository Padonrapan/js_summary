//闭包
    //使用匿名函数，使局部变量驻留在内存中，从而实现累加
/*    function sum(){
        var a=100;
        return function(){
            a++;
            return a;
        }
    }
    var b=sum();
    alert(b());
    alert(b());//使用闭包，闭包作用域里边的局部变量资源会被占用，不会立刻被销毁从而占用过多内存，过度使用闭包会降低性能，除非必要，一般不用闭包
    b=null;//解除引用，等待垃圾回收
*/


        function box(){
            var arr=[];
            for(var i=0;i<5;i++){
                arr[i]=function(){
                    return i;
                }
            }
            /*
             函数box()执行到这里之后，i的值为4++=5; 此时函数为
             function(){return i;},
             function(){return i;},
             function(){return i;},
             function(){return i;},
             function(){return i;},
            */
            return arr;
        }
        //alert(box());
        var b=box();
        //alert(b.length);
        //alert(b[0]);
        for(var i=0;i<5;i++){
            alert(b[i]());//5,5,5,5,5
        }


        //改进版1；
        function box(){
            var arr=[];
            for(var i=0;i<5;i++){
                arr[i]=i;
            }
            return arr;
        }
        for(var i=0;i<5;i++){
            alert(box()[i]);
        }

        //改进版2；
        function box(){
            var arr=[];
            for(var i=0;i<5;i++){
                arr[i]=(function(){
                    return i;
                })(i);                           //改为立即执行函数
            }
            return arr;
        }
        //alert(box());
        var b=box();
        //alert(b.length);
        //alert(b[0]);
        for(var i=0;i<5;i++){
            alert(b[i]);
        }

        //改进版2；
        function box(){
            var arr=[];
            for(var i=0;i<5;i++){
                arr[i]=(function(num){
                    return function(){
                        return num;
                    };
                })(i);                           //闭包，使局部变量驻留在内存中，和第一例中的累加是一样的
            }
            return arr;
        }
        alert(box());//function(){return num;},function(){return num;},function(){return num;},function(){return num;},function(){return num;},
        var b=box();
        //alert(b.length);
        //alert(b[0]);
        for(var i=0;i<5;i++){
            alert(b[i]());
        }

        //关于闭包中的this
            //1
        var box={
            getThis:function(){
                    return this;
            }
        };
        alert(box.getThis());//object,object

            //2
        var box={
            getThis:function(){
                return function(){
                    return this;
                };
            }
        };
        alert(box.getThis());
        alert(box.getThis()());//obejet,window  闭包在运行时this指向window
            //3
        var user="the window";
        var box={
            user:"the box",
            getUser:function(){
                return this.user;
            }
        };
        alert(box.getUser); //the box
            //4
        var user="the window";
        var box={
            user:"the box",
            getUser:function(){
                //这里作用域下的this指向box;
                return function(){
                    //这里作用域下的this指向window;
                    return this.user;
                };
            }
        };
        alert(box.getUser()());//the window
        //若需要把闭包下的this指向box,可改进
                //改进1
                var user="the window";
                var box={
                    user:"the box",
                    getUser:function(){
                        //这里作用域下的this指向box;
                        var that=this;
                        return function(){
                            //这里作用域下的this指向window;
                            return that.user;
                        };
                    }
                };
                alert(box.getUser()());//the box
                //改进2，对象冒充
                    var user="the window";
                    var box={
                        user:"the box",
                        getUser:function(){
                            //这里作用域下的this指向box;
                            return function(){
                                //这里作用域下的this指向window;
                                return this.user;
                            };
                        }
                    };
                    alert(box.getUser().call(box));//the box
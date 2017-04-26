//block scope

    //1.块级作用域（私有作用域）
    /*
    //1.1
    function box(){
        for(var i=0;i<5;i++) {
            alert(i);
        }         //块级作用域，但是js并没有块级作用域,if(),for()等没有作用域，如果有，出了这个范围就应该被销毁，就算重新声明同一个变量也不会改变它的值
      alert(i);   //5，依然能访问到i，说明js没有块级作用域
    }

    function box(){
        for(var i=0;i<5;i++) {
            alert(i);
        }
        var i;      //重新声明i,打印出来依然还是5；js不会提醒多次声明同一个变量
        alert(i);   //5，依然能访问到i，说明js没有块级作用域
    }

    //1.2模仿块级作用域
        function box(){
            (function(){                      //将需要封装的作用域包裹在立即执行函数里
                for(var i=0;i<5;i++)
                alert(i);
            })();                              //出了这个作用域，变量就被销毁掉了
            alert(i);                         //null;
        }

        //1.3全局变量
        var age=100;
        alert(age);
        function box(){

        }
        alert(age); //100,age仍存在内存中
        age=null;  //全局变量会一直存在内存中,执行完之后不会销毁，需手动设置为null
        //尽量少在全局作用域中声明变量和函数，很容易导致命名冲突引起不必要的麻烦

        //1.4全局变量的私有作用域
            (function(){
                var age=100;
                alert(age);
                function box(){

                }
            })();
            alert(age); //null,不需要手动设置,出了私有作用域边自动销毁了
     */

    /*
    //2.私有变量
        function box(){
            var age=100;    //私有变量，外界访问不到
        }
        box();//访问不到
            //可以通过函数内部创建一个闭包，闭包通过自己的作用域链访问这些变量，利用这一点可以创建访问私有变量的公用方法

        //2.1通过构造函数传参建立对外公共接口的特权方法
        function Box(value){
            var user=value;   //私有变量
            this.getUser=function(){
                return user;    //对外公共接口的特权方法
            }
        }
        var box=new Box("Lee");
        alert(box1.getUser());  //Lee
        var box2=new Box("Pan");
        alert(box2.getUser());  //Pan
        alert(box.getUser());   //Lee; 因为参数value是按值得传递，用box调用getUser()传递的还是"Lee";


        function Box(value){
            var user=value;  //私有变量
            this.getUser=function(){
                    return user;
            }
            this.setUser=function(value){
                user=value;
            }
        }
        var box=new Box("Lee");
        alert(box1.getUser());  //Lee
        var box2=new Box("Pan");
        alert(box2.getUser());  //Pan
        alert(box.getUser());  //Pan

        (function(value){
            var user;
            //function Box()  {}但在函数里边写构造函数，因为是私有作用域里边的函数，外界访问不到
            //var Box=function(){}  还是私有作用域里边的函数，外界访问不到
            Box=function(value){     //不写var时，为全局函数
                user=value;
                this.getUser=function(){
                    return user;
                }
            }
        })();
        var box=new Box("Lee");         //第一次实例化
        alert(box.getUser());  //Lee
        var box2=new Box("Pan");        //第一次实例化
        alert(box2.getUser());  //Pan
        alert(box.getUser());  //Pan 因为此处参数是按引用传递，用box调用getUser()是"Pan";
        */

        //2.2模块模式，通过字面量对象建立对外公共接口的特权方法
        var box={                       //字面量对象，单哩
            age:100,                    //公有属性,改成私有
            run:function(){            //公有方法,改成私有
                return "运行中...";
            }
        };
            //什么叫做单例对象，就是永远只实例化一次的对象，也就是字面量对象

            //私有化变量和函数
        var box=function(){
            var age=100;
            function run(){
                return "运行中...";
            }
            return {                        //直接返回对象 ;对外公共接口的特权方法
                go:function(){
                    return age+run();
                }
            }
        }();             //立即执行函数方式：一、(function(){})();二、var fn=function(){}();此处为第二种
        alert(box.go());

            //私有化变量和函数：改进
        var box=function(){
            var age=100;
            function run(){
                return "运行中...";
            }
            var obj= {
                go: function () {
                    return age + run();
                }
            };
            return obj;
        }();             //立即执行函数方式：一、(function(){})();二、var fn=function(){}();此处为第二种
        alert(box.go());

        //2.3增强的模块模式，这种模式适合于返回自定义对象
        function Desk(){}
        var box=function(){
            var age=100;
            function run(){
                return "运行中...";
            }
            var desk=new Desk();
            desk.go=function () {
                    return age + run();
                }
            return desk;
        }();
        alert(box.go());


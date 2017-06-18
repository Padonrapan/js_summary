

$(function () {

	//��������
	$('#header .member').hover(function () {
		$(this).css('background', 'url(images/arrow2.png) no-repeat 55px center');
		$('#header .member_ul').show().animate({
			t : 30,
			step : 10,
			mul : {
				o : 100,
				h : 120
			}
		});
	}, function () {
		$(this).css('background', 'url(images/arrow.png) no-repeat 55px center');
		$('#header .member_ul').animate({
			t : 30,
			step : 10,
			mul : {
				o : 0,
				h : 0
			},
			fn : function () {
				$('#header .member_ul').hide();
			}
		});
	});
	
	
	//���ֻ���
	var screen = $('#screen');
	
	//��¼��
	var login = $('#login');
	login.center(350, 250).resize(function () {
		if (login.css('display') == 'block') {
			screen.lock();
		}
	});
	$('#header .login').click(function () {
		login.center(350, 250).css('display', 'block');
		screen.lock().animate({
			attr : 'o',
			target : 30,
			t : 30,
			step : 10
		});
	});
	$('#login .close').click(function () {
		login.css('display', 'none');
		//��ִ�н��䶯����������Ϻ���ִ�йر�unlock
		screen.animate({
			attr : 'o',
			target : 0,
			t : 30,
			step : 10,
			fn : function () {
				screen.unlock();
			}
		});
	});
	
	//ע���
	var reg = $('#reg');
	reg.center(600, 550).resize(function () {
		if (reg.css('display') == 'block') {
			screen.lock();
		}
	});
	$('#header .reg').click(function () {
		reg.center(600, 550).css('display', 'block');
		screen.lock().animate({
			attr : 'o',
			target : 30,
			t : 30,
			step : 10
		});
	});
	$('#reg .close').click(function () {
		reg.css('display', 'none');
		screen.animate({
			attr : 'o',
			target : 0,
			t : 30,
			step : 10,
			fn : function () {
				screen.unlock();
			}
		});
	});
	
	//��ק
	login.drag($('#login h2').last());
	reg.drag($('#reg h2').last());
	
	//�ٶȷ����ʼ��λ��
	$('#share').css('top', getScroll().top + (getInner().height - parseInt(getStyle($('#share').first(), 'height'))) / 2 + 'px');
	
	/*
	addEvent(window, 'scroll', function () {
		$('#share').animate({
			attr : 'y',
			target : getScroll().top + (getInner().height - parseInt(getStyle($('#share').first(), 'height'))) / 2
		});
	});
	*/
	
	$(window).bind('scroll', function () {
		$('#share').animate({
			attr : 'y',
			target : getScroll().top + (getInner().height - parseInt(getStyle($('#share').first(), 'height'))) / 2
		});
	});
	
	//�ٶȷ�������Ч��
	$('#share').hover(function () {
		$(this).animate({
			attr : 'x',
			target : 0
		});
	}, function () {
		$(this).animate({
			attr : 'x',
			target : -211
		});
	});
	
	//��������
	$('#nav .about li').hover(function () {
		var target = $(this).first().offsetLeft;
		$('#nav .nav_bg').animate({
			attr : 'x',
			target : target + 20,
			t : 30,
			step : 10,
			fn : function () {
				$('#nav .white').animate({
					attr : 'x',
					target : -target
				});
			}
		});
	}, function () {
		$('#nav .nav_bg').animate({
			attr : 'x',
			target : 20,
			t : 30,
			step : 10,
			fn : function () {
				$('#nav .white').animate({
					attr : 'x',
					target : 0
				});
			}
		});
	});
	
	//���˵�
	$('#sidebar h2').toggle(function () {
		$(this).next().animate({
			mul : {
				h : 0,
				o : 0
			}
		});
	}, function () {
		$(this).next().animate({
			mul : {
				h : 150,
				o : 100
			}
		});
	});

	
	//表单
	// 初始化表单����֤
	$('form').first().reset();
	$('form').form('user').bind('focus', function () {
		$('#reg .info_user').css('display', 'block');
		$('#reg .error_user').css('display', 'none');
		$('#reg .succ_user').css('display', 'none');
	}).bind('blur', function () {
		if (trim($(this).value()) == '') {
			$('#reg .info_user').css('display', 'none');
			$('#reg .error_user').css('display', 'none');
			$('#reg .succ_user').css('display', 'none');
		} else if (!/[\w]{2,20}/.test(trim($(this).value()))) {
			$('#reg .error_user').css('display', 'block');
			$('#reg .info_user').css('display', 'none');
			$('#reg .succ_user').css('display', 'none');
		} else {
			$('#reg .succ_user').css('display', 'block');
			$('#reg .error_user').css('display', 'none');
			$('#reg .info_user').css('display', 'none');
		}
	});
	
	
	//密码验证������֤
	$('form').form('pass').bind('focus', function () {
		$('#reg .info_pass').css('display', 'block');
		$('#reg .error_pass').css('display', 'none');
		$('#reg .succ_pass').css('display', 'none');
	}).bind('blur', function () {
		if (trim($(this).value()) == '') {
			$('#reg .info_pass').css('display', 'none');
		}else{
        	if(check_pass(this)){
                $('#reg .info_pass').css('display', 'none');
                $('#reg .error_pass').css('display', 'none');
                $('#reg .succ_pass').css('display', 'block');
            }else{
                $('#reg .info_pass').css('display', 'none');
                $('#reg .error_pass').css('display', 'block');
                $('#reg .succ_pass').css('display', 'none');
            }
		}
	});
	
	//密码安全强度验证��֤
	$('form').form('pass').bind('keyup', function () {
		check_pass(this);
	});

	//密码强度验证
	function check_pass(_this){
        var value = trim($(_this).value());
        var value_length = value.length;
        var code_length=0;
		var flag=false;

        //第一个条件6-20位
        if (value_length >= 6 && value_length <= 20) {
            $('#reg .info_pass .q1').html('O').css('color', 'red');
        } else {
            $('#reg .info_pass .q1').html('O').css('color', '#999');
        }

        //第二个条件
        if (value_length > 0 && !/\s/.test(value)) {
            $('#reg .info_pass .q2').html('O').css('color', 'red');
        } else {
            $('#reg .info_pass .q2').html('O').css('color', '#999');
        }

        //第三个条件
        if(/[\d]/.test(value)){
            code_length++;
        }
        if(/[a-z]/.test(value)){
            code_length++;
        }
        if(/[A-Z]/.test(value)){
            code_length++;
        }
        if(/[^\w]/.test(value)){
            code_length++;
        }
        if(code_length>=2){
            $('#reg .info_pass .q3').html('O').css('color','red');
        }else{
            $('#reg .info_pass .q3').html('O').css('color','#999');
        }

        //安全级别:务必从高往低判断
        if(value_length>=10 && code_length>=3){
            $('#reg .info_pass .s1').css('color','green');
            $('#reg .info_pass .s2').css('color','green');
            $('#reg .info_pass .s3').css('color','green');
            $('#reg .info_pass .s4').html('H').css('color','green');
        } else if(value_length>=8 && code_length>=2){
            $('#reg .info_pass .s1').css('color','#f60');
            $('#reg .info_pass .s2').css('color','#f60');
            $('#reg .info_pass .s3').css('color','#ccc');
            $('#reg .info_pass .s4').html('M').css('color','#f60');
        }else if(value_length>=1){
            $('#reg .info_pass .s1').css('color','brown');
            $('#reg .info_pass .s2').css('color','#ccc');
            $('#reg .info_pass .s3').css('color','#ccc');
            $('#reg .info_pass .s4').html('L').css('color','brown');
        }else{
            $('#reg .info_pass .s1').css('color','#ccc');
            $('#reg .info_pass .s2').css('color','#ccc');
            $('#reg .info_pass .s3').css('color','#ccc');
            $('#reg .info_pass .s4').html('');
        }

        if(value_length >= 6 && value_length <= 20 && !/\s/.test(value) && code_length>=2) flag=true;
        return flag;
	}

	//密码确认
	$('form').form('notpass').bind('focus',function(){
        $('#reg .info_notpass').css('display', 'block');
        $('#reg .error_notpass').css('display', 'none');
        $('#reg .succ_notpass').css('display', 'none');
	}).bind('blur',function(){
		if(trim($(this).value())==''){
            $('#reg .info_notpass').css('display', 'none');
		}else if(trim($(this).value()) == trim($('form').form('pass').value())){
            $('#reg .info_notpass').css('display', 'none');
            $('#reg .error_notpass').css('display', 'none');
            $('#reg .succ_notpass').css('display', 'block');
		}else{
            $('#reg .info_notpass').css('display', 'none');
            $('#reg .error_notpass').css('display', 'block');
            $('#reg .succ_notpass').css('display', 'none');
		}
	});

	//回答
    $('form').form('ans').bind('focus',function(){
        $('#reg .info_ans').css('display', 'block');
        $('#reg .error_ans').css('display', 'none');
        $('#reg .succ_notpass').css('display', 'none');
    }).bind('blur',function(){
        if(trim($(this).value())==''){
            $('#reg .info_ans').css('display', 'none');
        }else if(trim($(this).value()).length>=2 && trim($(this).value()).length<= 32){
            $('#reg .info_ans').css('display', 'none');
            $('#reg .error_ans').css('display', 'none');
            $('#reg .succ_ans').css('display', 'block');
        }else{
            $('#reg .info_ans').css('display', 'none');
            $('#reg .error_ans').css('display', 'block');
            $('#reg .succ_ans').css('display', 'none');
        }
    });

    //电子邮件
    $('form').form('email').bind('focus',function(){
    	//补全界面
        if($(this).value().indexOf('@')==-1) {
        	$('#reg .all_email').css('display', 'block');
        }
        $('#reg .info_email').css('display', 'block');
        $('#reg .error_email').css('display', 'none');
        $('#reg .succ_email').css('display', 'none');
    }).bind('blur',function(){
        //补全界面
        $('#reg .all_email').css('display', 'none');
        if(trim($(this).value())=='') {
            $('#reg .info_email').css('display', 'none');
        }/*else if(/^[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9_\-]+(\.[a-zA-Z]{2,4}){1,2}$/.test(trim($(this).value())))*/
		else if(/^[\w\-\.]+@[\w\-]+(\.[a-zA-Z]{2,4}){1,2}$/.test(trim($(this).value()))){
            $('#reg .info_email').css('display', 'none');
            $('#reg .error_email').css('display', 'none');
            $('#reg .succ_email').css('display', 'block');
		}else{
            $('#reg .info_email').css('display', 'none');
            $('#reg .error_email').css('display', 'block');
            $('#reg .succ_email').css('display', 'none');
		}
    });

    //电子邮件补全系统键入
	$('form').form('email').bind('keyup',function(event){
		if($(this).value().indexOf('@')==-1){
            $('#reg .all_email').css('display', 'block');
            $('#reg .all_email li span').html($(this).value());
		}else{
            $('#reg .all_email').css('display', 'none');
		}

        $('#reg .all_email li').css('background','none');
        $('#reg .all_email li').css('color','#666');
		if(event.keyCode == 40){
			if(this.index == undefined || this.index>=$('#reg .all_email li').length()-1){
                this.index = 0;
			}else{
                this.index ++;
			}
            $('#reg .all_email li').eq(this.index).css('background','#e5edf2');
            $('#reg .all_email li').eq(this.index).css('color','#369');
		}
        if(event.keyCode == 38){
            if(this.index == undefined || this.index<=0){
                this.index = $('#reg .all_email li').length()-1;
            }else{
                this.index --;
            }
            $('#reg .all_email li').eq(this.index).css('background','#e5edf2');
            $('#reg .all_email li').eq(this.index).css('color','#369');
        }
        if(event.keyCode == 13){
        	$(this).value($('#reg .all_email li').eq(this.index).text());
            $('#reg .all_email').css('display', 'none');
            this.index=undefined;
		}

	});

	//电子邮件补全系统点击获取
	/*
	$('#reg .all_email li').click(function(){
		alert('');
	}); //PS:click是点击弹起事件后触发的,而blur失去了焦点之后,没有了点击弹起的元素,导致无法触发*/
	$('#reg .all_email li').bind('mousedown',function(){
		$('form').form('email').value(($(this).text()));
	});

    //电子邮件补全系统鼠标移入移出效果
	$('#reg .all_email li').hover(function(){
		$(this).css('background','#e5edf2');
        $(this).css('color','#369');

	},function(){
        $(this).css('background','none');
        $(this).css('color','#666');
	});

	//年月日
	var year=$('form').form('year');
	var month=$('form').form('month');
	var day=$('form').form('day');
	var day30=[4,6,9,11];
	var day31=[1,3,5,7,8,10,12];

	//注入年
	for(var i=1950;i<=2018;i++){
		year.first().add(new Option(i,i),undefined);
	}
	//注入月
	for(var i=1;i<=12;i++){
		month.first().add(new Option(i,i),undefined);
	}
	year.bind('change',select_day);
    month.bind('change',select_day);
    function select_day(){
        if(year.value()!=0 && month.value()!=0) {
            //清理之前注入的日
            day.first().options.length=1;

            //不确定的日
            var cur_day=0;

            //注入日
            if (inArray(day31, parseInt(month.value()))) {
                cur_day=31;
            }else if (inArray(day30, parseInt(month.value()))) {
                cur_day=30;
            }else{
                if((parseInt(year.value())%4 == 0 && parseInt(year.value())%100 !=0)||
                    parseInt(year.value())%400 ==0){
                    cur_day=29;
                }else{
                    cur_day=28;
                }
            }
            for (var i = 1; i <= cur_day; i++) {
                day.first().add(new Option(i, i), undefined);
            }
        }else{
            //清理之前的注入日
            day.first().options.length;
        }
	}

	//备注
	$('form').form('ps').bind('keyup',check_ps).bind('paste',function(){
		//粘贴事件会在内容粘贴到文本框之前触发;

		setTimeout(check_ps,50);
	});
	//清尾
	$('#reg .ps .clear').click(function(){
		$('form').form('ps').value($('form').form('ps').value().substring(0,5));
        check_ps();
	});
	function check_ps(){
        var num=5-$('form').form('ps').value().length;
        if(num>=0){
            $('#reg .ps').eq(0).css('display','block');
            $('#reg .ps .num').eq(0).html(num);
            $('#reg .ps').eq(1).css('display','none');

        }else{
            $('#reg .ps').eq(1).css('display','block');
            $('#reg .ps .num').eq(1).html(Math.abs(num)).css('color','red');
            $('#reg .ps').eq(0).css('display','none');
        }
	}
});

















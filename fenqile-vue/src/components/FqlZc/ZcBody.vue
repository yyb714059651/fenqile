<template>
    <div>
      <section class="register-list">
          <div class="message-phone">
            <img src="../../assets/img/yybimg/微信截图_20171024155349.png">
            <input type="text" placeholder="输入本人手机号以注册" id="phoneNum">
          </div>
          <div class="message-phone">
            <img src="../../assets/img/yybimg/微信截图_20171024101222.png">
            <input type="password" id="phonePass" placeholder="登录密码">
            <img id="phoneImg" src="../../assets/img/yybimg/微信截图_20171024101403.png">
          </div>
          <div class="message-phone" id="Yzshow" style="display: none;">
            <img src="../../assets/img/yybimg/微信截图_20171024101258.png">
            <input type="text" placeholder="验证码" id="inputCode">
            <div class="code" id="checkCode">SYBG</div>
          </div>
          <div class="message-phone">
            <img src="../../assets/img/yybimg/微信截图_20171024155419.png">
            <input type="text" placeholder="4位数字验证码" id="liuyzm">
            <button class="yzmnum" id="fsyzm">发送验证码</button>
          </div>
          <div id="hick"></div>
      </section>
      <section class="register-foot">
        <a href="###"><button type="button" id="Buttonfoot" class="foot-button">注册</button></a>
      </section>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
         mounted(){
            //功能：做表单验证的常见正则
            //参数:
            //type:验证类型,如：phone表示手机，email表示邮件等
            //value:需要验证的字符串
            //返回值:true:验证通过；false：验证失败。
            function checkAll(type,value){
              var reg;
              switch(type){
                case "pass":reg = passReg();break;//密码
                case "phone":reg = phoneReg();break;//电话
                default:;
              }
              if(reg.test(value)){
                return true;
              }else{
                return false;
              }
            }
            // 密码只能使用数字 字母 长度在6-15之间  字母开头
            function passReg(){
              return /^[a-zA-Z]\w{5,14}$/;
            }
            //电话开头1   总11位
            function phoneReg(){
              return /^1\d{10}$/;
            }

           //ajax
              function my_ajax(_obj){
              	//获取参数：没有传入的设置默认值
              	var obj={
              		method:"get",
              		sendContent:"",
              		isAsyn:true,//asynchronization 异步	 asynchronous 异步的
              		func:null
              	}
              	for(let key in _obj){
              		obj[key]=_obj[key];
              	}
              	//ajax请求
              	var xhr= new XMLHttpRequest();
              	if(obj.method.toLowerCase()=="get"){
              		xhr.open(obj.method.toUpperCase(),obj.url+"?"+obj.sendContent,obj.isAsyn);
              		xhr.send();
              	}else if(obj.method.toLowerCase()=="post"){
              		xhr.open(obj.method.toUpperCase(),obj.url,obj.isAsyn);
              		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
              		xhr.send(obj.sendContent);
              	}
              	xhr.onreadystatechange=function(){
              		if(xhr.readyState==4 && xhr.status==200){
              			obj.func(xhr.responseText);
              			//console.log("交互完成");
              		}
              	}
              }

           //js

             var phoneNum=document.getElementById("phoneNum");
             var phonePass=document.getElementById("phonePass");
             var inputCode=document.getElementById("inputCode");
             var Liuyzm=document.getElementById("liuyzm");
             var Buttonfoot=document.getElementById("Buttonfoot");
             /*手机号*/
             phoneNum.onfocus=function(){
             	phoneNum.flag=0;
             	phoneNum.onblur=function(){
             				 show1()
             			}
             	};
             	    function show1(){
             	    	var result=checkAll("phone",phoneNum.value);
             	    		if(result==true){
             					console.log("手机格式正确");
             					/*请求数据*/
             					my_ajax({
             						method:"get",
             						url:"http://10.35.166.23:82/fenqile/PHP/regTel.php",
             						sendContent:"tel="+phoneNum.value,
             						func:function (data){
             							if(data==1){
             								$("#hick").css({"background":"rgba(0,0,0,0.6)","transition":"none"}).text("此手机号已被注册");
             								setTimeout(function(){
             									$("#hick").css({"background":"rgba(0,0,0,0)","transition":"all 1s"});
             								},1000);
             							}else{
             								console.log("此手机号可以使用");
             								phoneNum.flag=1;
             							}
             						}
             					});
             				}else if(result==false){
             					if(phoneNum.value.length>0){
             					    $("#hick").css({"background":"rgba(0,0,0,0.6)","transition":"none"}).text("手机格式不正确");
             						setTimeout(function(){
             							$("#hick").css({"background":"rgba(0,0,0,0)","transition":"all 1s"});
             						},1000);
             					}
             				}
             	    }
             	/*密码*/
             		phonePass.onfocus=function(){
             			phonePass.flag=0;
             			phonePass.onblur=function(){
             				show2()
             			}
             		};
             		function show2(){
             	    	var result=checkAll("pass",phonePass.value);
             	    		if(result==true){
             					console.log("密码格式正确");
             					phonePass.flag=1;
             				}else{
             					if(phonePass.value.length>0){
             						$("#hick").css({"background":"rgba(0,0,0,0.6)","transition":"none"}).text("密码格式不正确");
             						setTimeout(function(){
             							$("#hick").css({"background":"rgba(0,0,0,0)","transition":"all 1s"});
             						},1000);
             					}
             				}
             	    }
             	/*随机验证码*/
             	var _aa=document.getElementById("checkCode");
             	_aa.onclick =function(){
             	 var arrCode = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I",
             	       "J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
             	        var result="";
             			var oLen=arrCode.length;
             		    for(var i=0;i<4;i++){
             			result+=arrCode[parseInt(Math.random()*oLen)];
             			}
             		    //console.log(result)
             			_aa.innerHTML=result;
             	} ;

             		inputCode.onfocus=function(){
             			inputCode.flag=0;
             			inputCode.onblur=function(){
             				show3();
             			}
             		};
             		function show3() {
             			 if(inputCode.value.length <= 0) {
             			  console.log("请输入图片验证码！");
             			 }
             			 else if(inputCode.value.toUpperCase() != _aa.innerHTML.toUpperCase()) {
             			   $("#hick").css({"background":"rgba(0,0,0,0.6)","transition":"none"}).text("图片验证码输入有误!");
             				setTimeout(function(){
             					$("#hick").css({"background":"rgba(0,0,0,0)","transition":"all 1s"});
             				},1000)
             			 } else {
             			  console.log("图片验证码正确！");
             				 inputCode.flag=1;
             			 }
             		}
             	/*变化可视化密码*/
             		$("#phoneImg").click(function(){
             			$("#phonePass").toggleClass("show");
             			if($("#phonePass").hasClass("show")){
             				$("#phonePass")[0].type="text";
             				$("#phoneImg")[0].src="img/yybimg/微信截图_20171024101434.png";
             			}else{
             				$("#phonePass")[0].type="password";
             				$("#phoneImg")[0].src="img/yybimg/微信截图_20171024101403.png";
             			}
             		});
             	/*点击display:flex*/
             	  $("#phonePass").focus(function(){
             	  	 $("#phonePass").blur(function(){
             	  	 	$("#Yzshow")[0].style.display="flex";
             	  	 })
             	  });
             	/*发送验证码6位*/
             	var fsyzm=document.getElementById("fsyzm");
             	  var num;
             	  fsyzm.onclick=function(){
             	 	if(fsyzm.innerHTML=="发送验证码"){
             	 		/*f发送*/
             	 		var arrCode = [0,1,2,3,4,5,6,7,8,9];
             		        var results="";
             				var oLen=arrCode.length;
             			    for(var i=0;i<4;i++){
             				   results+=arrCode[parseInt(Math.random()*oLen)];
             				}
             			     num = results;
             		 		alert("4位验证码为:"+num);

             			 fsyzm.innerHTML="20S后重试";
             		 		let time=20;
             		 	var	timers=setInterval(function(){
             		 			time--;
             		 			if(time<0){
             		 				fsyzm.innerHTML="发送验证码";
             		 				clearInterval(timers);
             		 			}else{
             		 				fsyzm.innerHTML=time+"S后重试";
             		 			}
             		 		},1000)
             		    }
             	   };
             		 	/*失去焦点*/
             		Liuyzm.onfocus=function(){
             			Liuyzm.flag=0;
             			Liuyzm.onblur=function(){
             				show4()
             			}
             		};
                         function show4(){
             			   	//console.log(Liuyzm.length)
             		  		if(Liuyzm.value.length <= 0){
             					   console.log("请输入短信验证码！");
             				}else if(Liuyzm.value!=num){
             				     //console.log(Liuyzm.value);
             				     //console.log(num);
             					$("#hick").css({"background":"rgba(0,0,0,0.6)","transition":"none"}).text("短信验证码输入有误!");
             					setTimeout(function(){
             						$("#hick").css({"background":"rgba(0,0,0,0)","transition":"all 1s"});
             					},1000)
             				}else{
             					console.log("短信验证码正确！");
             					Liuyzm.flag=1;
             				}
             		    }
             	/*点击注册*/

             	Buttonfoot.onclick=function(){
                     show5()
             	}

             	 function show5(){
             		// console.log(phoneNum.flag);
             		 var sum=phoneNum.flag+phonePass.flag+inputCode.flag+Liuyzm.flag;
             		 //console.log(sum);
             	    if(sum==4){
             			my_ajax({
             				method:"post",
             				url:"http://10.35.166.23:82/fenqile/PHP/reg.php",
             				sendContent:"tel="+document.getElementById("phoneNum").value
             					+"&pass="+document.getElementById("phonePass").value,
             				func:function (data){
             					console.log(data);
             					if(data==1){
             						$("#hick").css({"background":"rgba(0,0,0,0.6)","transition":"none"}).text("恭喜你，完成了注册！！！");
             						setTimeout(function(){
             							$("#hick").css({"background":"rgba(0,0,0,0)","transition":"all 1s"});
             							location.href="#/Dl";
             						},1000);
             					}else{
             						$("#hick").css({"background":"rgba(0,0,0,0.6)","transition":"none"}).text("请完善信息");
             						setTimeout(function(){
             							$("#hick").css({"background":"rgba(0,0,0,0)","transition":"all 1s"});
             						},1000)
             					}
             				}
             			});
             		}else{
             			$("#hick").css({"background":"rgba(0,0,0,0.6)","transition":"none"}).text("请完善信息");
             			setTimeout(function(){
             				$("#hick").css({"background":"rgba(0,0,0,0)","transition":"all 1s"});
             			},1000)
             		}

             	}


         }
    }
</script>

<style scoped>
  .register-list{
  	background: white;
  	padding: 0.15rem 0;
  	position: relative;
  }
  .message-phone{
  	display: flex;
  	height:0.55rem;
  	border-bottom: 1px solid #eee;
  }
  .message-phone img{
  	display: block;
  	height:0.25rem;
  	width: 0.25rem;
  	padding:0.15rem 0.18rem;
  }
  .message-phone input{
  	display: block;
  	flex: 1;
  	color:#535c68;
  	font-size: 0.15rem;
  	outline: none;
  	border: solid 0px;
  }
   input::-webkit-input-placeholder{
   	color: #ccc;
   }
   .message-phone .code{
  	width: 0.7rem;
  	height: 0.3rem;
  	text-align: center;
  	line-height: 0.28rem;
  	background:url(../../assets/img/yybimg/微信截图_20171024145727.png) no-repeat;
  	margin: 0.15rem 0.15rem;
  	color: red;
  	font-size: 0.15rem;
  	letter-spacing: 0.05rem;
  	overflow: hidden;
  }
  .message-phone .yzmnum{
		    font-size: 0.16rem;
  	outline: none;
  	border: solid 0px;
  	background: white;
  	color: #3B9BFF;
  }
  .register-foot{
  	padding:0.2rem;
  }
  .foot-button{
  	display: block;
  	height:0.53rem;
  	background:#3b9bff;
  	font-size:0.16rem;
  	color: white;
  	width:100%;
  	border: solid 0px;
  	outline: none;
  	border-radius: 0.1rem;
  }
  #hick{
    position: fixed;
    width:80%;
    margin: 0 auto;
    top:51%;
    left:10%;
    height:0.4rem;
    border-radius:0.1rem;
    line-height: 0.4rem;
    font-size:0.2rem;
    text-align:center;
    background:rgba(0,0,0,0);
    color:white;
  }
</style>

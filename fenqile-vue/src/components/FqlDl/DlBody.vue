<template>
    <div>
        <section class="register-list">
            <div class="message-phone">
              <img src="../../assets/img/yybimg/微信截图_20171024101117.png">
              <input type="text" placeholder="手机号" id="phoneNum">
            </div>
            <div class="message-phone">
              <img src="../../assets/img/yybimg/微信截图_20171024101222.png">
              <input type="password" id="phonePass" placeholder="登录密码">
              <img id="phoneImg" src="../../assets/img/yybimg/微信截图_20171024101403.png">
            </div>
            <div class="message-phone">
              <img src="../../assets/img/yybimg/微信截图_20171024101258.png">
              <input type="text" placeholder="验证码" id="inputCode">
              <div class="code" id="checkCode">HGFR</div>
            </div>
            <div id="hick"></div>
          </section>
          <section class="register-foot">
            <a href="###"><button type="button" id="Buttonfoot" class="foot-button">登录</button></a>
            <div class="foot-text">
              <a href="###">短信快捷登录</a>
              <a href="###">忘记密码</a>
            </div>
          </section>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
       mounted(){
		   var that=this;
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


          //
          /*手机号*/
           	var phoneNum=document.getElementById("phoneNum");
           	    phoneNum.onfocus=function(){
           		    phoneNum.onblur=function(){
           				 show1()
           			}
           		};
           	    function show1(){
           	    	var phoneNum=document.getElementById("phoneNum").value;
           			if(phoneNum.length<=0){
           				$("#hick").css({"background":"rgba(0,0,0,0.6)","transition":"none"}).text("请输入手机号");
           				setTimeout(function(){
           					$("#hick").css({"background":"rgba(0,0,0,0)","transition":"all 1s"});
           				},1000);
           				return 0;
           			}else if(phoneNum.length>0){
           				return 1;
           			}
           		}
           	/*可视化密码*/
           		$("#phoneImg").click(function(){
           			$("#phonePass").toggleClass("show");
           			if($("#phonePass").hasClass("show")){
           				$("#phonePass")[0].type="text";
           				$("#phoneImg")[0].src="img/yybimg/微信截图_20171024101434.png";
           			}else{
           				$("#phonePass")[0].type="password";
           				$("#phoneImg")[0].src="img/yybimg/微信截图_20171024101403.png";
           			}
           		})
           	/*密码*/
            var phonePass=document.getElementById("phonePass");
           	phonePass.onfocus=function(){
           		phonePass.onblur=function(){
           			show2()
           		}
           	};
           	function show2(){
               	var phonePass=document.getElementById("phonePass").value;
           		if(phonePass.length<=0){
           			$("#hick").css({"background":"rgba(0,0,0,0.6)","transition":"none"}).text("请输入密码");
           			setTimeout(function(){
           				$("#hick").css({"background":"rgba(0,0,0,0)","transition":"all 1s"});
           			},1000);
           			return 0;
           		}else if(phonePass.length>0){
           			return 1;
           		}
           	}
           	/*验证码*/
           	var _aa=document.getElementById("checkCode");
           	_aa.onclick =function(){
           	 var arrCode = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I",
           	       "J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
           	        var result="";
           			var oLen=arrCode.length;
           		    for(var i=0;i<4;i++){
           			result+=arrCode[parseInt(Math.random()*oLen)];
           			}
           			_aa.innerHTML=result;
           		};
           		var inputCode=document.getElementById("inputCode");
           			inputCode.onfocus=function(){
           				inputCode.onblur=function(){
           					show3()
           				}
           			};
           		function show3(){
           			 var inputCode=document.getElementById("inputCode").value;
           			 if(inputCode.length <= 0)
           			 {
           			  console.log("请输入验证码！");
           			  return 0;
           			 }
           			 else if(inputCode.toUpperCase() != _aa.innerHTML.toUpperCase())
           			 {
           			    $("#hick").css({"background":"rgba(0,0,0,0.6)","transition":"none"}).text("验证码输入有误");
           					flag=true;
           					setTimeout(function(){
           						$("#hick").css({"background":"rgba(0,0,0,0)","transition":"all 1s"});
           					},1000)
           			   return 0;
           			 }
           			 else
           			 {
           			  console.log("验证码正确！");
           			  return 1;
           			 }
           		}
           	/*点击注册*/
           	var Buttonfoot=document.getElementById("Buttonfoot");
           	Buttonfoot.onclick=function(){
			  show4()
           	}

			function show4(){
				var sum=show1()+show2()+show3();
				if(sum==3){
					/*请求数据*/
					my_ajax({
						method:"post",
						url:"http://10.35.166.23:82/fenqile/PHP/log.php",
						sendContent:"tel="+document.getElementById("phoneNum").value
						+"&pass="+document.getElementById("phonePass").value,
						func:function (data){
							console.log(data);
							if(data==1){
								$("#hick").css({"background":"rgba(0,0,0,0.6)","transition":"none"}).text("恭喜你，登录成功！！！");
								setTimeout(function(){
									$("#hick").css({"background":"rgba(0,0,0,0)","transition":"all 1s"});
										/*vue时，删除加路由*/

									that.$store.dispatch("user",{username:document.getElementById("phoneNum").value});
									// console.log(that.saveCookie);
			  						that.saveCookie("userName",document.getElementById("phoneNum").value,1);			  	
										location.href="#/";
								},1000)
							}else{
								$("#hick").css({"background":"rgba(0,0,0,0.6)","transition":"none"}).text("登录失败，账号或密码错误！");
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
       },
	   methods:{
		   saveCookie:function(key,value,daycount){
			  var data=new Date();
			  data.setDate(data.getDate()+daycount);
			  document.cookie=encodeURIComponent(key)+"="+encodeURIComponent(value)+";path=/;expires="+data.toGMTString();
		   }
	   }
    }
</script>

<style scoped>
.register-list{
	background: white;
	padding: 0.15rem 0;
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
.register-foot{
  background: white;
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
.foot-text{
	padding: 0.2rem 0;
	display: flex;
	justify-content: space-between;
}
.foot-text a{
	display: block;
	font-size: 0.13rem;
	color: #3B9BFF;
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

#hick{
  position: fixed;
  width:80%;
  margin: 0 auto;
  top:45.5%;
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

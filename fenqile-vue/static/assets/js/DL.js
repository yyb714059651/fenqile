	/*手机号*/
	var o=document.getElementById("phoneNum");
		o.onfocus=function(){	
			o.onblur=function(){
				 show1()
			}   
		}
	    function show1(){    	
	    	var flag=false;
	    	var phoneNum=document.getElementById("phoneNum").value;
	    	var result=checkAll("phone",phoneNum);
	    	if(flag==false){
	    		if(result==true){
					console.log("手机号正确");
					flag=true;
					return 1;
				}else if(result==false){
					if(phoneNum.length>0){
					    $("#hick").css({"background":"rgba(0,0,0,0.6)","transition":"none"}).text("手机号不正确");
						flag=true;
						setTimeout(function(){
							$("#hick").css({"background":"rgba(0,0,0,0)","transition":"all 1s"});
						},1000)
						return 0;
					}				
				}		
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
	}
	function show2(){
    	var flag02=false;
    	var phonePass=document.getElementById("phonePass").value;
    	var result=checkAll("pass",phonePass);
    	if(flag02==false){
    		if(result==true){
				console.log("密码格式正确");
				flag02=true;
				return 1;
			}else if(result==false){
				if(phonePass.length>0){
				    $("#hick").css({"background":"rgba(0,0,0,0.6)","transition":"none"}).text("密码不正确");
					flag=true;
					setTimeout(function(){
						$("#hick").css({"background":"rgba(0,0,0,0)","transition":"all 1s"});
					},1000)
					return 0;
				}				
			}		
    	}	 
    	
    }
			
	/*验证码*/
	var _aa=document.getElementById("checkCode")	
	_aa.onclick =function(){
	 var arrCode = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I",
	       "J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	        var result="";
			var oLen=arrCode.length;
		    for(var i=0;i<4;i++){
			result+=arrCode[parseInt(Math.random()*oLen)];    
			}
			_aa.innerHTML=result;
		} 
		var inputCode=document.getElementById("inputCode");
			inputCode.onfocus=function(){
				inputCode.onblur=function(){
					show3()
				}
			}
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
	 function show4(){
		var sum=show1()+show2()+show3()
	    if(sum==3){			   
		    $("#hick").css({"background":"rgba(0,0,0,0.6)","transition":"none"}).text("恭喜你，登录成功！！！");		
			setTimeout(function(){
				$("#hick").css({"background":"rgba(0,0,0,0)","transition":"all 1s"});
				/*vue时，删除加路由*/
				location.href="https://m.fenqile.com/?ad_tag=FENQILE.MAIN.TAB.1";
				
			},1000) 				    
		}else{
			$("#hick").css({"background":"rgba(0,0,0,0.6)","transition":"none"}).text("请完善信息");		
			setTimeout(function(){
				$("#hick").css({"background":"rgba(0,0,0,0)","transition":"all 1s"});
			},1000)
		}	   
	} 
	
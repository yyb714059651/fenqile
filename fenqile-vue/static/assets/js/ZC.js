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
					console.log("手机格式正确");
					flag=true;
					return 1;
				}else if(result==false){
					if(phoneNum.length>0){
					    $("#hick").css({"background":"rgba(0,0,0,0.6)","transition":"none"}).text("手机格式不正确");
					//console.log("手机格式不正确");
						flag=true;
						setTimeout(function(){
							$("#hick").css({"background":"rgba(0,0,0,0)","transition":"all 1s"});
						},1000)
						return 0;
					}				
				}				
	    	}	    
	    }
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
				}else{
					if(phonePass.length>0){
						//console.log("密码格式不正确");
						$("#hick").css({"background":"rgba(0,0,0,0.6)","transition":"none"}).text("密码格式不正确");
						flag02=true;
						setTimeout(function(){
							$("#hick").css({"background":"rgba(0,0,0,0)","transition":"all 1s"});
						},1000)
						return 0;
					}					
				}
	    	}	 
	    	
	    }
	/*随机验证码*/
	var _aa=document.getElementById("checkCode")	
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
	} 	
		var inputCode=document.getElementById("inputCode");
		inputCode.onfocus=function(){
			inputCode.onblur=function(){
				show3();
			}
		}
		function show3() {
			 var inputCode=document.getElementById("inputCode").value;
			 //console.log(_aa.innerHTML+1)
			 if(inputCode.length <= 0) 
			 {
			  console.log("请输入图片验证码！");
			  /*$("#hick").css({"background":"rgba(0,0,0,0.6)","transition":"none"}).text("请输入图片验证码!");		
				setTimeout(function(){
					$("#hick").css({"background":"rgba(0,0,0,0)","transition":"all 1s"});
				},1000)*/
			  return 0;
			 }
			 else if(inputCode.toUpperCase() != _aa.innerHTML.toUpperCase()) 
			 {
			   //console.log("图片验证码输入有误！");
			   $("#hick").css({"background":"rgba(0,0,0,0.6)","transition":"none"}).text("图片验证码输入有误!");		
				setTimeout(function(){
					$("#hick").css({"background":"rgba(0,0,0,0)","transition":"all 1s"});
				},1000)
			   return 0;
			 }
			 else 
			 {
			  console.log("图片验证码正确！");
			  return 1;
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
		})
		
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
		 		timers=setInterval(function(){
		 			time--;
		 			if(time<0){
		 				fsyzm.innerHTML="发送验证码"; 
		 				clearInterval(timers);
		 			}
		 			else{
		 				fsyzm.innerHTML=time+"S后重试";
		 			}
		 		},1000)		 			 		
		    }
	   }		 		
		 	/*失去焦点*/	 	
		var Liuyzm=document.getElementById("liuyzm");
		Liuyzm.onfocus=function(){
			Liuyzm.onblur=function(){
				show4()
			}
		} 	
            function show4(){
			   	var Liuyzm=document.getElementById("liuyzm").value;
			   	console.log(Liuyzm.length)
		  		if(Liuyzm.length <= 0){ 
		  			/*$("#hick").css({"background":"rgba(0,0,0,0.6)","transition":"none"}).text("请输入短信验证码!");		
					setTimeout(function(){
						$("#hick").css({"background":"rgba(0,0,0,0)","transition":"all 1s"});
					},1000)*/
					   console.log("请输入短信验证码！");
					   return 0;
					 }
					 else if(Liuyzm!=num) 
					 {
				     console.log(Liuyzm)
				     console.log(num)
				        $("#hick").css({"background":"rgba(0,0,0,0.6)","transition":"none"}).text("短信验证码输入有误!");		
						setTimeout(function(){
							$("#hick").css({"background":"rgba(0,0,0,0)","transition":"all 1s"});
						},1000)
					   //console.log("短信验证码输入有误！");	
					   return 0;
					 }
					 else 
					 {
				       console.log("短信验证码正确！");
				       return 1;
					 } 
		    }
				 		
	/*点击注册*/
	 function show5(){
		var sum=show1()+show2()+show3()+show4();
	    if(sum==4){		
		   
		    $("#hick").css({"background":"rgba(0,0,0,0.6)","transition":"none"}).text("恭喜你，完成了注册！！！");		
			setTimeout(function(){
				$("#hick").css({"background":"rgba(0,0,0,0)","transition":"all 1s"});
				location.href="DL.html";
			},1000) 
			
		    //alert("恭喜你，完成了注册！！！");
		    
		}else{
			$("#hick").css({"background":"rgba(0,0,0,0.6)","transition":"none"}).text("请完善信息");		
			setTimeout(function(){
				$("#hick").css({"background":"rgba(0,0,0,0)","transition":"all 1s"});
			},1000)
			//alert("请完善信息");
		}
	   
	}
	 
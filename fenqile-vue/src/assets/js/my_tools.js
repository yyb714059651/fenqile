//获取id元素
function getId(id){
	return document.getElementById(id);
}
//获取标签名元素
function getTag(tagName){
	return document.getElementsByTagName(tagName);
}
//获取class元素
function getClass(class_name){  // 通过class获取元素的兼容写法
	var all = document.getElementsByTagName("*");
	
	var res = [];
	var classArr;
	for(var i=0;i<all.length;i++){
		if(all[i].className.indexOf(class_name)!=-1){//class中含有目标class名
			if(all[i].className.indexOf(" ")==-1){//class中不含空格
				if(all[i].className==class_name){//排除包含查找的class名，但是比要查找的class长的情况（如：找class=="a"，需要排除class=="abc"）
					res.push(all[i]);
				}
			}else{
				classArr=all[i].className.split(" ");
				for(let j=0;j<classArr.length;j++){
					if(classArr[j]==class_name){//排除包含查找的class名，但是比要查找的class长的情况（如：找class=="a"，需要排除class=="abc"）
						res.push(all[i]);
					}
				}
			}
				
		}
	}
	return res;
}

//添加class名
function addClass(obj,str){   // 添加一个className
	if(obj.className.indexOf(str)==-1){
		obj.className +=" "+str;
	}
}
//删除
function removeClass(obj,str){   //删除一个className
	obj.className = obj.className.replace(str,"");
	obj.className = obj.className.replace(/\s$/g,"");
}


//获取样式
/*参数说明：
	obj:需要获取的DOM对象
	attr:属性
*/
function getStyle(obj,attr){//获取css样式
    if(obj.currentStyle){//ie
        return obj.currentStyle[attr];
    }
    else{
        return getComputedStyle(obj,null)[attr];
    }
}

//运动
/**
//参数说明：
	obj(必要):要运动的元素（DOM）
	json(必要):运动的属性和属性值		// 属性值可以不加px 透明度是用0-1之间的数值
	step[可选]：运动的速度，值越大运动的越慢（建议值：2-100），默认是5
	fn[可选]:运动结束时执行的函数
*/
function move(_json){
	var defaultValue={
		"obj":null,
		"json":{},
		"step":5,
		"fn":null
	};
	for(let key in _json){
		defaultValue[key]=_json[key];
	}
    clearInterval(defaultValue.obj.timer)	// 清除正在执行的定时器
    var iSpeed  = 0;
    defaultValue.obj.timer = setInterval(function(){
        var bOver = true; //假设运动完成
        for (var attr in defaultValue.json){  //每个属性的遍历修改
            var iCur = 0;
            var iTarget;     //   因为我们传入的透明度参数是0-1之间，而我们的初始值是乘100的，所以目标值应该也相应的乘100
            if(attr == "opacity"){	//透明度
                iCur = parseFloat(getStyle(defaultValue.obj,"opacity"))*100;
                iTarget = parseInt(defaultValue.json[attr]*100);
            }else{
                iCur = Math.round(parseFloat(getStyle(defaultValue.obj,attr)));
                iTarget = parseInt(defaultValue.json[attr]);
            }

            iSpeed = (iTarget - iCur)/defaultValue.step;//获取相对速度
            iSpeed = iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);//上下取整

            if(iCur != iTarget){
                bOver = false; //如果某一个属性没有完成运动
                if(attr == "opacity"){
                    defaultValue.obj.style.filter ='alpha(opacity:'+(iCur + iSpeed)+')';
                    defaultValue.obj.style.opacity =(iCur + iSpeed)/100;
                }else{
                    defaultValue.obj.style[attr] =iCur + iSpeed +"px";
                }

            }
        }
        if(bOver){//运动完成
            clearInterval(defaultValue.obj.timer);
            if(defaultValue.fn){
            	defaultValue.fn();  //如果有回调函数，执行回调函数
            }
        }
    },10)
}
//示例：
//	move({
//		obj:document.getElementById("box"),
//		json:{width:"500px",height:300},
//		step:10,
//		fn:function(){alert("运动结束");}
//	});

//必要参数：url, func和sendContent(需要处理数据的时候)
//默认参数：method：get		isAsyn:true		sendContent:""		func:null
function my_ajax(_obj){
	//获取参数：没有传入的设置默认值
	var obj={
		method:"get",//请求方式
		reqDatas:{},//请求参数用json方式写
		isAsyn:true,//asynchronization 异步	 asynchronous 异步的
		cb:null//回调函数
	}
	for(let key in _obj){
		obj[key]=_obj[key];
	}
	
	//把json格式的请求内容改成字符串格式
	var sendMsg="";
	for(let key in obj.reqDatas){
		sendMsg += (key +"="+ obj.reqDatas[key]+ "&");
	}
	sendMsg=sendMsg.slice(0,sendMsg.length-1);//删除最后多余的一个&符号
	console.log(sendMsg);
	
	//ajax请求
	var xhr= new XMLHttpRequest();//创建对象
	if(obj.method.toLowerCase()=="get"){//设置参数和发送
		xhr.open(obj.method.toUpperCase(),obj.url+"?"+sendMsg,obj.isAsyn);
		xhr.send();
	}else if(obj.method.toLowerCase()=="post"){
		xhr.open(obj.method.toUpperCase(),obj.url,obj.isAsyn);
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(sendMsg);
	}
	xhr.onreadystatechange=function(){//回调函数
		if(xhr.readyState==4 && xhr.status==200){
			if(obj.cb!=null){
				obj.cb(xhr.responseText);
				//console.log("交互完成");
			}
		}
	}
}

/*
 * //示例
	my_ajax({
		"url":"jsons/car.json",
		func:function(str){console.log(JSON.parse(str));}
	});
*/
/*
function my_ajax_promise(_obj){
	var p=new Promise(function(resolv,reject){
		function ajax(_obj){
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
				var 
				if(xhr.readyState==4){
					if(xhr.status==200){
						//obj.func(xhr.responseText);
						//console.log("交互完成");
						resolv(xhr.responseText);
					}else{
						reject("");
					}
				}
			}
		}
	});
	return p;	
}
*/
/*
 * 示例
function successFunc(str){
	console.log(str);
}
function failFunc(){
	console.log("error 503");
}
fn({
	url:"jsons/car.json",
	func:function(str){console.log(JSON.parse(str));},
	//method:"post"
}).then(successFunc,failFunc);
 */
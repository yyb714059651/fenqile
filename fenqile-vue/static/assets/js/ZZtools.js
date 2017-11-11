
//功能：做表单验证的常见正则
//参数:
//type:验证类型,如：phone表示手机，email表示邮件等
//value:需要验证的字符串
//返回值:true:验证通过；false：验证失败。

function checkAll(type,value){
	var reg;
	switch(type){
		case "ip": reg = ipReg();break;    //iP
		case "name": reg = nameReg();break;   //用户名
		case "date":reg = dateReg();break;   //日期
		case "pass":reg = passReg();break;//密码
		case "email":reg = emailReg();break;//email
		case "phone":reg = phoneReg();break;//电话
		case "yzm":reg = yzmReg();break;//验证码
		default:;  
	}
	
	if(reg.test(value)){
		return true;
	}else{
		return false;
	}
}
//ipReg  Ip地址
function ipReg(){
	return /^((\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/;
}

function nameReg(){
	 //账户名只能使用数字 字母 下划线，且数字不能开头，长度在6-15之间
	return /^[a-zA-Z_]\w{5,14}$/;	
}

function dateReg(){
	return /^\d{4}(-|\/|\.)(0[1-9]|1[0-2])(-|\/|\.)\d{2}$/;
}
// 密码只能使用数字 字母 长度在6-15之间  字母开头
function passReg(){
	return /^[a-zA-Z]\w{5,14}$/;
}
 //邮箱开头最少3个字符，@一个或多个字符
function emailReg(){
	return /^\w{3,}@\w+\.(com|net|cn)$/i; 
}
//电话开头1   总11位
function phoneReg(){
	return /^1\d{10}$/;
}

function yzmReg(){
	return /^\d{6}$/;
}
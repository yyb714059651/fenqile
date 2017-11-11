<?php
	//处理跨域  
    header("Access-Control-Allow-Origin:*"); //*号表示所有域名都可以访问  
    header("Access-Control-Allow-Method:POST,GET"); 
	
	header("content-type:text/html;charset=utf-8");
	$goodsname=$_GET["goodsname"];
	$goodsid=$_GET["goodsid"];
	$nowprice=$_GET["nowprice"];
	$oldprice=$_GET["oldprice"];
	$img=$_GET["img"];
	$img1=$_GET["img1"];
	$img2=$_GET["img2"];
	$kucun=$_GET["kucun"];
	$descript=$_GET["descript"];
	$guige=$_GET["guige"];
	$guige1=$_GET["guige1"];
	$guige2=$_GET["guige2"];
	$color=$_GET["color"];
	$color1=$_GET["color1"];
	$color2=$_GET["color2"];
	$pinjia=$_GET["pinjia"];
	$huodong=$_GET["huodong"];
	$ownstore=$_GET["ownstore"];
	//echo $goodsname.",".$oldprice.",".$goodsid.",".$nowprice.",".$oldprice
	//echo $guige.",".$guige1.",".$guige2.",".$color.",".$color1.",".$color2.",".$pinjia.",".$huodong.",".$ownstore
	//echo $img.",".$img1.",".$img2.",".$kucun.",".$descript
	//建立连接
	$lianjieSQL=mysql_connect("localhost","root","qianfeng");
	//检测连接是否成功
	if(!$lianjieSQL){
		die("连接不上：".mysql_error());
	}
	//选择需要连接的库
	mysql_select_db("fenqile",$lianjieSQL);
	//执行存入数据工作
	$addUser="insert into goods(goodsid,goodsname,nowprice,oldprice,img,img1,img2,guige,guige1,guige2,color,color1,color2,pingjia,huodong,ownstore,descript,kucun) "
	."values('".$goodsid."','".$goodsname."',".$nowprice.",".$oldprice.",'".$img."','".$img1."','".$img2.""
	."','".$guige."','".$guige1."','".$guige2."','".$color."','".$color1."','".$color2."','".$pinjia.""
	."','".$huodong."','".$ownstore."','".$descript."',".$kucun.")";
	//echo $addUser;
	$res = mysql_query($addUser,$lianjieSQL);
	//关闭数据库
	mysql_close($lianjieSQL);
	echo $res;//返回插入的结果，1代表成功，0(空)代表失败
?>
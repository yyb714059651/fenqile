<?php
	//处理跨域  
    header('Access-Control-Allow-Origin:*'); //*号表示所有域名都可以访问  
    header('Access-Control-Allow-Method:POST,GET'); 
    
	header('content-type:text/html;charset=utf-8');
	$order=$_GET["order"];//1、升序 	2、降序
	//连接数据库
	$lianjie=mysql_connect('localhost','root','qianfeng');
	if(!$lianjie){
		die('数据库连接出错：错误代码：'.mysql_error());
	}
	//选择数据库
	mysql_select_db('fenqile',$lianjie);
	
	//执行核心语句
	//执行核心语句
	if($order==1){
		$sqlstr="select * from goods order by nowprice*1 ASC";
	}else{
		$sqlstr="select * from goods order by nowprice*1 DESC";
	}
	
	$result=mysql_query($sqlstr,$lianjie);
	$str='[';
	$rows=mysql_fetch_array($result);//游标下移,拿出结果集中的某一行，返回值是拿到的行；
	while($rows){//因为返回的是json数据，所以最外层要用单引号，里面用双引号
		$str=$str.'{"id":"'.$rows[0].'","goodsid":"'.$rows[1].'",'
		.'"goodsname":"'.$rows[2].'","nowprice":'.$rows[3].',"oldprice":'.$rows[4].','
		.'"img":["'.$rows[5].'","'.$rows[6].'","'.$rows[7].'"],'
		.'"guige":["'.$rows[8].'","'.$rows[9].'","'.$rows[10].'"],'
		.'"color":["'.$rows[11].'","'.$rows[12].'","'.$rows[13].'"],"pingjia":"'.$rows[14].'",'
		.'"huodong":"'.$rows[15].'","ownstore":"'.$rows[16].'","descript":"'.$rows[17].'","kucun":"'.$rows[18].'"}';
		$rows=mysql_fetch_array($result);//游标下移,拿出结果集中的某一行，返回值是拿到的行；
		if($rows){
			$str=$str.',';
		}
	}
	$str=$str.']';
	//关闭数据库
	mysql_close($lianjie);
	echo $str;
?>
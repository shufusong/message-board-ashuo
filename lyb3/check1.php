<?php
session_start();
header("content-type:text/html;charset=utf-8");
$adminName=$_POST['adminName'];
$adminPwd=$_POST['adminPwd'];
include("conn.php");
$rs=mysql_query("select * from admins where adminName='$adminName' and adminPwd='$adminPwd'");
  $num=mysql_num_rows($rs);
	$info=mysql_fetch_array($rs);
	if($num>0){
  setcookie("sessionId",session_id());
  setcookie("adminName",$adminName);
  setcookie(md5("login"),md5("success".$adminName.session_id()));

  echo '{"status":"1001","msg":"success"}';	
}else{
	echo '{"status":"2001","msg":"用户名或密码错误！"}';
}
?>
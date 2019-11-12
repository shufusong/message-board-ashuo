<?php 
session_start();
if($_COOKIE[md5("login")]==md5("success".$_COOKIE["adminName"].$_COOKIE["sessionId"])) {
	$reply=$_POST['reply'];
	$messageId=$_POST['messageId'];
		 include("conn.php");
	  $flag=mysql_query("update message set reply='$reply' where messageId='$messageId'");
	  if($flag){
		  }else{
			  echo '<script>alert("回复失败，请联系管理员");</script>';
			  }
	}else{
		header("location:error.php");
	}
	

?>
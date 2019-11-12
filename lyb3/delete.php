<?php 
 session_start();
if($_COOKIE[md5("login")]==md5("success".$_COOKIE["adminName"].$_COOKIE["sessionId"])) {
$messageId=$_GET['messageId'];
	 include("conn.php");
  $flag=mysql_query("delete from message where messageId='$messageId'");
  if($flag){
	    header("location:index.html");
	  }else{
		  echo '<script>alert("删除失败");</script>';
		  }
 }
else{
	header("location:error.php");
}
?>
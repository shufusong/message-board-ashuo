<?php
$title = $_POST['title'];
$author=$_POST['author'];
$content=$_POST['content'];
include("conn.php");

$flag=mysql_query("insert into message(author,title,content,addTime) values('$author','$title','$content',now())");
if($flag){
	header("location:index.html");
}else{
	echo '<script>alert("注册失败，请联系管理员")</script>';
}
?>
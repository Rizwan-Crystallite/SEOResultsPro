<?php
	session_start();

$servername = "localhost";
$username = "seoresults_seoresults";
$password = "xiN-LIL}G_{4";
$db="seoresults_seoresults";
$con = mysqli_connect($servername, $username, $password,$db);
	
	define('SERVER_PATH',$_SERVER['DOCUMENT_ROOT'].'/Dashboard/admin/');
	define('SITE_PATH','https://seoresultspro.com/Dashboard/admin/');
// 	define('PRODUCT_IMAGE_SERVER_PATH',SERVER_PATH.'media/product/');
// 	define('PRODUCT_IMAGE_SITE_PATH',SITE_PATH.'media/product/');
?>
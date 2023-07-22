<?php

	include 'database.php';

// 	$name=$_POST['name'];
// 	$email=$_POST['email'];
// 	$phone=$_POST['phone'];
// 	$message=$_POST['comments'];
// 	$date = date("l jS \of F Y h:i:s A");
// 	 $sql = "INSERT INTO `leadform`( `name`, `email`, `phone`, `comments`,`wholeDate`) 
// 	VALUES ('$name','$email','$phone','$message','$date')";

    
// 	mysqli_query($conn, $sql);

// 	$html="<table><tr><td>Name</td><td>$name</td></tr><tr><td>Email</td><td>$email</td></tr><tr><td>Phone</td><td>	$phone</td></tr><tr><td>Message</td><td>$message</td></tr></table>";
	
	$name=$_POST['name'];
	$email=$_POST['email'];
	$phone=$_POST['phone'];
	$message=$_POST['comments'];
    $date = date("l jS \of F Y h:i:s A");
	$pageURL=$_POST['pageURL'];
	$clientIP=$_POST['ip'];
	
	$params = array();
    parse_str($_POST['form'], $params);
	echo $sql = "INSERT INTO `leadform`( `name`, `email`, `phone`, `comments`,`wholeDate`,`page_url`,`clientIP`) 
	VALUES ('".$params['name']."','".$params['email']."','".$params['phone']."','".$params['comments']."','$date', '$pageURL','$clientIP')";

	mysqli_query($conn, $sql);

	$html="<table><tr><td>Name</td><td>".$params['name']."</td></tr><tr><td>Email</td><td>".$params['email']."</td></tr><tr><td>Phone</td><td>	".$params['phone']."</td></tr><tr><td>message</td><td>".$params['comments']."</td></tr><tr><td>page URL</td><td>$pageURL</td></tr><tr><td>IP</td><td>$clientIP</td></tr></table>";
	
	
// 	$address = array('support@seoresultspro.com');

  include('smtp/PHPMailerAutoload.php');
	$mail=new PHPMailer(true);
	$mail->isSMTP();
	$mail->Host="smtp.gmail.com";
	$mail->Port=587;
	$mail->SMTPSecure="tls";
	$mail->SMTPAuth=true;
	$mail->Username="signups@seoresultspro.com";
	$mail->Password="JVdyYm3*BQ4h5dD&";
	$mail->SetFrom("signups@seoresultspro.com");
	$mail->addAddress("signups@seoresultspro.com");
// 	while (list ($key, $val) = each ($address)) {
//         $mail->AddAddress($val);
//     }
	$mail->IsHTML(true);
	$mail->Subject="Lead Form - SEO RESULTS PRO";
	$mail->Body=$html;
	$mail->SMTPOptions=array('ssl'=>array(
		'verify_peer'=>true,
		'verify_peer_name'=>true,
		'allow_self_signed'=>true
	));
	try{
	    $mail->send();
	}
catch(Exception $e){
   echo 'Message: ' .$e->getMessage();
}
	
	


mysqli_close($conn);





?>
	
	

	

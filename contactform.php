<?php

	include 'database.php';

	$fname=$_POST['fname'];
	$lname=$_POST['lname'];
	$email=$_POST['email'];
	$phone=$_POST['phone'];
	$company=$_POST['company'];
	$websiteurl=$_POST['websiteurl'];
	$optimization=$_POST['optimization'];
	$socialmedia=$_POST['socialmedia'];
	$webhosting=$_POST['webhosting'];
	$ppc=$_POST['ppc'];
	$linkbuilding=$_POST['linkbuilding'];
	$webdesign=$_POST['webdesign'];
	$cro=$_POST['cro'];
	$ada=$_POST['ada'];
	$ecom=$_POST['ecom'];
	$emarketing=$_POST['emarketing'];
	$reviewm=$_POST['reviewm'];
	$vanimation=$_POST['vanimation'];
	$amazonm=$_POST['amazonm'];
	$content=$_POST['content'];
	$searchengine=$_POST['searchengine'];
	$message=$_POST['comments'];
	$date = date("l jS \of F Y h:i:s A");
	$sql = "INSERT INTO `contactforms`( `fname`, `lname`, `email`, `company`, `websiteurl`, `optimization`,  `socialmedia`,   `webhosting`, `ppc`, `linkbuilding`, `webdesign`, `cro`, `ada`, `ecom`, `emarketing`, `reviewm`, `vanimation`, `amazonm`, `content`, `searchengine`, `comments`,`wholeDate`) 
	VALUES ('$fname','$lname','$email', '$phone', '$company', '$websiteurl', '$optimization', '$socialmedia', '$webhosting',  '$ppc', '$linkbuilding', '$webdesign', '$cro', '$ada', '$ecom', '$emarketing',  '$reviewm', '$vanimation', '$amazonm', '$content', '$searchengine',  '$message','$date')";

	mysqli_query($conn, $sql);

	$html="<table><tr><td>First Name</td><td> $fname</td></tr><tr><td>Last Name</td><td> $lname</td></tr><tr><td>Email</td><td>	 $email</td></tr><tr><td>Phone</td><td>	$phone</td></tr><tr><td>Company</td><td>	$company</td></tr><tr><td>Website Url</td><td>	$websiteurl</td></tr><tr><td>Optimization (SEO) </td><td>	$optimization</td></tr><tr><td>Social Media </td><td>	$socialmedia</td></tr><tr><td> Web Hosting / Maintenance </td><td>	$webhosting</td></tr><tr><td>PPC</td><td>	$ppc</td></tr><tr><td>Link Building</td><td>	$linkbuilding</td></tr><tr><td>Web Design</td><td>	$webdesign</td></tr><tr><td>
	Conversion Rate Omtimization (CRO)</td><td>	$cro</td></tr><tr><td>ADA Compliance </td><td>	$ada</td></tr><tr><td>
	eCommerece Optimization</td><td>	$ecom</td></tr><tr><td>Email Marketing</td><td>	$emarketing</td></tr><tr><td>Reputation / Reviews Management </td><td>	$reviewm</td></tr><tr><td>Amazon Marketing</td><td>	$amazonm</td></tr><tr><td>content</td><td>	$content</td></tr><tr><td>Search Engine MArketing</td><td>$searchengine</td></tr><tr><td>
	Message</td><td>$message</td></tr></table>";
    	$address = array('support@seoresultspro.com');
  include('smtp/PHPMailerAutoload.php');
	$mail=new PHPMailer(true);
	$mail->isSMTP();
	$mail->Host="smtp.gmail.com";
	$mail->Port=587;
	$mail->SMTPSecure="tls";
	$mail->SMTPAuth=true;
   $mail->Username="signups@seoresultspro.com";
	$mail->Password="&F6E8TSM2YS&3dH>";
	$mail->SetFrom("signups@seoresultspro.com");
	$mail->addAddress("signups@seoresultspro.com");
// 	$mail->addAddress("support@seoresultspro.com");
	while (list ($key, $val) = each ($address)) {
        $mail->AddAddress($val);
    }
	$mail->IsHTML(true);
	$mail->Subject="Contact Form - SEO RESULT PRO";
	$mail->Body=$html;
	$mail->SMTPOptions=array('ssl'=>array(
		'verify_peer'=>true,
		'verify_peer_name'=>true,
		'allow_self_signed'=>true
	));
	if($mail->send()){
	
	}else{
	
	}

mysqli_close($conn);





?>
	
	

	

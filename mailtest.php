<?php

    //SET UP MAIL VENDOR
	include('smtp/PHPMailerAutoload.php');



	
	


        $html = "SOME THING IS MISSING PLEASE CHECK ";
        $mail=new PHPMailer(true);
        $mail->isSMTP();
        $mail->Host="smtp.gmail.com";
        $mail->Port=587;
        $mail->SMTPSecure="tls";
        $mail->SMTPAuth=true;
        $mail->Username="signups@seoresultspro.com";
        $mail->Password="&F6E8TSM2YS&3dH>";
        $mail->SetFrom("signups@seoresultspro.com");
        $mail->addAddress("harrykennedy.cs@gmail.com");
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





?>
	
	

	

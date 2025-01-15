<?php

//SET UP MAIL VENDOR
include('smtp/PHPMailerAutoload.php');


$date = date("l jS \of F Y h:i:s A");
$pageURL = $_POST['pageURL'];
$clientIP = $_POST['ip'];


$params = array();
parse_str($_POST['form'], $params);
$form_name = $params['hiddenform'];

$api_url = 'https://sheetdb.io/api/v1/y1dgzpu8ani8s';

// Data to send
$data = array(
    'name' => $params['name'],
    'number' => $params['phone'],
    'email' => $params['email'],
    'comments' => $params['comments'],
    'ip' => $clientIP,
    'pageurl' => $pageURL,
    'formName' => $form_name,
    'jsonData' => json_encode($params),
    'created_date' => $date,
);

print_r($data);

// Initialize cURL session
$ch = curl_init($api_url);

// Set cURL options
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));

// Execute cURL session and store the response
$response = curl_exec($ch);

// Check for cURL errors
if (curl_errno($ch)) {
    echo 'Curl error: ' . curl_error($ch);
}

// Close cURL session
curl_close($ch);


if ($params['name'] == "") {
    $name = $params['fname'];
} else {
    $name = $params['name'];
}



$html = "<table><tr><td>Name</td><td>" . $name . "</td></tr><tr><td>Email</td><td>" . $params['email'] . "</td></tr><tr><td>Phone</td><td>	" . $params['phone'] . "</td></tr><tr><td>message</td><td>" . $params['comments'] . "</td></tr><tr><td>page URL</td><td>$pageURL</td></tr><tr><td>IP</td><td>$clientIP</td></tr>
	<tr><td>FORM NAME </td><td>$form_name</td></tr></table>";






if ($params['name'] == "" || $params['phone'] == "" || $params['email'] == "") {
    $html .= "SOME THING IS MISSING PLEASE CHECK ";
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = "smtp.gmail.com";
    $mail->Port = 587;
    $mail->SMTPSecure = "tls";
    $mail->SMTPAuth = true;
    $mail->Username = "signups@seoresultspro.com";
    $mail->Password = "&F6E8TSM2YS&3dH>";
    $mail->SetFrom("signups@seoresultspro.com");
    $mail->addAddress("dev.bwc.hk@productions-dev.com");
    $mail->IsHTML(true);
    $mail->Subject = "Lead Form - SEO RESULTS PRO";
    $mail->Body = $html;
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => true,
            'verify_peer_name' => true,
            'allow_self_signed' => true
        )
    );
    try {
        $mail->send();
    } catch (Exception $e) {
        echo 'Message: ' . $e->getMessage();
    }
} else {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = "smtp.gmail.com";
    $mail->Port = 587;
    $mail->SMTPSecure = "tls";
    $mail->SMTPAuth = true;
    $mail->Username = "signups@seoresultspro.com";
    $mail->Password = "&F6E8TSM2YS&3dH>";
    $mail->SetFrom("signups@seoresultspro.com");
    $mail->addAddress("signups@seoresultspro.com");
    $mail->IsHTML(true);
    $mail->Subject = "Lead Form - SEO RESULTS PRO";
    $mail->Body = $html;
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => true,
            'verify_peer_name' => true,
            'allow_self_signed' => true
        )
    );
    try {
        $mail->send();
    } catch (Exception $e) {
        echo 'Message: ' . $e->getMessage();
    }
}

// The URL where you want to send the request
$url = 'https://brandsapi.pulse-force.com/api/v1/leads'; // Replace with your target URL


// Data to send
$data2 = array(
    'name' => $name,
    'phone' => $params['phone'],
    'email' => $params['email'],
    'message' => $params['comments'],
    'ip' => $clientIP,
    'pageurl' => $pageURL,
    'formName' => $form_name,
    'jsonData' => json_encode($params),
    'created_date' => $date,
);

// Data to be sent in the request
$data3 = array(
    'page_url' => $pageURL,
    'user_ip' => $clientIP,
    'lead_data' => $data2
);
// Initialize cURL session
$ch = curl_init($url);
// Set the necessary cURL options
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // Return the response as a string
curl_setopt($ch, CURLOPT_POST, true); // Specify the request type as POST
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data3)); // Encode the data array to JSON and set it as POST fields
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json', // Set the content type to JSON
    'Content-Length: ' . strlen(json_encode($data3)) // Set the content length
));
// Execute the cURL request and get the response
$response = curl_exec($ch);
// Check for errors
if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
} else {
    // Print the response
    echo 'Response:' . $response;
}
// Close the cURL session
curl_close($ch);
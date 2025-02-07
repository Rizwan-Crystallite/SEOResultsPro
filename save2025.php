<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');
//SET UP MAIL VENDOR
include 'smtp/PHPMailerAutoload.php';

$date     = date("l jS \of F Y h:i:s A");
$pageURL  = $_POST['pageURL'];
$clientIP = $_POST['ip'];

$params = [];
parse_str($_POST['form'], $params);
$form_name = $params['hiddenform'];

$url = 'https://brandsapi.pulse-force.com/api/v1/leads'; 
if ($params['name'] == "") {
    $name = $params['fname'];
} else {
    $name = $params['name'];
}


try {

    $api_url = 'https://sheetdb.io/api/v1/y1dgzpu8ani8s';

    // Data to send
    $data = [
        'name'         => $params['name'],
        'number'       => $params['phone'],
        'email'        => $params['email'],
        'comments'     => $params['comments'],
        'ip'           => $clientIP,
        'pageurl'      => $pageURL,
        'formName'     => $form_name,
        'jsonData'     => json_encode($params),
        'created_date' => $date,
    ];

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

} catch (Exception $e) {
    echo "SHEET FUNCTION IS NOT WORKING" . $e;
}

try {

   

    $html = "<table><tr><td>Name</td><td>" . $name . "</td></tr><tr><td>Email</td><td>" . $params['email'] . "</td></tr><tr><td>Phone</td><td>	" . $params['phone'] . "</td></tr><tr><td>message</td><td>" . $params['comments'] . "</td></tr><tr><td>page URL</td><td>$pageURL</td></tr><tr><td>IP</td><td>$clientIP</td></tr>
        <tr><td>FORM NAME </td><td>$form_name</td></tr></table>";

    if ($params['name'] == "" || $params['phone'] == "" || $params['email'] == "") {
        $html .= "SOME THING IS MISSING PLEASE CHECK ";
        $mail = new PHPMailer(true);
        $mail->isSMTP();
        $mail->Host       = "smtp.gmail.com";
        $mail->Port       = 587;
        $mail->SMTPSecure = "tls";
        $mail->SMTPAuth   = true;
        $mail->Username   = "developer@infinitimediainc.com";
        $mail->Password   = "dgezdqflhifhyata";
        $mail->SetFrom("developer@infinitimediainc.com");
        $mail->addAddress("harrykennedy.cs@gmail.com");
        $mail->IsHTML(true);
        $mail->Subject     = "Lead Form - SEO RESULTS PRO";
        $mail->Body        = $html;
        $mail->SMTPOptions = [
            'ssl' => [
                'verify_peer'       => true,
                'verify_peer_name'  => true,
                'allow_self_signed' => true,
            ],
        ];
        try {
            $mail->send();
        } catch (Exception $e) {
            echo 'Message: ' . $e->getMessage();
        }
    } else {
        $mail = new PHPMailer(true);
        $mail->isSMTP();
        $mail->Host       = "smtp.gmail.com";
        $mail->Port       = 587;
        $mail->SMTPSecure = "tls";
        $mail->SMTPAuth   = true;
        $mail->Username   = "developer@infinitimediainc.com";
        $mail->Password   = "dgezdqflhifhyata";
        $mail->SetFrom("developer@infinitimediainc.com");
        $mail->addAddress("harrykennedy.cs@gmail.com");
        $mail->IsHTML(true);
        $mail->Subject     = "Lead Form - SEO RESULTS PRO";
        $mail->Body        = $html;
        $mail->SMTPOptions = [
            'ssl' => [
                'verify_peer'       => true,
                'verify_peer_name'  => true,
                'allow_self_signed' => true,
            ],
        ];
        try {
            $mail->send();
        } catch (Exception $e) {
            echo 'Message: ' . $e->getMessage();
        }
    }

} catch (Exception $e) {
    echo "Email Is Not Working " . $e;
    $api_url = 'https://sheetdb.io/api/v1/y1dgzpu8ani8s';

    // Data to send
    $data = [
        'name'         => $params['name'],
        'number'       => $params['phone'],
        'email'        => $params['email'],
        'comments'     => $params['comments'],
        'ip'           => $clientIP,
        'pageurl'      => $pageURL,
        'formName'     => $form_name,
        'jsonData'     => json_encode($params),
        'created_date' => $date,
    ];

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
}

try {
    
    $data2 = [
        'name'         => $name,
        'phone'        => $params['phone'],
        'email'        => $params['email'],
        'message'      => $params['comments'],
        'ip'           => $clientIP,
        'pageurl'      => $pageURL,
        'formName'     => $form_name,
        'jsonData'     => json_encode($params),
        'created_date' => $date,
    ];

    
    $data3 = [
        'page_url'  => $pageURL,
        'user_ip'   => $clientIP,
        'lead_data' => $data2,
    ];
   
    $ch = curl_init($url);
                                                               
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);            
    curl_setopt($ch, CURLOPT_POST, true);                      
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data3)); 
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',                 
        'Content-Length: ' . strlen(json_encode($data3)), 
    ]);
    
    $response = curl_exec($ch);
    
    if (curl_errno($ch)) {
        echo 'Error:' . curl_error($ch);
    } else {
        
        echo 'Response:' . $response;
    }
    
    curl_close($ch);
}
 catch (Exception $e) {
    echo "API FUNCTION" . $e;

}


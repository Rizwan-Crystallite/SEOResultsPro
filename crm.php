<?php
require __DIR__ . '/vendor/autoload.php';

use FacebookAds\Api;
use FacebookAds\Logger\CurlLogger;
use FacebookAds\Object\ServerSide\ActionSource;
use FacebookAds\Object\ServerSide\Content;
use FacebookAds\Object\ServerSide\CustomData;
use FacebookAds\Object\ServerSide\DeliveryCategory;
use FacebookAds\Object\ServerSide\Event;
use FacebookAds\Object\ServerSide\EventRequest;
use FacebookAds\Object\ServerSide\UserData;


$access_token = "EAALgqwceBVUBO1Yw1ZA2VmAZAVyMvJHmD8y5xySnciLJfYgxu1JzBG0m9NOuMQBGTmc92IQ5nfBKoTW7VUOvgcNAdTF4eZCeqwojeSNHpkopyOem1XtM3Pu2oGEqo6JsTrqRcJCMM4XhYPjYRJQWCYfp5TyxjwjZACssZAMOQXFQVdQL04BYZBZCLK9J1bJBk3pNAZDZD";
$pixel_id = "815377486247146";

$api = Api::init(null, null, $access_token);
$api->setLogger(new CurlLogger());

$user_data = (new UserData())
    ->setEmails(array('joe@eg.com'))
    ->setPhones(array('12345678901', '14251234567'))
    // It is recommended to send Client IP and User Agent for Conversions API Events.
    ->setClientIpAddress($_SERVER['REMOTE_ADDR'])
    ->setClientUserAgent($_SERVER['HTTP_USER_AGENT'])
    ->setFbc('fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890')
    ->setFbp('fb.1.1558571054389.1098115397');

$content = (new Content())
    ->setProductId('product123')
    ->setQuantity(1)
    ->setDeliveryCategory(DeliveryCategory::HOME_DELIVERY);



$event = (new Event())
    ->setEventName('Website View From Api')
    ->setEventTime(time())
    ->setEventSourceUrl('http://jaspers-market.com/product/123')
    ->setUserData($user_data)
    ->setActionSource(ActionSource::WEBSITE);

$events = array();
array_push($events, $event);

$request = (new EventRequest($pixel_id))
    ->setEvents($events);
$response = $request->execute();
print_r($response);


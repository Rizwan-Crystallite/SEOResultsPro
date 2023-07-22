<?php
session_start();
session_destroy('MASTER');
session_unset();
header('Location: https://seoresultspro.com/dashboard/');

?>
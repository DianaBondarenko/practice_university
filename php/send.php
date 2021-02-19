<?php

$recepient = "dianabondarenko17@gmail.com";
$siteName = "Practice";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$message = "Имя: $name \nТелефон: $phone";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>
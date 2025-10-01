<?php

require "config/autoload.php";

if(isset($_GET["PHPSESSID"]))
{
    session_id($_GET["PHPSESSID"]);
    session_start();
}
else
{
    session_start();
}


$router = new Router();
$router->handleRequest();



<?php

require "config/autoload.php";

if(isset($_GET["PHPSESSID"])
{
    session_start($_GET["PHPSESSID"]);
}
else
{
    session_start();
}


$router = new Router();
$router->handleRequest();



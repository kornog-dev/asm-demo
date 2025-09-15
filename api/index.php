<?php

require "config/autoload.php";

session_start();

$router = new Router();
$router->handleRequest();



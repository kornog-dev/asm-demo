<?php

class Router {

    public function handleRequest() : void
    {
        $controller = new ApiController();

        if(!isset($_GET['route']) || empty($_GET['route']) || $_GET['route'] == null)
        {
            $controller->getAllInfos();
        }
        else if($_GET['route'] === 'add')
        {
            $controller->add($_GET['register'], $_GET['value']);
        }
        else if($_GET['route'] === 'sub')
        {
            $controller->sub($_GET['register'], $_GET['value']);
        }
        else if($_GET['route'] === 'get')
        {
            $controller->get($_GET['register']);
        }
        else if($_GET['route'] === 'set')
        {
            $controller->set($_GET['register']);
        }
        else if($_GET['route'] === 'read')
        {
            $controller->read();
        }
        else if($_GET['route'] === 'write')
        {
            $controller->write();
        }
        else if($_GET['route'] === 'jump')
        {
            $controller->jump($_GET['instruction_number']);
        }
        else if($_GET['route'] === 'zjump')
        {
            $controller->zjump($_GET['value'], $_GET['instruction_number']);
        }
        else
        {
            $controller->routeNotFound();
        }
    }
}

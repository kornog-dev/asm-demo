<?php

class ApiController
{
    private array $memory;
    private array $registers;

    public function __construct()
    {
        if(isset($_SESSION["memory"])){
            $this->memory = $_SESSION["memory"];
        }
        else
        {
            $this->memory = $this->initMemory();
        }

        if(isset($_SESSION["registers"])){
            $this->registers = $_SESSION["registers"];
        }
        else
        {
            $this->registers = $this->initRegisters();
        }
    }

    private function initMemory() : array
    {
        $memory = [];

        for($i = 0; $i < 100; $i++)
        {
            $box = [
                "id" => $i,
                "value" => 0
            ];
            $memory[] = $box;
        }

        return $memory;
    }

    private function initRegisters() : array
    {
        $registers = [
            "storage" => null,
            "condition" => null,
            "cursor" => null,
            "program" => null,
        ];

        return $registers;
    }

    public function getAllInfos() : void
    {
        $_SESSION["registers"] = $this->registers;
        $_SESSION["memory"] = $this->memory;

        $data = [
            "code" => 200,
            "memory" => $this->memory,
            "registers" => $this->registers,
            "token" => session_id()
        ];

        echo json_encode($data);
    }

    public function add(string $register, string $value) : void
    {
        $this->registers[$register] += intval($value);

        $_SESSION["registers"] = $this->registers;
        $_SESSION["memory"] = $this->memory;

        $this->getAllInfos();
    }

    public function sub(string $register, string $value) : void
    {
        $this->registers[$register] -= intval($value);

        $_SESSION["registers"] = $this->registers;
        $_SESSION["memory"] = $this->memory;

        $this->getAllInfos();
    }

    public function get(string $register) : void
    {
        $this->registers["storage"] = $this->registers[$register];

        $_SESSION["registers"] = $this->registers;
        $_SESSION["memory"] = $this->memory;

        $this->getAllInfos();
    }

    public function set(string $register) : void
    {
         $this->registers[$register] = $this->registers["storage"];

         $_SESSION["registers"] = $this->registers;
         $_SESSION["memory"] = $this->memory;

        $this->getAllInfos();
    }

    public function read() : void
    {
        if(isset($this->memory[$this->registers["cursor"]]))
        {
            $this->registers["storage"] = $this->memory[$this->registers["cursor"]];

            $_SESSION["registers"] = $this->registers;
            $_SESSION["memory"] = $this->memory;

            $this->getAllInfos();
        }
        else
        {
            $this->outOfBounds();
        }
    }

    public function write() : void
    {
        if(isset($this->memory[intval($this->registers["cursor"])]))
        {
            $this->memory[intval($this->registers["cursor"])] = $this->registers["storage"];

            $_SESSION["registers"] = $this->registers;
            $_SESSION["memory"] = $this->memory;

            $this->getAllInfos();
        }
        else
        {
            $this->outOfBounds();
        }
    }

    public function jump(string $instructionNumber) : void
    {
        $this->registers["cursor"] = intval($instructionNumber);

        $_SESSION["registers"] = $this->registers;
        $_SESSION["memory"] = $this->memory;

        $this->getAllInfos();
    }

    public function zjump(string $value, string $instructionNumber) : void
    {
        if($this->registers["condition"] === intval($value))
        {
            $this->registers["cursor"] = intval($instructionNumber);
        }

        $_SESSION["registers"] = $this->registers;
        $_SESSION["memory"] = $this->memory;

        $this->getAllInfos();
    }

    public function routeNotFound() : void
    {
        $data = [
            "code" => 404,
            "message" => "Unknown route"
        ];

        echo json_encode($data);
    }

    public function outOfBounds() : void
    {
        $data = [
            "code" => 501,
            "message" => "Cursor out of bounds"
        ];

        echo json_encode($data);
    }
}

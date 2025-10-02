import {add, sub, get,set, read, write, jump, zjump} from "./instructions.js";

let interValId;

function readInstruction()
{
    let program = JSON.parse(localStorage.getItem("asm-program"));
    let instructions = program.instructions;
    let i = Number(localStorage.getItem("asm-cursor"));

    console.log(`Nombre d'instructions ${instructions.length} - Instruction en cours ${i}`);

    if(i === instructions.length)
    {
        console.log("Fin du programme");
        clearInterval(interValId);
        interValId = null;
    }
    else
    {
        if(instructions[i].name === "add")
        {
            add(instructions[i].register, instructions[i].value);
        }
        else if(instructions[i].name === "sub")
        {
            sub(instructions[i].register, instructions[i].value);
        }
        else if(instructions[i].name === "get")
        {
            get(instructions[i].register)
        }
        else if(instructions[i].name === "set")
        {
            set(instructions[i].register);
        }
        else if(instructions[i].name === "read")
        {
            read();
        }
        else if(instructions[i].name === "write")
        {
            write();
        }
        else if(instructions[i].name === "jump")
        {
            jump(instructions[i].instruction_number);
        }
        else if(instructions[i].name === "zjump")
        {
            zjump(instructions[i].value, instructions[i].instruction_number)
        }
    }
}

export function runProgram()
{
    interValId = setInterval(readInstruction, 1000);
}

export function loadProgram(event) {
    event.preventDefault();

    localStorage.setItem("asm-program", JSON.stringify({}));
    localStorage.setItem("asm-cursor", 0);

    let files = document.getElementById('selectFile').files;
    console.log(files);

    if (files.length <= 0) {
        return false;
    }

    let fr = new FileReader();
    fr.readAsText(files.item(0));

    fr.onload = function(e) {
        let program = JSON.parse(e.target.result);
        localStorage.setItem("asm-program", JSON.stringify(program));

        let name = document.querySelector("#program h2");
        name.innerHTML = program.program_name;

        let ul = document.querySelector("#program ul");
        ul.innerHTML = "";

        for(let i = 0; i < program.instructions.length; i++)
        {
            let li = document.createElement("li");

            let divCursor = document.createElement("div");

            if(i === 0)
            {
                divCursor.innerHTML = "=>";
                divCursor.classList.add("active");
            }

            li.appendChild(divCursor);

            let divNumber = document.createElement("div");
            divNumber.innerHTML = i;
            li.appendChild(divNumber);

            let divInstruction = document.createElement("div");

            if(program.instructions[i].name === "add" || program.instructions[i].name === "sub")
            {
                divInstruction.innerHTML = `${program.instructions[i].name} ${program.instructions[i].register} ${program.instructions[i].value}`;
            }
            else if(program.instructions[i].name === "get" || program.instructions[i].name === "set")
            {
                divInstruction.innerHTML = `${program.instructions[i].name} ${program.instructions[i].register}`;
            }
            else if(program.instructions[i].name === "read" || program.instructions[i].name === "write" || program.instructions[i].name === "exit")
            {
                divInstruction.innerHTML = `${program.instructions[i].name}`;
            }
            else if(program.instructions[i].name === "jump")
            {
                divInstruction.innerHTML = `${program.instructions[i].name} ${program.instructions[i].instruction_number}`;
            }
            else if(program.instructions[i].name === "zjump")
            {
                divInstruction.innerHTML = `${program.instructions[i].name} ${program.instructions[i].value} ${program.instructions[i].instruction_number}`;
            }
            li.appendChild(divInstruction);

            ul.appendChild(li);
        }
    }
}
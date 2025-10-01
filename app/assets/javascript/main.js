import {initMemory, updateMemory} from "./memory.js";
import {loadProgram, runProgram} from "./program.js";

window.addEventListener("DOMContentLoaded", function(){
    initMemory();

    let params = new URLSearchParams({
        route : 'token'
    });
    fetch("http://asm-demo.kornog-formations.com/api/index.php?" + params.toString()).then(
        (response) => {
            response.json().then((data) => {
                localStorage.setItem("token", data.token);
            })
        }
    );

    let loadProgramForm = document.querySelector("#load-program");
    loadProgramForm.addEventListener("submit", loadProgram);

    let runBtn = document.getElementById("run-program");
    runBtn.addEventListener("click", runProgram);
})
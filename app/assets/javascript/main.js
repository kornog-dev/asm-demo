import {initMemory} from "./memory.js";
import {loadProgram, runProgram} from "./program.js";

window.addEventListener("DOMContentLoaded", function(){
    initMemory();

    let loadProgramForm = document.querySelector("#load-program");
    loadProgramForm.addEventListener("submit", loadProgram);

    let runBtn = document.getElementById("run-program");
    runBtn.addEventListener("click", runProgram);
})
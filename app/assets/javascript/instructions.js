import {updateRegisters} from "./registers.js";
import {updateMemory} from "./memory.js";
import {updateCursor} from "./cursor.js";

export function add(register, value) {

    console.log(`add ${register} ${value}`);

    let params = new URLSearchParams({
        route : 'add',
        register : register,
        value : value,
        PHPSESSID : localStorage.getItem("token")
    });
    fetch("http://asm-demo.kornog-formations.com/api/index.php?" + params.toString()).then(
        (response) => {
            response.json().then((data) => {
                updateRegisters(data.registers);
                updateMemory(data.memory);
                updateCursor();
            })
        }
    );
}

export function sub(register, value) {

    console.log(`sub ${register} ${value}`);

    let params = new URLSearchParams({
        route : 'sub',
        register : register,
        value : value,
        PHPSESSID : localStorage.getItem("token")
    });
    fetch("http://asm-demo.kornog-formations.com/api/index.php?" + params.toString()).then(
        (response) => {
            response.json().then((data) => {
                updateRegisters(data.registers);
                updateMemory(data.memory);
                updateCursor();
            })
        }
    );
}

export function get(register) {

    console.log(`get ${register}`);

    let params = new URLSearchParams({
        route : 'get',
        register : register,
        PHPSESSID : localStorage.getItem("token")
    });
    fetch("http://asm-demo.kornog-formations.com/api/index.php?" + params.toString()).then(
        (response) => {
            response.json().then((data) => {
                updateRegisters(data.registers);
                updateMemory(data.memory);
                updateCursor();
            })
        }
    );
}

export function set(register) {

    console.log(`set ${register}`);

    let params = new URLSearchParams({
        route : 'set',
        register : register,
        PHPSESSID : localStorage.getItem("token")
    });
    fetch("http://asm-demo.kornog-formations.com/api/index.php?" + params.toString()).then(
        (response) => {
            response.json().then((data) => {
                updateRegisters(data.registers);
                updateMemory(data.memory);
                updateCursor();
            })
        }
    );
}

export function read() {

    console.log(`read`);

    let params = new URLSearchParams({
        route : 'read',
        PHPSESSID : localStorage.getItem("token")
    });
    fetch("http://asm-demo.kornog-formations.com/api/index.php?" + params.toString()).then(
        (response) => {
            response.json().then((data) => {
                updateRegisters(data.registers);
                updateMemory(data.memory);
                updateCursor();
            })
        }
    );
}

export function write() {

    console.log(`write`);

    let params = new URLSearchParams({
        route : 'write',
        PHPSESSID : localStorage.getItem("token")
    });
    fetch("http://asm-demo.kornog-formations.com/api/index.php?" + params.toString()).then(
        (response) => {
            response.json().then((data) => {
                console.log(data);
                updateRegisters(data.registers);
                updateMemory(data.memory);
                updateCursor();
            })
        }
    );
}

export function jump(instructionNumber) {

    console.log(`jump ${instructionNumber}`);

    let params = new URLSearchParams({
        route : 'jump',
        instruction_number : instructionNumber,
        PHPSESSID : localStorage.getItem("token")
    });
    fetch("http://asm-demo.kornog-formations.com/api/index.php?" + params.toString()).then(
        (response) => {
            response.json().then((data) => {
                updateRegisters(data.registers);
                updateMemory(data.memory);
                localStorage.setItem("asm-cursor", data.registers.cursor);
                updateCursor();
            })
        }
    );
}

export function zjump(value, instructionNumber) {

    console.log(`zjump ${value} ${instructionNumber}`);

    let params = new URLSearchParams({
        route : 'jump',
        instruction_number : instructionNumber,
        value : value,
        PHPSESSID : localStorage.getItem("token")
    });
    fetch("http://asm-demo.kornog-formations.com/api/index.php?" + params.toString()).then(
        (response) => {
            response.json().then((data) => {
                updateRegisters(data.registers);
                updateMemory(data.memory);
                localStorage.setItem("asm-cursor", data.registers.cursor);
                updateCursor();
            })
        }
    );
}


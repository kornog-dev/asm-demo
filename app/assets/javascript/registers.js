export function updateRegisters(registers) {
    let storage = document.querySelector("#reg-storage p");
    let condition = document.querySelector("#reg-condition p");
    let cursor = document.querySelector("#reg-cursor p");
    let program = document.querySelector("#program p");

    if(registers.storage !== null)
    {
        storage.innerHTML = "";
        storage.innerHTML = registers.storage;
    }

    if(registers.condition !== null)
    {
        condition.innerHTML = "";
        condition.innerHTML = registers.condition;
    }

    if(registers.cursor !== null)
    {
        cursor.innerHTML = "";
        cursor.innerHTML = registers.cursor;
    }

    if(registers.program !== null)
    {
        program.innerHTML = "";
        program.innerHTML = registers.program;
    }

}
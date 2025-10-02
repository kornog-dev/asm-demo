export function updateCursor()
{
    let cursorDiv = document.querySelector("#program ul li > div:first-of-type.active");
    cursorDiv.innerHTML = "";
    cursorDiv.classList.toggle("active");

    let programDiv = document.querySelector("#reg-program p");
    let programCount = Number(programDiv.innerHTML);

    let program = JSON.parse(localStorage.getItem("asm-program"));
    let instructions = program.instructions;

    if(programCount < instructions.length)
    {
        let lis = document.querySelectorAll("#program ul li");
        let div = lis[programCount].querySelector("div:first-of-type");
        div.classList.toggle("active");
        div.innerHTML = "=>";
    }

    localStorage.setItem("asm-cursor", Number(programDiv.innerHTML));
}
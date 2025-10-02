export function updateCursor()
{
    let cursor = localStorage.getItem("asm-cursor");
    let program = JSON.parse(localStorage.getItem("asm-program"));
    console.log(program);

    if(cursor < program.instructions.length)
    {
        let cursorDiv = document.querySelector("#program ul li > div:first-of-type.active");
        console.log(cursorDiv);
        cursorDiv.innerHTML = "";
        cursorDiv.classList.toggle("active");
        let li = cursorDiv.parentElement;
        let nextLi = li.nextSibling;

        if(nextLi)
        {
            let nextDiv = nextLi.childNodes[0];
            nextDiv.classList.toggle("active");
            nextDiv.innerHTML = "=>";
        }

        let programDiv = document.querySelector("#program p");
        console.log(programDiv);

        localStorage.setItem("asm-cursor", Number(programDiv.innerHTML));
    }
}
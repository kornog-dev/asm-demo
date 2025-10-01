export function initMemory()
{
    let memory = document.querySelector("#memory");

    for(let i=0; i < 100; i++)
    {
        let box = document.createElement("section");
        memory.appendChild(box);
    }
}

export function updateMemory(newMemory)
{
    let memory = document.querySelectorAll("#memory section");

    for(let i = 0; i < 100; i++)
    {
        let box = memory[i];
        box.innerHTML = "";

        if(newMemory[i].value !== 0)
        {
            let p = document.createElement("p");
            let value = document.createTextNode(newMemory[i].value);
            p.appendChild(value);
            box.appendChild(p);
        }
    }
}
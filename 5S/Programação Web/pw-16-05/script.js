import { util } from "./utils";
const apiUrl = 'http://servicodados.ibge.gov.br/api/v3/noticias?qtd=5';

document.addEventListener("DOMContentLoaded", () => {
    foo()
    asyncFoo()
    util()
})

function foo(){
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((e) => console.error(e))
}

async function asyncFoo(){
    const main = document.querySelector('main')
    try{
        const response = await fetch(apiUrl)
        const jsonResponse = await response.json()
        console.log(jsonResponse)

        // const div = document.createElement('div')
        // const h2 = document.createElement('h2')
        // const p = document.createElement('p')

        // h2.textContent = jsonResponse.items[0].titulo
        // p.textContent = jsonResponse.items[0].introducao

        // div.appendChild(h2)
        // div.appendChild(p)
        // main.appendChild(div)

        //--------------------------

        main.innerHTML = `
        <div>
            <h2>${jsonResponse.items[0].titulo}</h2>
            <p>${jsonResponse.items[0].introducao}</p>
        </div>`

    }catch(e){
        main.innerHTML = `
        <div class='e'>
            <h2>deu ruim</h2>
        </div>`
        console.error(e)
    }
}
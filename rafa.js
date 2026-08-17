const input = document.getElementById("inpot")
const h1 = document.getElementById("agaum")
const btn = document.getElementById("butao")


async function consultar(){
    const response = await fetch(`https://viacep.com.br/ws/${55042080}/json`)
    
    let endereco = await response.json()

    console.log(endereco)
    h1.textContent = `${endereco.logradouro}, ${endereco.bairro}, ${endereco.complemento}`
}


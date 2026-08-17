async function consultar(){

    const response = await fetch('https://viacep.com.br/ws/${55042080}/json')
    console.log(response)
}


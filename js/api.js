let tabela = document.querySelector("#tabela")


// async e uma forma que JS tem de transformar uma função sincrona em assincrona, muito utilizado em APIs
async function carregarDados(){
    const url = "https://jsonplaceholder.org/users"
    
    const resultado = await fetch(url)// fecth irá fazer uma buscar na url passada como parâmentro
    const dados = await resultado.json()// estamos convertendo todas os dados estão vindo api no formato json
    console.log(dados)

    for (const item of dados) {
        //console.log(item.email)

        //CRIANDO ELEMENTOS HTML
        let linha = document.createElement("tr")
        const tdNome = document.createElement("td")
        const tdEmail = document.createElement("td")
        const tdTrabalho = document.createElement("td")
        const tdFone = document.createElement("td")
        
        //CRIANDO CONTEÚDO NAS COLUNAS
        tdNome.textContent = item.firstname
        tdEmail.textContent = item.email
        tdTrabalho.textContent = item.company.bs
        tdFone.textContent = item.phone

        //ADICIONADO OS ELEMENTOS EM SUAS TAGS
        linha.appendChild(tdNome)
        linha.appendChild(tdEmail)
        linha.appendChild(tdTrabalho)
        linha.appendChild(tdFone)

        tabela.appendChild(linha)
    }

}
carregarDados()
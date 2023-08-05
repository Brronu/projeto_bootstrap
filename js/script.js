// alert("Ola mundo")
// console.log("Só quem e dev vai descobrir!")
let nome = document.querySelector("#nome")

function exibirNome(){
    console.log(nome.value)
    if(nome.value = ""){
        nome.style.border = "2 px solid green"
    }
    else{
        nome.style.border = "2px solid green"
    }
}

nome.addEventListener("blur",exibirNome)// o ddEventListener cria um evento para algum elemento, no caso estamos utilizando o evento'blur', que e quando o foco sai de um campo

// nome.addEventListener("focus", function(){
//     nome.value = "Esxte campo não deve ficar vazio"
    
// })
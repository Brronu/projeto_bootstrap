// alert("Ola mundo")
// console.log("Só quem e dev vai descobrir!")
let nome = document.querySelector("#nome")

function exibirNome(){
    console.log(nome.value)
    if(nome.value == ""){
        nome.style.border = "2px solid red"
    }
    else{
        nome.style.border = "2px solid green"
    }
}

nome.addEventListener("blur",exibirNome)// o ddEventListener cria um evento para algum elemento, no caso estamos utilizando o evento'blur', que e quando o foco sai de um campo

// nome.addEventListener("focus", function(){
// nome.value = "Esxte campo não deve ficar vazio"// })

let idade = document.querySelector("#idade")

idade.addEventListener("blur",function(){
    if(idade.value >=18){
        alert("Você possui mais de 18 anos ou mais!")
        //Essa função irá redirecionar o usuario para um link especifico
        window.location.href= "https://onlyfans.com/"
    }
    else{
        alert("Infelizmente você não e de maior ")
        window.location.href = ""
    }
})

let endereco = document.querySelector("input[name=end]")
endereco.addEventListener("blur",function(){
        console.log(endereco.value.length)

        if(endereco.value.length >=35){
            endereco.style.border = "2px solid red"
            alert("endereço muito grande")
            

        }
        else{
            alert("ok")
            endereco.style.border = "2px solid yellow"

        }

})


let email = document.querySelector("#email")
let confirmacao = document.querySelector("#confirmar")

email.addEventListener("keyup", function(){
    let minusculo = email.value.toLowerCase()//Tornando o conteúdo do email minúsculo
    confirmacao.value = email.value

    if(minusculo.indexOf('@')== -1 || minusculo.indexOf('.com') ==-1){
        //executar de for verdade
        console.log("Email invalido")
        //email.style.border = "2px solid red"
        email.classList.add("border-danger")
        email.classList.remove("border-success")
        
    }
    else{
        //execultar se for falso
        console.log("Email valido")
        //email.style.border = "2px solid green"
        email.classList.add("border-success")        
        email.classList.remove("border-danger")        
    }

    

    console.log(email.value.indexOf("@"))
})

let senha = document.querySelector("#senha")
let btn_olho = document.querySelector(".fa-eye")

btn_olho.addEventListener("click", ()=>{})// ()=>{} isto e uma arrow function, ou seja, uma versão resumida da função anonima

btn_olho.addEventListener("click",()=>{
    if(btn_olho.classList.contains("fa-eye")){
        //console.log("A classe existe")
        btn_olho.classList.remove("fa-eye")
        btn_olho.classList.add("fa-eye-slash")

        senha.setAttribute("type", "text")
    }
    else{
        //console.log("A classe não existe")
        btn_olho.classList.remove("fa-eye-slash")
        btn_olho.classList.add("fa-eye")

        senha.setAttribute("type", "password")
    }
})

//PEGADO DADOS DO CAMPO RADIO

let escolaridade = document.querySelectorAll("input[name=escolaridade]")
let btnEscolaridade = document.querySelector("#btnEscolaridade")

btnEscolaridade.addEventListener("click",(evento)=>{
    //console.log(evento)
    evento.preventDefault()// essa função irá impedir o comportamento padrão do botão
    
    console.log(escolaridade[0],[1])

})
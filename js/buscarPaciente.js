//http://api-pacientes.herokuapp.com/pacientes
var API_URL = "http://api-pacienteas.herokuapp.com/pacientes"
var botaoBusca = document.querySelector("#buscar-paciente")
botaoBusca.addEventListener("click", function() {
    var xhr = new XMLHttpRequest() //OBJETO RESPONSAVEL POR FAZER REQUISIÇÕES HTTP, XML, ANTES ERA RESPONSAVEL POR BUSCA ARQUIVOS XML
    xhr.open("GET", API_URL) //método get e enviando a url
    xhr.addEventListener("load", function() { // adicionando escutador, loade é carregado, então quando estiver carregado os dados me chame
         console.log(xhr.responseText) //responseText me traz o seu conteúdo
         var resposta = xhr.responseText
         var pacientes = JSON.parse(resposta) //vai transforma meu texto em um objeto javascript, vai traduzir, ou como dizem parsea de string para um objeto
         var erroAjax = document.querySelector("#erro-ajax")
         
         if(xhr.status == 200){
             erroAjax.classList.add("invisivel")
            pacientes.forEach(function(paciente){
                adicionaNaTabela(paciente)
            })
         }else{
             erroAjax.classList.remove("invisivel")
             console.log(xhr.status)
             console.log(xhr.responseText)
         }


    })
    xhr.send() //enviando requisição
})
//JSON, JavaScript Object Notetion 
var titulo = document.querySelector("h1");
//digamos que documento é uma representação do html já carregado, querySelector é uma consulta ao meu documento atráveis do parânetro passado

//titulo.textContent //textcontent = conteúdo de texto, todos elementos que possuem texto podemos recupera ou alteraro através desse método
titulo.textContent = "JESUS CRISTO É O SENHOR!"

//selecionando paciente

//var paciente = document.querySelector("#primeiro-paciente")
var pacientes = document.querySelectorAll(".paciente")
var tBoy = document.querySelector("#tabela-pacientes")

for(let i = 0; i < pacientes.length; i++){
    let paciente = pacientes[i]

    var peso = paciente.querySelector(".info-peso").textContent
    var altura = paciente.querySelector(".info-altura").textContent
    var tdImc = paciente.querySelector(".info-imc")
    
    
    var alturaValida = true;
    var pesoValido = true
    
    if(peso <= 0 || peso >= 300){
        pesoValido = false;
        tdImc.textContent = "Peso Inválido!"
       // paciente.style.color = 'red';
        //paciente.style.backgroundColor = "red" //Método antigo
        paciente.classList.add("message_invalid" ) //método recomendavél para manipular stilos

    }
    
    if(altura <= 0 || altura >= 3){
        alturaValida = false
        tdImc.textContent = "Altura Inválida!"
        paciente.classList.add("message_invalid") //message_invali é a classe css, que vai se atribuia á esse campo
        
    }
    
    if(alturaValida && pesoValido){
        var IMC = peso / (altura * altura)
        tdImc.textContent = IMC.toFixed(2) //toFixed, ele é responsavel pela formatação dos números, estou dizendo que quereo apenas ducas casas depoi da virgula
        console.log(IMC)
    } 
}

//Capturando o evento de click e passando uma função anonima
titulo.addEventListener("click", function () {
    console.log("JESUS CRISTO É O SENHOR!")
})

var botao = document.querySelector("#adicionar-paciente") //documento é uma copia do html, meu DOM
botao.addEventListener("click", function() {
    event.preventDefault() //não executa o eventos padroes
    var fom = document.querySelector("#form")
    console.log("botao clicado, GRAÇAS A DEUS!!")

    var nome = form.nome.value
    var peso = form.peso.value 
    var altura = form.altura.value
    var gordura = form.gordura.value 

    var novaTr = document.createElement("tr") //criando uma tr

    //criando as td
    var tdNome = document.createElement("td")
    var tdPeso = document.createElement("td")
    var tdAltura = document.createElement("td")
    var tdGordura = document.createElement("td")

    //atribuindo valores ao meus tds
    tdNome.textContent = nome
    tdPeso.textContent = peso 
    tdAltura.textContent = altura
    tdGordura.textContent = gordura

    //adicionando as td na tr
    novaTr.appendChild(tdNome)
    novaTr.appendChild(tdPeso)
    novaTr.appendChild(tdAltura)
    novaTr.appendChild(tdGordura)

    //adicionando nova liha no tbody
    tBoy.appendChild(novaTr)


})

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
    var tdIMC = document.createElement("td")

    //atribuindo valores ao meus tds
    tdNome.textContent = nome
    tdPeso.textContent = peso 
    tdAltura.textContent = altura
    tdGordura.textContent = gordura 
    tdIMC.textContent = calcularIMC(peso,altura)

    //adicionando as td na tr
    novaTr.appendChild(tdNome)
    novaTr.appendChild(tdPeso)
    novaTr.appendChild(tdAltura)
    novaTr.appendChild(tdGordura)
    novaTr.appendChild(tdIMC)

    //adicionando nova liha no tbody
    tBoy.appendChild(novaTr)


})
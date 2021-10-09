var botao = document.querySelector("#adicionar-paciente") //documento é uma copia do html, meu DOM

botao.addEventListener("click", function() {

    event.preventDefault() //não executa o eventos padroes
    var form = document.querySelector("#form")
    console.log("botao clicado, GRAÇAS A DEUS!!")

    var paciente = obtendoDadosDoForm(form)
    var pacienteTr = criaTr(paciente)
   
    //adicionando nova liha no tbody
    tBoy.appendChild(pacienteTr)
})

function obtendoDadosDoForm(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value ,
        altura: form.altura.value,
        gordura: form.gordura.value, 
        imc: calcularIMC(form.peso.value, form.altura.value)
    }
    return paciente;
}


function criaTr(paciente){

    var novaTr = document.createElement("tr") //criando uma tr
    novaTr.classList.add("paciente")

    //criando as td
    var tdNome = montaTd(paciente.nome, "info-nome");
    var tdPeso = montaTd(paciente.peso, "info-peso");
    var tdAltura = montaTd(paciente.altura, "info-altura");
    var tdGordura = montaTd(paciente.gordura, "info-gordura");
    var tdIMC = montaTd(paciente.imc, "info-imc");

    //atribuindo valores ao meus tds
    /*tdNome.textContent = paciente.nome
    tdPeso.textContent = paciente.peso 
    tdAltura.textContent = paciente.altura
    tdGordura.textContent = paciente.gordura 
    tdIMC.textContent = paciente.imc*/

    //adicionando as td na tr
    novaTr.appendChild(tdNome)
    novaTr.appendChild(tdPeso)
    novaTr.appendChild(tdAltura)
    novaTr.appendChild(tdGordura)
    novaTr.appendChild(tdIMC)

    return novaTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

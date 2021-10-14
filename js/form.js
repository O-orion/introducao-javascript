var botao = document.querySelector("#adicionar-paciente") //documento é uma copia do html, meu DOM

botao.addEventListener("click", function() {

    event.preventDefault() //não executa o eventos padroes
    var form = document.querySelector("#form")
    console.log("botao clicado, GRAÇAS A DEUS!!")

    
    var paciente = obtendoDadosDoForm(form)

    var errosForm = validarForm(paciente)

    if(errosForm.length > 0){
        exibirMenssagemError(errosForm)
        return;
    }
   

    adicionaNaTabela(paciente)

    //resetando o formulário
    form.reset() 
    var resetMensagem =  document.querySelector("#error-message")
    resetMensagem.innerHTML = ""
})

function adicionaNaTabela(paciente){
    var pacienteTr = criaTr(paciente)
    var tBoy = document.querySelector("#tabela-pacientes")
    //adicionando nova liha no tbody
    tBoy.appendChild(pacienteTr)
}

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

    /*criando as td
    var tdNome = montaTd(paciente.nome, "info-nome");
    var tdPeso = montaTd(paciente.peso, "info-peso");
    var tdAltura = montaTd(paciente.altura, "info-altura");
    var tdGordura = montaTd(paciente.gordura, "info-gordura");
    var tdIMC = montaTd(paciente.imc, "info-imc");

    atribuindo valores ao meus tds ** MODELO ANTIGO, FOI CRIADO A FUNÇÃO MONTD **
    tdNome.textContent = paciente.nome
    tdPeso.textContent = paciente.peso 
    tdAltura.textContent = paciente.altura
    tdGordura.textContent = paciente.gordura 
    tdIMC.textContent = paciente.imc*/

    //adicionando as td na tr
    novaTr.appendChild(montaTd(paciente.nome, "info-nome"))
    novaTr.appendChild(montaTd(paciente.peso, "info-peso"))
    novaTr.appendChild(montaTd(paciente.altura, "info-altura"))
    novaTr.appendChild(montaTd(paciente.gordura, "info-gordura"))
    novaTr.appendChild(montaTd(paciente.imc, "info-imc"))

    return novaTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

/*
function validarPaciente(paciente){
    if(validarPeso(paciente.peso)){
        return true
    }else{
        return false
    }
} */

function exibirMenssagemError(errors){
    var messageError = document.querySelector("#error-message")
    messageError.classList.add("messageERROR")
    messageError.innerHTML = ""

    errors.forEach(function(erro){
        var liError = document.createElement("li")
        liError.textContent = erro 
        messageError.appendChild(liError)
    })

    alert("Peso invalido! É JESUS CRISTO É O SENHOR!!!")
}

function validarForm(paciente){
    var erros = []

    if(paciente.altura <= 0 || paciente.altura >= 3){
        erros.push("Altura invalido!")
    }

    if(paciente.peso <= 0 || paciente.peso >= 300){
        erros.push("Peso invalido!")
    }

    if(paciente.nome.length == 0){
        erros.push("Informe um nome")
    }

    if(paciente.peso.length == 0){
        erros.push("Informe um peso")
    }
    if(paciente.altura.length == 0){
        erros.push("Informe uma altura")
    }
    if(paciente.gordura.length == 0){
        erros.push("Informe uma porcentagem de gordura")
    }


    return erros

}

//filtrando dados de uma tabela
//evento de digita conhecido como input de dados.

var campoFiltro = document.querySelector("#filter")

//escutando evento, evento de input é o evento de digitar no campo
campoFiltro.addEventListener("input", function ()  {
    console.log('Jesus Cristo te amo')
    var pacintes = document.querySelectorAll(".paciente")
    var expressao = new RegExp(this.value, "i")
    if(this.value.length > 0){
        for(var i=0; i < pacintes.length; i ++){
            var paciente = pacintes[i] //acessando o primeiro paciente dentro da lista de pacientes
            var tdNome = paciente.querySelector(".info-nome")
            var nome = tdNome.textContent
            if( nome != this.value){
                paciente.classList.add("invisivel")
            }else{
                paciente.classList.remove("invisivel")
            }
    
        }
    }else{
        for (var i = 0; i < pacintes.length; i++) {
            var paciente = pacintes[i]
            paciente.classList.remove("invisivel")
        }
    }

})




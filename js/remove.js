//var pacientes = document.querySelectorAll(".paciente")
var tabela = document.querySelector("table")

tabela.addEventListener("dblclick",  function (event){
   // console.log(event.target); //vai me trazer o elemento alvo, trauzindo o elemento que sofreu o click, qual dos filhos da tabela recebeu um double click
     // event.target.parentNode //capturando pai do evento -- queremos excluir a tr e não o td
      var eventoAlvo = event.target
      var paiDoEvento = eventoAlvo.parentNode
      paiDoEvento.remove()
})



//método antigo
/*pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function(){
        console.log("JESUS CRISTO É O SENHOR!!")
        this.remove()
    }) //addEventListener --> escutador de eventom evento de duplo click --> dblclick
}) */



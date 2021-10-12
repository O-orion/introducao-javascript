//var pacientes = document.querySelectorAll(".paciente")
var tabela = document.querySelector("table")

tabela.addEventListener("dblclick",  function (event){
   // console.log(event.target); //vai me trazer o elemento alvo, trauzindo o elemento que sofreu o click, qual dos filhos da tabela recebeu um double click
     // event.target.parentNode //capturando pai do evento -- queremos excluir a tr e não o td
      var eventoAlvo = event.target
      var paiDoEvento = eventoAlvo.parentNode
      paiDoEvento.classList.add("fadeOut")

      setTimeout(function() {
          //o código só será executado quando for o seu tempo
          paiDoEvento.remove()
      }, 500) //500 e igual a  meio segundo, depois de meio segundo o código dentro desssa função sera executado

})



//método antigo
/*pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function(){
        console.log("JESUS CRISTO É O SENHOR!!")
        this.remove()
    }) //addEventListener --> escutador de eventom evento de duplo click --> dblclick
}) */



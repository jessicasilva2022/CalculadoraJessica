const { string } = require("yargs");

function calcular(){
    let camp1 = document.getElementById('numero1').value
    let camp2 = document.getElementById('numero2').value
    let resul = document.getElementById('resul');
    let select = document.querySelector('#selecao');
    let operacao = select.options[select.selectedIndex].value;


    if(camp1.length == 0 && camp2.length == 0)
      window.alert('Informe um numero nos espaços')
      let n1 = Number(camp1)
      let n2 = Number(camp2)
     
    if (operacao == "+") {
      window.alert(`${n1+n2}`)
      } else if (operacao == "-"){
        window.alert(`${n1-n2}`)
      } else if (operacao == "x"){
        window.alert (`${n1*n2}`) 
      } else if (operacao == "/"){
        window.alert (`${n1/n2}`)
      }
  }
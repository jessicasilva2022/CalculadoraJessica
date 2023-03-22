function calcular(){
    let camp1 = window.document.getElementById('numero1')
    let camp2 = window.document.getElementById('numero2')
    let resul = window.document.getElementById('resul')

    let num1 = Number(camp1.value)
    let num2 = Number(camp2.value)
    let resp = num1 + num2;
    resul.innerText = ` ${num1} + ${num2} = ${resp}`

  }
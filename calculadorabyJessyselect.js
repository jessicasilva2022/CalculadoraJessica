 function calcular(){
    let camp1 = window.document.getElementById('numero1')
    let camp2 = window.document.getElementById('numero2')
    let resul = window.document.getElementById('resul')
    let soma = window.document.getElementById('somar')
    let subtrai = window.document.getElementById('subtrair')
    let multiplica = window.document.getElementById('multiplicar')
    let dividi = window.document.getElementById('dividir')
    let operacoes = window.document.getElementById('operacoes')
    operacoes.addEventListener('select',soma,subtrai,multiplica,dividi)  
    let num1 = Number(camp1.value)
    let num2 = Number(camp2.value)
    let resp = num1 + num2;

    if(soma){
        resul.innerText = ` ${num1} + ${num2} = ${resp}`
    }
  }
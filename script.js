function calc(operacao){
    val = document.getElementById("inputVal");
    valor = val.value
    val2 = document.getElementById("inputVal2");
    valor2 = val2.value
    alert(eval(valor+operacao+valor2));
}
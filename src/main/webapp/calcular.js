function calcular() {
    var altura = document.formulario.altura.value;
    var peso = document.formulario.peso.value;
    var imc = peso / (altura * altura);

    if (imc < 16) {
        alert("IMC: " + imc + "\nClassificação: Magreza grave");
    } else if (imc >= 16 && imc < 17){
        alert ("IMC: " + imc + "\nClassificação: Magreza moderada");
    } else if (imc >= 17 && imc < 18,5){
        alert ("IMC: " + imc + "\nClassificação: Magreza leve");
    } else if (imc >= 18,5 && imc < 25){
        alert ("IMC: " + imc + "\nClassificação: Saudável");
    } else if (imc >= 25 && imc < 30){
        alert ("IMC: " + imc + "\nClassificação: Sobrepeso");
    } else if (imc >= 30 && imc < 35){
        alert ("IMC: " + imc + "\nClassificação: Obesidade Grau I");
    } else if (imc >= 35 && imc < 40){
        alert ("IMC: " + imc + "\nClassificação: Obesidade Grau II (severa)");
    } else if (imc > 40){
        alert ("IMC: " + imc + "\nClassificação: Obesidade Grau III (mórbida)");
    }
}
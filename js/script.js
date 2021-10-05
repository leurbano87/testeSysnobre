var conteudo = "";


function converter() {
    //verifica se o campo de texto está vazio
    if (document.getElementById("texto").value == "") {
        alert("Vôce precisa digitar algo pra brincarmos!");


        //Retornará o valor invertido se o texto conter a letra L minusculo
    } else if (document.getElementById("texto").value.indexOf('l') !== -1) {
        conteudo = document.getElementById("texto").value.split('').reverse().join('');
        document.getElementById('resultado').innerHTML = conteudo;

        //Retornará o valor invertido se o texto conter a letra L maiusculo
    } else if (document.getElementById("texto").value.indexOf('L') !== -1) {
        conteudo = document.getElementById("texto").value.split('').reverse().join('');
        document.getElementById('resultado').innerHTML = conteudo;

        //Retornará o valor como digitado pelo usuário todo em minúsculo
    } else {
        conteudo = document.getElementById('texto').value;
        document.getElementById('resultado').innerHTML = conteudo.toLocaleLowerCase();
    }
}
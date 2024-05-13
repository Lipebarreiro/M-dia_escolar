var div = document.getElementById('resp');

function calcula_media() {

    let n1 = parseFloat(document.getElementById('nota_1').value);
    let n2 = parseFloat(document.getElementById('nota_2').value);
    let n3 = parseFloat(document.getElementById('nota_3').value);
    let media = (n1 + n2 + n3) / 3
    let text = '';

    if (n1, n2, n3 == '') {
        text = "Preencha os campos corretamente!";
    } else if (media >= 6) {
        text = 'A média do aluno é: ' + media + ' | Situação: APROVADO'
    } else {
        text = 'A média do aluno é: ' + media + ' | Situação: REPROVADO'
    }
    div.innerHTML = text;
}

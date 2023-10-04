function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txt-age')
    var result = document.getElementById('result')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Insira os dados novamente!')
    } else{
        var fgender = document.getElementsByName('rad-gender')
        var idade = ano - Number(fano.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')
        if (fgender[0].checked){
            gender = 'Homem'
            if (idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'imgss/menino-crianca.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imgss/homem-jovem.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imgss/homem-adulto.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'imgss/homem-idoso.jpg')
            }
        } else if (fgender[1].checked){
            gender = 'Mulher'
            if (idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'imgss/menina-crianca.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imgss/mulher-jovem.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imgss/mulher-adulta.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'imgss/mulher-idosa.jpg')
            }
        }
        result.style.textAlign = 'center'
        result.innerHTML = `Detectamos ${gender} com ${idade} anos.`
        result.appendChild(img)
    }   
}
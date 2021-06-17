function verificar() {
    var ano, genero, idade, anoAtual, data, msg, img, info

    data = new Date()
    anoAtual = data.getFullYear()
    ano = (document.getElementById('ano'))
    idade = anoAtual - Number(ano.value)
    info = document.getElementById('info')
    genero = document.getElementsByName('genero')
    msg = document.getElementById('msg')
    img = document.getElementById('imagem')

    if (idade > 0 && idade < 111) {
        var tipo = ''
       
        if (genero[0].checked) {
            if (idade > 1 && idade < 5) {
                tipo = 'um bebê menino'
                img.innerHTML = `<img id="img" src="img/bebeMenino.jpg" alt="">`

            } else if (idade < 11) {
                tipo = 'um menino'
                img.innerHTML = `<img id="img" src="img/menino.jpeg" alt="">`


            } else if (idade < 21) {
                tipo = 'um jovem homem'
                img.innerHTML = `<img id="img" src="img/jovemHomem.jpg" alt="">`


            } else if (idade < 54) {
                tipo = 'um homem'
                img.innerHTML = `<img id="img" src="img/homem.jpg" alt="">`

            } else {
                tipo = 'um idoso'
                img.innerHTML = `<img id="img" src="img/idoso.jpeg" alt="">`
            }

        } else if (genero[1].checked) {
            if (idade > 1 && idade < 5) {
                tipo = 'uma bebê menina'
                img.innerHTML = `<img id="img" src="img/bebeMenina.jpeg" alt="">`

            } else if (idade < 11) {
                tipo = 'uma menina'
                img.innerHTML = `<img id="img" src="img/menina.jpeg" alt="">`

            } else if (idade < 21) {
                tipo = 'uma jovem mulher'
                img.innerHTML = `<img id="img" src="img/adolecente02.jpg" alt="">`

            } else if (idade < 54) {
                tipo = 'uma m ulher'
                img.innerHTML = `<img id="img" src="img/mulher.jpeg" alt="">`

            } else {
                tipo = 'uma jovem mulher'
                img.innerHTML = `<img id="img" src="img/idosa.jpeg" alt="">`
            }
        }
        info.style.textAlign = 'center'
        msg.innerHTML = `Detectamos ${tipo} com ${idade} anos de idade`

    } else {
        alert('Erro: campo inválido')
    }

}

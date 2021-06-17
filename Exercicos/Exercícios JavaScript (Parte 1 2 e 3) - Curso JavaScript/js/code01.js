function carregar(){
    var data, hora, amostra, img , cor 

    data = new Date()
    hora = data.getHours()
    cor = document.getElementById('cor')
    msg = document.getElementById('msg')
    img = document.getElementById('imagem')
    /* msg.innerHTML = `Agora são ${hora} horas` */
    
    if (hora > 0 && hora < 6) {
        img.innerHTML = `<img src="img/BoaMadrugada.jpg" alt="Imagem Bom Dia" >`
        cor.style.backgroundColor = "rgb(31, 30, 30)"
        msg.innerHTML = `Agora são ${hora} horas da madrugada`
        console.log('Boa madrugada!')
    } else if (hora < 12) {
        img.innerHTML = `<img src="img/1manha.jpg" alt="Imagem Bom Dia" >`
        cor.style.backgroundColor = "#rgb(204, 204, 36)"
        cor.style.color = "Black"
        msg.innerHTML = `Agora são ${hora} horas da manhã`
        console.log('Bom dia!')
    } else if (hora < 18) {
        img.innerHTML = `<img src="img/2tarde.jpg" alt="Imagem Bom Dia" >`
        cor.style.backgroundColor = "#8a624e"
        msg.innerHTML = `Agora são ${hora} horas da tarde`
        console.log('Boa Tarde!')
    } else {
        img.innerHTML = `<img src="img/3noite.jpg" alt="Imagem Bom Dia" >`
        cor.style.backgroundColor = "rgb(31, 30, 30)"
        msg.innerHTML = `Agora são ${hora} horas da Noite`
        console.log('Boa Noite!')
    }
}



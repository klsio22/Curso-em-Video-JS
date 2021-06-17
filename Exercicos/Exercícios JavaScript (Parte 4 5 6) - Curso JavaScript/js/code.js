/* function verificar() {
    let ini, fim, passo, i, f, p, msg
    ini = document.getElementById('inicio')
    fim = document.getElementById('fim')
    passo = document.getElementById('passo')
    msg = document.getElementById('msg')

    i = Number(ini.value)
    f = Number(fim.value)
    p = Number(passo.value)

    if (ini.value.length == 0 || fim.value.length == 0
        || passo.value.length == 0) {
        msg.innerHTML = `Impossível Contar!`
    } else {
        msg.innerHTML = `Contando: `
        if (p <= 0) {
            alert('Passo inválido! Considerando: Passo 1')
            p = 1
        }
        if (i < f) {
            //Contagam crescente 
            while (i <= f) {
                msg.innerHTML += `${i} \u{1F449}`

                i += p
            }
        } else {
            ////Contagam decrescente 
            while (i >= f) {
                msg.innerHTML += ` ${i} \u{1F449}`
                i -= p
            }
        }
        msg.innerHTML += `\u{1F3C1}`
    }

} */

function verificar() {
    var ini, fim, passo, i, f, p, msg
    ini = document.getElementById('inicio')
    fim = document.getElementById('fim')
    passo = document.getElementById('passo')
    msg = document.getElementById('msg')

    i = Number(ini.value)
    f = Number(fim.value)
    p = Number(passo.value)

    if (ini.value.length == 0 || fim.value.length == 0
        || passo.value.length == 0) {
        msg.innerHTML = `Impossível Contar!`
    } else {
        msg.innerHTML = `Contando: <br>`
        if (p <= 0) {
            alert('Passo inválido! Considerando: Passo 1')
            p = 1
        }
        if (i < f) {
            //Contagam crescente 
            for (var c = i; c <= f; c += p) {
                msg.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            ////Contagam decrescente 
            for (var c = i; c >= f; c -= p) {
                msg.innerHTML += ` ${c} \u{1F449}`
            }
        }
        msg.innerHTML += `\u{1F3C1}`
    }

}


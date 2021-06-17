let entrada, lista, res, valores, num

entrada = document.querySelector('input#numero')
lista = document.querySelector('select#lista')
res = document.querySelector('div#texto')
num = entrada.value
valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {//não está na lista
        return true
    } else {// está na lista
        return false
    }
}

function adicionar() {
    if (isNumero(entrada.value) && !inLista(entrada.value, valores)) {
        valores.push(Number(entrada.value))
        let item = document.createElement('option')
        item.text = `Valor ${entrada.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor invalido ou já encotrado na lista')
    }
    entrada.value = ''
    entrada.focus()
}


function finalizar() {
    let quant, maior, menor , soma , media
    quant = valores.length
    if (quant == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
        maior = valores[0]
        menor = valores[0]
        soma = 0
        media = 0

        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos]< menor) {
                menor = valores[pos]
            }
        }

        media = soma/quant

        res.innerHTML += `<p>Ao todo temo ${quant} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${soma}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${media}.</p>`
    }

}
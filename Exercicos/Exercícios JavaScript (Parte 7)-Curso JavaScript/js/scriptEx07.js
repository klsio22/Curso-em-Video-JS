var val, texto

val = []
texto = document.getElementById('texto')

function adicionar() {
    let entrada, n, list, busca
    entrada = document.getElementById('numero')
    list = document.getElementById('lista')
    n = Number(entrada.value)
    busca = val.indexOf(n)

    if (entrada.value.length == 0) {
        alert('Adicione um número para continuar!')
    } else {
        if (busca == -1 && (n > 0 && n <= 100)) {//-1 ainda valor não existe, faça:
            val.push(n)
            let item = document.createElement('option')
            item.text = `valor ${n} adicionado`
            list.appendChild(item)
            texto.innerHTML = ''
        } else { // valor existe , faça
            alert('Valor é inválido ou já encotrado na lista. ')
        }
    }
    entrada.value = ''
    entrada.focus()
}

function finalizar() {
    let quant
    quant = val.length
    if (quant == 0) {
        alert('Adicionar valores antes de finalizar')
    } else {
        let max, min, soma, med
        
        max = val.reduce(function (a, b) {
            return Math.max(a, b)
        })

        min = val.reduce(function (a, b) {
            return Math.min(a, b)
        })

        soma = val.reduce(function (a, b) {
            return a + b
        })

        med = soma / quant

        /*   for (var i = 0; i < quant; i++) {
              n = val[i]
          
              if (i == 0) {
                  max = min = n
              } else if (n > max) {
                  max = n
              } else if (n < min) {
                  min = n
              }
          
          } */

        texto.innerHTML += `<p>Ao todo temos ${quant} números cadastrados.</p>`

        texto.innerHTML += `<p>O maior valor informado foi ${max}.</p>`
        texto.innerHTML += `<p>O menor valor informado foi ${min}.</p>`
        texto.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        texto.innerHTML += `<p>A média dos valores digitados é ${med}.</p>`


        console.log('Quantidade: ' + quant)
        console.log('Maior valor encontrado:' + max)
        console.log('Menor valor encontrado:' + min)
        console.log('Soma dos valores ' + soma)
        console.log('Media dos valores ' + med)
    }


}
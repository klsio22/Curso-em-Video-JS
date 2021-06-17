function gerador() {
    let num, n, tab

    num = document.getElementById('numero')
    tab = document.getElementById('tabuada')

    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        n = Number(num.value)
        tab.innerHTML = ''
        console.log('')
        for (var l = 1; l <= 10; l++) {
            let item = document.createElement('option')
            item.text = `${n} x ${l} = ${n * l}`
            item.value = `tab ${l}`
            tab.appendChild(item)
        }

        /*  let c = 1
         while (c <= 10) {
             let item = document.createElement('option')
             item.text = `${n}x ${c} = ${n * c}`
             item.value = `tab ${c}`
             tab.appendChild(item)
             c++
         } */

        // o que eu fiz
        /* tab.innerHTML = ''
        console.log('')
        for (var l = 1; l <= 10; l++) {
            //console.log(n + ' x ' + l + ' = ' + (l * n))
            tab.innerHTML += `<option>${n} x ${l} = ${l * n}</option>`

        } */
    }

}
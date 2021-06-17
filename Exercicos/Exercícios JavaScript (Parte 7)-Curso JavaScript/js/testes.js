let quant, max, min, n, soma, med

val = [10, 5, 5]
soma = med = n = min = max = 0
quant = val.length


for (var i = 0; i < quant; i++) {
    n = val[i]

    if (i == 0) {
        max = min = n
    } else if (n > max) {
        max = n
    } else if (n < min) {
        min = n
    }

}

for (var l = 0; l < quant; l++) {
    soma += val[l]
}
med = soma / 2


console.log('Valor maximo da Array ' + max)
console.log('Valor minimo da Array ' + min)
console.log('A soma dos valores ' + soma)
console.log('A média dos valores ' + med)






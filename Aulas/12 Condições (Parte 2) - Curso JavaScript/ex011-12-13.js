/* 
//Primeiro exemplo 
var idade = 17
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log('Não vota!')
} else {
    if (idade < 18 || idade > 65) {
        console.log('Voto opcional!')
    } else {
        console.log('Voto obrigatório!')
    }
} */

/* 
var hora = 19

console.log('')
console.log(`->> Agora são exatamente ${hora} horas`)

if (hora > 0 && hora < 6) {
    console.log('Boa madrugada!')
} else if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}

console.log('') */


/* var agora = new Date()
var hora = agora.getHours()
console.log('')
console.log(`->> Agora são exatamente ${hora} horas`) 

if (hora > 0 && hora < 6) {
    console.log('Boa madrugada!')
} else if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}

console.log('') */



var agora = new Date()

var diaSem = agora.getDay()

/* 
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

switch (diaSem) {
    case 0:
        console.log('Hoje é Domingo feira')
        break
    case 1:
        console.log('Hoje é Segunda feira')
        break
    case 2:
        console.log('Hoje é Terça feira')
        break
    case 3:
        console.log('Hoje é Quarta feira')
        break
    case 4:
        console.log('Hoje é Quinta feira')
        break
    case 5:
        console.log('Hoje é Sexta feira')
        break
    case 6:
        console.log('Hoje é Sabado feira')
        break
    default:
        console.log('[Erro] Dia Inválido')
}





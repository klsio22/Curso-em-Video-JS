/* function parimp(n) {
    if (n % 2 == 0) {
        return 'par'
    } else{
        return 'impar'
    }
}

let res = parimp(10)

console.log(res) */

//--------------------------------------------------------------

/* 
function soma(n1 = 0, n2 = 0){
    return n1+n2
}

console.log(soma(16,4))
 */

//--------------------------------------------------------------

/* let v = function(x){
    return x * 2
}

console.log(v(5)) */


//--------------------------------------------------------------

/* function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5)) */
//--------------------------------------------------------------
//Recusividade

n = 6

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}


console.log('O fatoria de ' + n + ' é ' + fatorial(n))
/*

5! = 4 * 3 * 2 * 1
5! = 5 * 4!

n! = n (n * 1)!
1! = 1

*/


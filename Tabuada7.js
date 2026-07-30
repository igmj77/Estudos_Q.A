/* tabuada-dinamica.js
const numero = 7; // Mude aqui ou use prompt com biblioteca

console.log(`===== TABUADA DO ${numero} =====`);

for (let i = 0; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
} */

function tabuada(numero) {
    let resultado = `===== TABUADA DE ${numero} =====\n`;

    for (let i = 0; i <= 10; i++) { // 1. Começa em 0  | 2. Vai até <= 10
        resultado += `${numero} x ${i} = ${numero * i}\n`;
    }

    resultado += "===========================";
    return resultado;
}

// Testando
console.log(tabuada(7));
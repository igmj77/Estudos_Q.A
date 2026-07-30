/*function maioresQue5(numeros) {
    let resultado = [] // começa vazio

    for (let i = 0; i < numeros.length; i++) { // numeros[i] é o número da vez
        if (numeros [i] > 5) {
            resultado.push(numeros[i]);
        }
    }
    return resultado; // devolve o array novo no final
}

// testando a função

const minhaLista = [3, 8, 1, 10, 5, 7, 2, 12];
const filtrados = maioresQue5(minhaLista);

console.log("Array original:", minhaLista);
console.log("Apenas > 5:", filtrados); */

function maioresOuIguaisA5(numeros) {
    let resultado = []; // 1. Caixa vazia

    for (let i = 0; i < numeros.length; i++) { // 2. Passa por todos
        if (numeros[i] >= 5) { // 3. Testa se é MAIOR OU IGUAL a 5
            resultado.push(numeros[i]); // 4. Adiciona no resultado
        }
    }

    return resultado; // 5. Devolve o array filtrado
}

// Testando a função
const minhaLista = [3, 8, 1, 10, 5, 7, 2, 12];
const filtrados = maioresOuIguaisA5(minhaLista);

console.log("Array original:", minhaLista);
console.log("Apenas >= 5:", filtrados);

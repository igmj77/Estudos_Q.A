/* Condições servem para tomar decisões no código.
Usamos if, else if e else. */

/*let nota = 7;

if (nota >=6) {
    console.log("Você está Aprovado(a)!");
}   else {
    console.log("Você está Reprovado(a)!");
}*/

let nota = 7;

if (nota >=9) {
    console.log("Excelente"); /* Primeiro o programa verifica se a nota é maior ou igual a 9 → imprime "Excelente".*/
}   else if (nota >= 6) {
    console.log("Aprovado"); /* Se não for, ele passa para o else if (nota >= 6) → imprime "Aprovado".*/
}   else {
    console.log("Reprovado"); /*Se nenhuma das condições anteriores for verdadeira, cai no else → imprime "Reprovado". */
}

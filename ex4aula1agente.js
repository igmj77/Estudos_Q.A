/*let notas = [10, 7, 5, 3, 1];
for (let nota of notas) {
    console.log(nota);
}
*/

/*let notas = [9, 7, 5, 3, 1];
    for (let i = 0; i < notas.length; i++) {
        console.log(notas[i]);
} */

let notas = [7, 5, 9, 4];

for (let nota of notas) {
  if (nota >= 9) {
    console.log(nota + " -> Excelente!");
  } else if (nota >= 6) {
    console.log(nota + " -> Aprovado!");
  } else if (nota >= 5) {
    console.log(nota + " -> Recuperação!");
  } else {
    console.log(nota + " -> Reprovado!");
  }
}
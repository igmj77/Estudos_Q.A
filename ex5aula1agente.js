function verificarNota(nota) {
    if (nota >=9) {
        return "Excelente!";
    } else if (nota >=6) {
        return "Aprovado!";
    } else if (nota >=5) {
        return "Recuperação!";
    } else {
        return "Reprovado!";
    }
}
console.log(verificarNota(7)); // Aprovado!
console.log(verificarNota(9)); // Excelente!



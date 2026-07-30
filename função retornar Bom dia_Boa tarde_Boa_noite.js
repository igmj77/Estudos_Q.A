/*function saudar(nome) {
    let hora = new Date().getHours();
    if (hora < 12) {
        return "bom dia, " + nome + "!";
    } else if (hora < 18) {
        return "boa tarde, " + nome + "!";
    } else if (hora < 23) {
        return "boa noite, " + nome + "!";
    } else {
        return "boa madrugada, " + nome + "!";
    }
}
console.log(saudar("João"));

function saudar(nome) {
    let hora = new Date().getHours();
    let saudacao;

    if (hora < 12) {
        saudacao = "bom dia!";
    } else if (hora < 18) {
        saudacao = "boa tarde";
    } else if (hora < 24) {
        saudacao = "boa noite,"; // mudei para 24.
    } else {
        saudacao = "boa madrugada";
    }
    return `${saudacao}, ${nome} !`; // usei templates string, ficou mais funcional, direto e responsivo.
}
console.log(saudar("João")); */

function saudar(nome) {
    let hora = new Date().getHours();
    let saudacao;
    // testar cada faixa de hora
    if (hora >= 0 && hora < 6) { // se for de 0 até 5
        saudacao = "boa madrugada !";
    } else if (hora > 12) { // se for de 6 até 11
        saudacao = "bom dia !";
    } else if (hora > 18) { // se for de 12 até 17
        saudacao = "boa tarde !";
    } else { // se ñ for nenhuma das anteriores, então é de 18 até 23.
        saudacao = "boa noite !";
    }
    return `${saudacao}, ${nome}!`; //junta tudo
}
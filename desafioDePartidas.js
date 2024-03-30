function saldao(vitorias,derrotas){
    return vitorias - derrotas;

}


function Placar(saldo){
    let listaR = ["Ferro","Bronze","Prata","Ouro","Diamante","Lendario","Imortal"]
    
   

    if (saldo < 10 ) {
        return saldo , listaR[0]
    } 
    else if (saldo > 11  && saldo < 20) {
        return listaR[1]
    } 
    else if (saldo > 21  && saldo < 50) {
        return listaR[2]
    } 
    else if (saldo > 51  && saldo < 80) {
        return listaR[3]
    } 
    else if (saldo > 81  && saldo < 90) {
        return listaR[4]
    } 
    else if (saldo > 91  && saldo < 100) {
        return listaR[5]

    } else if (saldo >= 101) {
        return listaR[6]
    } 


}

function Main(){
    let input = require("readline-sync");

    let vitorias = input.question("Quantas Vitorias ?: ");
    let derrotas = input.question("Quantas Derrotas ?: ");
    
    let saldo = saldao(vitorias,derrotas);
    let saldoVitorias = Placar(saldo);

    console.log(`O Heroi tem de saldop ${saldo} esta no nivel ${saldoVitorias}`);
}

Main();
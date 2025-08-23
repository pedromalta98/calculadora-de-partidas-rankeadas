// Calculadora de partidas ranqueadas
// Objetivo: Criar uma função que receba como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retornar o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

// O que deve ser utilizado: variáveis, operadores, laços de repetição, estrutura de decisões e funções.
// 10 vitórias = Ferro; entre 11 e 20 = Bronze; entre 21 e 50 = Prata; entre 51 e 80 = Ouro; entre 81 e 90 = Diamante; 
// entre 91 e 100 = Lendário; maior ou igual a 101 = imortal

// ## Saída: Ao final deve se exibir uma mensagem: "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

const jogador = "Noob Player";    // Utilização de constante para o nome do jogador
let nivel = 65;                   // Utilização de variáveis
let partidas = 48;
let vitorias = 40;
let derrotas = 8;

function saldoDeRankeadas(vitorias, derrotas) {                // Utilização de função para calcular o saldo de partidas ranqueadas
    return vitorias - derrotas;
}

let saldoVitorias = saldoDeRankeadas(vitorias, derrotas);

let ranking;

if (saldoVitorias < 10) {                  // Utilização de estrutura de decisão para determinar o ranking
    ranking = "Ferro";
} else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    ranking = "Bronze";
} else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    ranking = "Prata";
} else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    ranking = "Ouro";
} else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    ranking = "Diamante";
} else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    ranking = "Lendário";
} else {
    ranking = "Imortal";    
}

let patente;  // Variável para armazenar a patente do jogador
switch (nivel) {              // Utilização de switch para determinar a patente do jogador
    case 10:
        patente = "Soldado";
        break;
    case 15:
        patente = "Cabo"
        break;
    case 25:
        patente = "Sargento";
        break;
    case 35:
        patente = "Tenente";
        break;
    case 45:
        patente = "Capitão";
        break;
    case 55:
        patente = "Major";
        break;
    case 65:
        patente = "Coronel";
        break;
    case 75:
        patente = "General";
        break;
    case 85:
        patente = "Marechal";
        break;  

    default:
        patente = "Recruta";
        break;
}
    
let inventario = [ "Kit de Primeiros Socorros", "Armadura de Kevlar", "Lanterna Tática", "Granada de Fumaça" ];  // Inventário do jogador
let quantidade = 0;

for (let i = 0; i < inventario.length; i++) {  // Laço de repetição para contar a quantidade de itens no inventário
    quantidade += 1;
}

console.log("O Herói " + jogador + " está no nível " + nivel + " com o saldo de " + saldoVitorias + " vitórias e está no ranking de classificação " + ranking + " com a patente de " + patente + ".");

console.log(jogador +" possui " + quantidade + " itens no inventário: " + inventario.join(", "));





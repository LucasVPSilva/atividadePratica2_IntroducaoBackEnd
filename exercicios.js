
// Para acessar cada atividade, basta retirar os comentários.

// Exercicio 1 - Calcular de Celsius para Fahrenheit

/*
const tempCelsius = Number(prompt('Informe a temperatura em Celsius: '));

alert(`A temperatura ${tempCelsius} Celsius equivale a ${(tempCelsius * 1.8) + 32} Fahrenheit`)
*/


// Exercicio 2 - Crie um programa que peça um número de 1 a 7 e exiba o dia da
// semana correspondente utilizando a estrutura condicional switch.

/*

const numero = Number(prompt('Informe um numero de 1 a 7: '));

switch (numero) {
    case 1:
        alert(`O número ${numero} equivale ao Domingo `);
        break;
    case 2:
        alert(`O número ${numero} equivale a Segunda-feira `);
        break;
    case 3:
        alert(`O número ${numero} equivale a Terça-feira `);
        break;
    case 4:
        alert(`O número ${numero} equivale a Quarta-feira `);
        break;
    case 5:
        alert(`O número ${numero} equivale a Quinta-feira `);
        break;
    case 6:
        alert(`O número ${numero} equivale a Sexta-feira `);
        break;
    case 7:
        alert(`O número ${numero} equivale ao Sábado-feira `);
        break;
    default:
        alert(`Você informou um número errado! `)
        break;
}

*/

// Exercicio 3 - Crie um programa que peça um número e verifique se ele é positivo,
// negativo ou zero.

/*
const informeNumero = Number(prompt('Informe um numero:'))

if (informeNumero > 0) {
    alert(`O número ${informeNumero} é positivo!`)
} else if (informeNumero < 0) {
    alert(`O número ${informeNumero} é negativo`)
} else if (informeNumero == 0) {
    alert(`O número ${informeNumero} é zero!`)
} else {
    alert(`Informou algo errado ae filhão!`)
}
*/

// Exercicio 4 - escrever um algoritmo para ler o custo de fábrica de um carro, calcular e escrever
// o custo final ao consumidor.

/*

const custoFabrica = 10000;

const porcenDistri = custoFabrica * 0.28

const impostoFabrica = custoFabrica * 0.45


const valorCarro = custoFabrica + porcenDistri + impostoFabrica;

alert(`Valor do carro para o consumidor será de R$ ${valorCarro}`);

*/

// Exercicio 5 - Desenvolva um algoritmo que faça o cálculo do índice de massa
// corporal de uma pessoa.

/*

const infAltura = Number(prompt(`Informe sua altura 
Exemplo: 1.70`))

const infPeso = Number(prompt(`Informe seu peso 
Exemplo: 80`))

const calcImc = infPeso / (infAltura * infAltura)
if (calcImc < 18.5) {
    alert(`Voce está abaixo da faixa de peso ideal!`)
} else if (calcImc > 24.99) {
    alert(`Voce está acima da faixa de peso ideal!`)

} else if (calcImc >= 18.5 && calcImc <= 24.99) {
    alert(`Voce está dentro da faixa de peso ideal!`)

} else {
    alert(`Voce digitou algo errado ae filhão!`)

}

*/

// Exercicio 6 - Escreva um algoritmo que solicite 2 números e uma operação
// matemática.O algoritmo deve realizar o cálculo com os 2 números
// digitados conforme a operação informada.


const infNum1 = Number(prompt('Informe o primeiro número:'));
const infNum2 = Number(prompt('Informe o segundo número:'));
const infOpe = Number(prompt(`Informe a operação matemática:
Digite "1" - Para somar;
Digite "2" - Para subtrair;
Digite "3" - Para multiplicar;
Digite "4" - Para dividir; `));

switch (infOpe) {
    case 1:
        alert(`${infNum1} + ${infNum2} = ${infNum1 + infNum2}`);
        break;
    case 2:
        alert(`${infNum1} - ${infNum2} = ${infNum1 - infNum2}`);
        break;
    case 3:
        alert(`${infNum1} * ${infNum2} = ${infNum1 * infNum2}`);
        break;
    case 4:
        alert(`${infNum1} / ${infNum2} = ${infNum1 / infNum2}`);
        break;
    default:
        alert(`Você digitou algo errado ae filhão!`)
        break

}

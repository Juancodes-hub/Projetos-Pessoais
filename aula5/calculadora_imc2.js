const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o seu peso (kg): ', (pesoInput) => {
  rl.question('Digite a sua altura (m): ', (alturaInput) => {

    let pesoEntrada = pesoInput.trim().toLowerCase();
    let alturaEntrada = alturaInput.trim().toLowerCase();

    let peso = Number(pesoEntrada);
    let altura = Number(alturaEntrada);

    if (pesoEntrada === '' || alturaEntrada === '' || isNaN(peso) || isNaN(altura) || altura === 0) {
      console.log('Entrada inválida. Digite valores numéricos válidos (altura diferente de zero).');
    } else {
      let imc = peso / (altura * altura);
      console.log('Seu IMC é: ' + imc.toFixed(2));

      if (imc < 18.5) {
        console.log('Você está abaixo do peso.');
      } else if (imc <= 24.9) {
        console.log('Você está no peso normal.');
      } else {
        console.log('Você está acima do peso.');
      }
    }

    rl.close();
  });
});
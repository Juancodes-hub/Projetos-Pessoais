const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o primeiro número: ', function(num1Input) {
  rl.question('Digite o segundo número: ', function(num2Input) {
    rl.question('Digite o operador (-, +, *, /): ', function(operadorInput) {

      let num1Entrada = num1Input.trim().toLowerCase();
      let num2Entrada = num2Input.trim().toLowerCase();
      let operador = operadorInput.trim().toLowerCase();

      let num1 = Number(num1Entrada);
      let num2 = Number(num2Entrada);

      if (num1Entrada === '' || num2Entrada === '' || isNaN(num1) || isNaN(num2)) {
        console.log('Entrada inválida. Digite números válidos.');
        rl.close();
        return;
      }

      let resultado;

      switch (operador) {
        case '+':
          resultado = num1 + num2;
          break;
        case '-':
          resultado = num1 - num2;
          break;
        case '*':
          resultado = num1 * num2;
          break;
        case '/':
          if (num2 === 0) {
            console.log('Erro: divisão por zero não é permitida.');
            rl.close();
            return;
          }
          resultado = num1 / num2;
          break;
        default:
          console.log('Operador inválido.');
          rl.close();
          return;
      }

      console.log('Resultado: ' + resultado);
      rl.close();
    });
  });
});
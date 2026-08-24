const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o primeiro número: ', function(num1Input) {
    rl.question('Digite o segundo Número: ', function(num2Input) {
        rl.question('Digite o operador ( -, +, *, /):  ', function(operador) {

            let num1 = Number(num1Input);
            let num2 = Number(num2Input);
            let resultado;
            
            switch(operador) {
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
                    resultado = num1 / num2;
                    break;
                default:
                    console.log('Operador inválido. ');
                    rl.close();
                    return;
            }
            console.log('Rseultado: ' + resultado);

            rl.close();
        });
    });
});
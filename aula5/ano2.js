const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um ano: ', function(anoInput) {
  let entrada = anoInput.trim().toLowerCase();
  let ano = Number(entrada);

  if (entrada === '' || isNaN(ano)) {
    console.log('Entrada inválida. Digite um número válido.');
  } else {
    let bissexto = (ano % 4 === 0) && (ano % 100 !== 0 || ano % 400 === 0);

    if (bissexto) {
      console.log(ano + ' é bissexto.');
    } else {
      console.log(ano + ' não é bissexto.');
    }
  }

  rl.close();
});
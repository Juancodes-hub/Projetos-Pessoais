const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um ano: ', function(anoInput){

    let ano = Number(anoInput);

    let bissexto = (ano % 4 === 0) && (ano % 100 !== 0 || ano % 400 ==0);

    if (bissexto) {
        console.log(ano + ' é bissexto.');
    }else {
        console.log(ano + ' não é bissexto. ');
    }
    
    rl.close();
});
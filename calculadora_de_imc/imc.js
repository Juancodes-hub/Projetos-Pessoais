const readline = require ('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o seu peso (kg): ', (pesoInput) => {
    rl.question('Digite a sua altura(m): ',(alturaInput) =>{
    
     peso = Number(pesoInput);
     altura =  Number(alturaInput); 

    let imc = peso / (altura * altura);

    console.log('Seu IMC é: ' + imc)

    if (imc < 18.5) {
        console.log('Você está abaixo do peso')
    }else if (imc <= 24.9) {
        console.log('Você está no peso normal. ');
    }else { 
        console.log('Você está acima do peso. ');
    }
    
    rl.close();
    });
});
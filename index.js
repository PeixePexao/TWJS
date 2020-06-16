const fs = require('fs');
const prompt = require('prompt-sync')();
var num;
var somas = [];
var quadrados = [];
var diario = [];
var start = new Date();

num = prompt("Quantas vezes você quer aumentar x em x² + (x + 1)²?");
fs.writeFile('result.csv', 'x,x+1,c,sqrt(c)\n', err => {})

for (i = 3; i < parseInt(num) + 3; i++) {
    somas[i] = (i * i) + ((i + 1) * (i + 1))
    diario[i] = parseInt(i);
}
for (i = 0; i < (parseInt(num) + 3) * 2; i++) {
    quadrados[i] = i * i;
}

for (i = 0; i < somas.length; i++) {
    for (z = 0; z < quadrados.length; z++) {
        if (somas[i] == quadrados[z]) {
            if (z < somas [i]) {
                z = somas[i];
            }
            console.log('Match!');
            var maisum = diario[i] + 1
            data = '' + diario[i] + ',' + maisum + ',' + somas[i] + ',' + Math.sqrt(somas[i]) + '\n'; 
            fs.appendFile('result.csv', data, err => {})
        }
    }
}
var fim = new Date() - start;
console.log("Execução terminada em " + fim + 'ms');
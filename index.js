const fs = require('fs');
const prompt = require('prompt-sync')();
var num;
var somas = [];
var quadrados = [];
var diario = [];
var start = new Date();

num = prompt("Quantas vezes você quer aumentar x em x² + (x + 1)²?");


for (i = 3; i < parseInt(num) + 3; i++) {
    somas[i] = (i * i) + ((i + 1) * (i + 1))
    diario[i] = parseInt(i);
}
for (i = 0; i < (parseInt(num) + 3) * 2; i++) {
    quadrados[i] = i * i;
}
let obj = {}
for (let i = 0; i < quadrados.length; i++) {
    if(!obj[quadrados[i]]) {
        const element = quadrados[i];
        obj[element] = quadrados[i];
    }
}
var data = "x,x+1,c,c²\n";
for (let i = 0; i < somas.length; i++) {
    if(obj[somas[i]]) {
        console.log("Match (" + somas[i] + ", " + diario[i] + ")")
        data = data + String(diario[i]) + "," + String(diario[i] + 1) + "," + String(Math.sqrt(somas[i])) + "," + String(somas[i]) + "\n";
        
    }
}
console.log(data);
fs.writeFile('result.csv', data, err => {});
var fim = new Date() - start;
console.log("Execução terminada em " + fim / 1000 + 's');
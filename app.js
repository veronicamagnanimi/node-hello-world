// const parola = process.argv[2];
// const message = `Hello ${parola}`;
// console.log(message);

console.log("Hello Boolean");
console.log(process.argv);
const parola = process.argv[2];

//1 BONUS
const numero = parseInt(process.argv[2]);
if (numero % 2 === 0) {
    console.log("Pari");
} else {
    console.log("Dispari");
}

//2 BONUS
const contaVocali = process.argv.slice(2).join(" ");
const vocali = "aeiou";

let first = 0;
for(let i = 0; i < contaVocali.length; i++) {
    if(vocali.includes(contaVocali[i])) {
        first++;
    }
}

console.log(`La stringa contiene ${first} vocali`);
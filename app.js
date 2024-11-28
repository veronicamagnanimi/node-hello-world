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

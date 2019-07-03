const fs = require('fs');
//const faker = require(faker);
const files = process.argv;

let numbersRan = (Math.random()*50).toString();
let infoTowrite= [];

fs.writeFile('./files/test.txt' , numbersRan,(err) =>{
    if (err) throw err;
    console.log('SOmething magical')
});

fs.readFile('./files/test.txt', (err,data)=>{
    if (err) throw err;
    console.log(numbersRan.toString());
})
// - Find and display total sum of numbers from 1 to 3;

var a = 1, b = 2, c = 3;
var sum;
sum = a + b + c;
console.log('Find and display total sum of numbers from 1 to 3 it"s: ' + sum);

// - Find and display total sum of numbers from 20 to 220;

var sum = 20;
for (var i = 21; i <= 220; ++i) {
    var sum = sum + i;
}
console.log('Find and display total sum of numbers from 20 to 220 it"s: ' + sum);


// Display even numbers from 1 to 20 by using for loop.
// - do it with using ‘continue’
// - do it without using ‘continue’ 

console.log('Play with Continue');
for (var k = 1; k <= 20; k++) {
    if (k % 2 == 1) continue;
    console.log(k);
}


console.log('Play without Continue');
for (var i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}


// Display odd numbers from 10 to 30 by using ‘while’ loop.
console.log('Display odd numbers from 10 to 30 by using ‘while’ loop.');

var i = 10;
while (i <= 30) {
    if (i % 2 == 1) {
        console.log(i);
    }
    i++;
}



// Display number from 1 to 15 using ‘for’ loop, once number of iteration 
// is equal the number of month of your birthday then stop execution of loop
console.log('Display number from 1 to 15 using ‘for’ loop, \n once number of iteration is equal the number of month of your birthday then stop execution of loop');
var birthMounce = 8;
for (var j = 1; j <= birthMounce; j++) {
    for (var i = 1; i <= 15; i++) {
        console.log(i);
    }
    console.log('month of my birthday ' + j);
}


// - Rewrite code from using ‘for’ to using ‘while’
// for(var i = 0; i < 5; i++) {
//   console.log(`number ${i}  =)`)
// }

var whileLoop = 0;
while (whileLoop < 5) {
    console.log('`number ' + whileLoop + ' =)`');
    whileLoop++;
}


// - Write code which will ask user (prompt ) to put number greater than 100, 
// repeat prompt until user put required number, then display result of prompt
console.log('Using while');
var userNumber = prompt('Please type a number greater than 100');
while (isNaN(userNumber) || userNumber <= 100) {
    userNumber = prompt('Please type a number greater than 100');
}
console.log(userNumber);

console.log('-------------------------------');

console.log('Using do/while');

do {
    var userNum = prompt('Please type a number greater than 100');
}
while (isNaN(userNum) || userNum <= 100);
console.log(userNum);

// - Show in console using for.
var dies = prompt('Please type a number');
if (isNaN(dies)) {
    dies = prompt('Please type a number');
} else {
    var row = "";
    for (var i = 0; i <= dies; i++) {
        row = row + "#"
        console.log(row);
    }
}




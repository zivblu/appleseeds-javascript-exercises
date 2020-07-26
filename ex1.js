'use strict';

let readlineSync = require('readline-sync');

let yourName = readlineSync.question('What is your name?');
console.log('Hello ' +yourName +'!');


(function () {
    'use strict';
    function assignment3(){
    const input  = require('readline-sync');
    const figlet = require('figlet');
    const chalk = require('chalk');
    const counter = 10;    
    figlet('Welcome To Hang Man', {
    font: 'epic',
    horizontalLayout: 'fitted'},
    function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }    

    function getAllIndexes(word, val) {
        var indexes = [], i;
        for(i = 0; i < word.length; i++)
            if (word[i] === val)
                indexes.push(i);
            return indexes;
        }

    console.log(chalk.red.dim.bold(data));
    let words = ['rooooocooookkkkkkooooo'];
    let word = words[Math.floor(Math.random()*words.length)];
    word [0];
    console.log(word);
    let simpleWord = []
    simpleWord [0];
    console.log('You have ' + counter +  ' guesses ' 
    + '\n' + 'The word is: '+ '\n' +  simpleWord);

    // yes = (getAllIndexes(word, letter));
    // simpleWord = word.replace((getAllIndexes(word, letter)), 'h');
    // console.log(letter);

    let newWord;
    // const search = letter;
    // const replaceWith = letter;
    // let splitWord = word.split("");
    // console.log(word.indexOf(letter));
    // console.log(splitWord.search(/o/i));
    // const regex = /(word.indexOf(letter))/;
    
    function guessing(){

       
    let letter = input.question('What is your guess? ');
    console.log(letter);
    if(word.includes(letter)){
    for (let index = 0, j= word.length; index<j; index++) {
            if (letter === word[index]){
                simpleWord[index] = letter;
                newWord = (simpleWord.splice(',').join('*'));
                console.log(newWord);
            }


            // console.log(simpleWord.join('*'));
            // let yes = getAllIndexes(word, letter);
            // simpleWord = (word.split(yes).join('5'));
            // console.log(yes);

    }
    
        // console.log(word.replace(letter, '*'));
    }
    console.log(simpleWord.splice(',').join(' '));
    // console.log(simpleWord.join('*'));


    // console.log(simpleWord = word.replace(/[^letter.]/g, '*'));

    }    
guessing();
    })

    }
    assignment3();


})();

// 'Paper', 'Scissors'
// console.log(word.replace(/\D[^\.]/g, '*'));
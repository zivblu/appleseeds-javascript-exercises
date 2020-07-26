(function Hangman () {

    const input  = require('readline-sync');
    const figlet = require('figlet');
    const chalk = require('chalk');
    const term = require( 'terminal-kit' ).terminal ;
    figlet('                Welcome To Hang Man          ', {
    font: 'epic',
    horizontalLayout: 'fitted'},
    function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }    
    let words = ["florence", "paris", "madrid", "rome", "singapore", "dubai", 
    "shanghai", "london", "tokyo", "sydney", "toronto", "beijing", "moscow",
    "johannesburg", "istanbul", "warsaw", "jakarta",
    ,"chicago", "seoul", "mumbai"];
    let randomiseWord = "";
    let numLettersOfWord = []
    let blanks = 0;
    let blanksAndCorrect = [];
    let wrongGuess = [];
    
    //Counter Variables
    let guessesRemaining = 10;

        //computer generates random word from words array
        randomiseWord = words[Math.floor(Math.random() * words.length)];
    
        // split the individual word into separate arrays, and store in new array 
        numLettersOfWord = randomiseWord.split("");
    
        //store length of word in blanks, for later use
        blanks = numLettersOfWord.length;
    
        //creating a loop to generate "*" for each letter in array stored in blanks
        for (let i = 0; i < blanks; i++) {
            blanksAndCorrect.push("*");
        }

        //console logging
        console.log(chalk.red.dim.bold(data));
        console.log('You have ' + guessesRemaining +  ' guesses ' 
        + '\n' + 'The word is: '+ '\n' +  blanksAndCorrect.join(''));
        checking();

    function checking(){
    let letter = input.question('\n' + 'What is your guess? (please enter a single letter): ');
    if(letter.match( /^([a-zA-Z]{1})$/)){
    checkLetters(letter.toLowerCase());
    }else{
        console.log('\n' + 'You have entered (' + chalk.red(letter) + 
        ') which is an invalid input, you will not lose a guess,' + 
        ' please try again' + '\n');
        checking();
    }
    }

    function checkLetters(letter) {
        let letterInWord = false;
        //if the generated randomiseWord is equal to the letter entered... then variable is true
        for (let i = 0; i < blanks; i++) {
            if (randomiseWord[i] == letter) {
                letterInWord = true;
            }
        }
        if (letterInWord) {
            //check each letter to see if it matches word
            for (let i = 0; i < blanks; i++) {
                if (randomiseWord[i] == letter) {
                    blanksAndCorrect[i] = letter;
                }
            }
        }
        //otherwise, push the incorrect guess in the wrong guesses section, and reduce remaining guesses
        else{
            if(wrongGuess.indexOf(letter)> -1){
                console.log('\n' + 'Letter (' + chalk.red(letter) + ') was used before');
            }else{
                  wrongGuess.push(letter);
            guessesRemaining--;
            }
          
        }
        
        if (numLettersOfWord.toString() == blanksAndCorrect.toString()) {
            figlet('\n'+ '        Congratulations You Won!! '+ '\n' 
            + '               You got ' 
            + guessesRemaining + ' guesses left',{ 
            font: 'slant',
            horizontalLayout: 'fitted'},
            function(err, data) {
                if (err) {
                    console.log('Something went wrong...');
                    console.dir(err);
                    return;
                }
                console.log(chalk.blueBright.dim.bold(data));


            });
        } else if (guessesRemaining === 0) {
            figlet(' ☢ ☢  GAME OVER ☢ ☢ ',{ 
            font: 'isometric2',
            horizontalLayout: 'defualt'},
            function(err, data) {
                if (err) {
                    console.log('Something went wrong...');
                    console.dir(err);
                    return;
                }

                term.slowTyping('\n' + '\n' + 'You are out of guesses, The word was ' + randomiseWord + '\n' + '\n'),
                { flashStyle: term.brightWhite } ,
                function() { process.exit() ; };
                console.log(chalk.red.dim.bold(data));
            });
        }else{
        console.log('\n' + 'Letters that was used and not in the answer: ' + chalk.cyanBright(wrongGuess));
        console.log('\n' +'You have ' + chalk.blue(guessesRemaining) +  ' guesses left');
        console.log('\n' + 'The word is: '+ '\n' + blanksAndCorrect.join('')+ '\n');
        checking();
    }
    }
    })

})();
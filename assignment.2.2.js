(function () {
    'use strict';
    function assignment2(){
    const input  = require('readline-sync');
    const chalk = require('chalk');

    let firstPlayerAmount = 50;
    let secondPlayerAmount = 50;
    let suits = [chalk.red.bgWhite('♥'), chalk.black.bgWhite('♣'),
    chalk.red.bgWhite('♦'), chalk.black.bgWhite('♠')];
    console.log(chalk.red('♔ ♕ ♖ ♗ ♘ ♙ ',chalk.cyan('Welcome To War'),chalk.blue('♟ ♞ ♝ ♜ ♛ ♚')));
    let firstPlayer = input.question('\n' + 'First player please enter your name: ');
    console.log('Hello ' + firstPlayer + 
    ' You currently have ' + firstPlayerAmount + '₪');
    let secondPlayer = input.question('\n' + 'Second player please enter your name: ');
    console.log('Hello ' + secondPlayer + 
    ' You currently have ' + secondPlayerAmount + '₪');

    function betting(){

    let firstSuit = suits[Math.floor(Math.random()*suits.length)];
    let secondSuit = suits[Math.floor(Math.random()*suits.length)];
    let firstPlayerRandom = Math.floor(Math.random() * 12) + 1;
    let secondPlayerRandom = Math.floor(Math.random() * 12) + 1;
    let firstPlayerBet = input.questionInt('\n' + firstPlayer + ' please place your bet for the next round: 1 to ' 
    + (firstPlayerAmount)+ ': ');
    let secondPlayerBet = input.questionInt('\n' + secondPlayer + ' please place your bet for the next round: 1 to ' 
    + (secondPlayerAmount) + ': '); 
    if(firstPlayerAmount - firstPlayerBet < 0 || firstPlayerBet < 0){
        console.log('\n' + firstPlayer + ' I said between 1 to ' +  (firstPlayerAmount) 
        + ' And you entered ' + firstPlayerBet
        + '\n' + 'no bet for you, come back one year, next!');
    }else if(secondPlayerAmount - secondPlayerBet < 0 || secondPlayerBet < 0){
        console.log('\n' + secondPlayer + ' I said between 1 to ' +  (secondPlayerAmount) 
        + ' And you entered ' + secondPlayerBet
        + '\n' + 'no bet for you, come back one year, next!');
    }else{    
        if((firstPlayerRandom > secondPlayerRandom) && ((secondPlayerAmount - secondPlayerBet) == 0)){
            console.log(chalk.red('\n' + secondPlayer + ' You Have Lost All Your Money!!'));
            console.log('\n' + firstPlayer + ' card is ' + firstPlayerRandom + ' ' + firstSuit +
            ' And ' + secondPlayer + ' card is ' + secondPlayerRandom + ' ' + secondSuit);
            secondPlayerAmount -= secondPlayerBet;  
            console.log('\n' + secondPlayer + ' You lost '+ secondPlayerBet + '₪ And now you have ' 
            + secondPlayerAmount + '₪' + '\n' + 'You are broke... Bye Bye');
            console.log(chalk.red('\n' + "^^^^^^^^^^^^^^^^^^^^"));
            console.log(chalk.bgRed.black(" ☢ ☢  GAME OVER ☢ ☢ "));
            console.log(chalk.red("vvvvvvvvvvvvvvvvvvvv"));
        }else if(firstPlayerRandom > secondPlayerRandom){
            console.log(chalk.green('\n' + firstPlayer + ' You Won!!')
            + chalk.red('\n' + secondPlayer + ' You Lost!!'));
            console.log('\n' + firstPlayer + ' card is ' + firstPlayerRandom + ' ' + firstSuit +
            ' And ' + secondPlayer + ' card is ' + secondPlayerRandom + ' ' + secondSuit );
            firstPlayerAmount += firstPlayerBet;
            secondPlayerAmount -= secondPlayerBet;
            console.log('\n' + firstPlayer + ' You won '+ firstPlayerBet 
            + '₪ And now you have '+ firstPlayerAmount + '₪');
            console.log(secondPlayer + ' You lost '+ secondPlayerBet 
            + '₪ And now you have '+ secondPlayerAmount + '₪');

            // Loser get the right to choose if another game will be played
            let secondPlayerLosingQuestion = ['Play another round', 'Leave with my money'],
            secondPlayerLosingIndex = input.keyInSelect(secondPlayerLosingQuestion, secondPlayer 
            + ' What would you like to do? ');
            let secondPlayerLosingSwitcher = secondPlayerLosingQuestion[secondPlayerLosingIndex];
            switch (secondPlayerLosingSwitcher) {
                case 'Play another round':
                    console.log(chalk.red('\n' + "^^^^^^^^^^^^^^^^^^^^^^"));
                    console.log(chalk.green("-♥♣-Shuffling Deck-♦♠-"));
                    console.log(chalk.blue("vvvvvvvvvvvvvvvvvvvvvv"));
                    betting();
                    break;
                case 'Leave with my money':
                    console.log(chalk.magenta('\n' + "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^"));
                    console.log(chalk.magenta("| we hope both of you had a good time |"));
                    console.log(chalk.magenta("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv"));
                    console.log('\n' + firstPlayer + ' You currently have ' + firstPlayerAmount + '₪'
                     + '\n' + secondPlayer + ' You currently have ' + secondPlayerAmount + '₪');
                    break;
                }
        }else if(firstPlayerRandom === secondPlayerRandom){
            console.log(chalk.blue('\n' + 'Its A Draw!!'));
            console.log('\n' + firstPlayer + ' card is ' + firstPlayerRandom +
            ' ' + firstSuit + ' And ' + secondPlayer + ' card is ' 
            + secondPlayerRandom + ' ' + secondSuit +
            '\n' + '\n' + firstPlayer + ', your ' + firstPlayerBet + '₪ was returned to you '
            + '\n' + secondPlayer + ', your ' + secondPlayerBet + '₪ was returned to you');
            betting();
        }else{
            if((secondPlayerRandom > firstPlayerRandom) && ((firstPlayerAmount - firstPlayerBet) == 0 )){
                console.log(chalk.red('\n' + firstPlayer + ' You Have Lost All Your Money!!'));
                console.log('\n' + firstPlayer + ' card is ' + firstPlayerRandom + ' ' + firstSuit +
                ' And ' + secondPlayer + ' card is ' + secondPlayerRandom + ' ' + secondSuit);
                firstPlayerAmount -= firstPlayerBet;  
                console.log('\n' + firstPlayer + ' You lost '+ firstPlayerBet + '₪ And now you have '
                + firstPlayerAmount + '₪' + '\n' + 'You are broke... Bye Bye');
                console.log(chalk.red('\n' + "^^^^^^^^^^^^^^^^^^^^"));
                console.log(chalk.bgRed.black(" ☢ ☢  GAME OVER ☢ ☢ "));
                console.log(chalk.red("vvvvvvvvvvvvvvvvvvvv"));                   
            }else if(secondPlayerRandom > firstPlayerRandom) {
                console.log(chalk.green('\n' + secondPlayer + ' You Won!!')
                + chalk.redBright('\n' + firstPlayer + ' You Lost!!'));
                console.log('\n' + firstPlayer + ' card is ' + firstPlayerRandom + ' ' + firstSuit +
                ' And ' + secondPlayer + ' card is ' + secondPlayerRandom + ' ' + secondSuit );
                firstPlayerAmount -= firstPlayerBet;
                secondPlayerAmount += secondPlayerBet;  
                console.log('\n' + secondPlayer + ' You won '+ secondPlayerBet 
                + '₪ And now you have '+ secondPlayerAmount + '₪');
                console.log(firstPlayer + ' You lost '+ firstPlayerBet 
                + '₪ And now you have '+ firstPlayerAmount + '₪');
                
                // Loser get the right to choose if another game will be played
                let firstPlayerLosingQuestion = ['Play another round', 'Leave with my money'],
                firstPlayerLosingIndex = input.keyInSelect(firstPlayerLosingQuestion, firstPlayer 
                + ' What would you like to do? ');
                let firstPlayerLosingSwitcher = firstPlayerLosingQuestion[firstPlayerLosingIndex];
                switch (firstPlayerLosingSwitcher) {
                    case 'Play another round':
                        console.log(chalk.red('\n' + "^^^^^^^^^^^^^^^^^^^^^^"));
                        console.log(chalk.green("-♥♣-Shuffling Deck-♦♠-"));
                        console.log(chalk.blue("vvvvvvvvvvvvvvvvvvvvvv"));
                        betting();
                        break;
                    case 'Leave with my money':
                        console.log(chalk.magenta('\n' + "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^"));
                        console.log(chalk.magenta("| we hope both of you had a good time |"));
                        console.log(chalk.magenta("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv"));
                        console.log('\n' + firstPlayer + ' You currently have ' + firstPlayerAmount + '₪'
                        + '\n' + secondPlayer + ' You currently have ' + secondPlayerAmount + '₪');
                        break;
                      }
            }
            }   
        }
    } 
        betting();
    }
    assignment2();
})();

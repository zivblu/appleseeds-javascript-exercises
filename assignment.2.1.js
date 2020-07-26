(function () {
    'use strict';
    function assignment(){
    const input  = require('readline-sync');
    const chalk = require('chalk');

    let amount = 50;

    console.log(chalk.red('♔ ♕ ♖ ♗ ♘ ♙ ',chalk.cyan('Welcome To War'),chalk.blue('♟ ♞ ♝ ♜ ♛ ♚')));
    let yourName = input.question('Please enter your name: ');

    console.log('Hello ' + yourName + 
    ' You currently have ' + amount + '₪');
    
    function betting(){
    let bet = input.questionInt('Place your bet for the next round: 1 to ' 
    + amount + ': ');
    let userRandom = Math.floor(Math.random() * 12) + 1;
    let computerRandom = Math.floor(Math.random() * 12) + 1;
    if(amount - bet < 0 || bet < 0 ){
        console.log('I said between 1 to 50 And you entered ' + bet
        + '\n' + 'no bet for you, come back one year, next!');
        }
    else{
        if(userRandom > computerRandom){
            console.log(chalk.green('You Won!!'));
            console.log('Your card is ' + userRandom + 
            ' And my card is ' + computerRandom);
            amount += bet;
            console.log('You won '+ bet + '₪ And now you have '+ amount 
            + '₪');
            let winQuestion = ['Play another round', 'Leave with my money'],
            winIndex = input.keyInSelect(winQuestion, 'What would you like to do? ');
            let winSwitcher = winQuestion[winIndex];
            switch (winSwitcher) {
                case 'Play another round':
                    betting();
                    break;
                case 'Leave with my money':
                    console.log('\n' + 'You currently have ' + amount + '₪' 
                    + '\n' + 'we hope you had a good time');
                    break;
                }
        }else if(userRandom === computerRandom){
            console.log(chalk.blue('Its A Draw!!'));
            console.log('Your card is ' + userRandom + 
            ' And my card is ' + computerRandom + '\n' + 'your ' + bet + '₪ was returned to you');
            betting();
        }else{
            if((amount - bet) <= 0 ){
                console.log(chalk.red('You Lost All Your Money!!'));
                console.log('Your card is ' + userRandom + 
                ' And my card is ' + computerRandom);
                amount -= bet;  
                console.log('You lost '+ bet + '₪ And now you have '+ amount 
                + '₪' + '\n' + 'You are broke... Bye Bye');        
            }else{
                console.log(chalk.redBright('You Lost!!'));
                console.log('Your card is ' + userRandom + 
                ' And my card is ' + computerRandom);
                amount -= bet;  
                console.log('You lost '+ bet + '₪ And now you have '+ amount 
                + '₪'); 
                let lostQuestion = ['Play another round', 'Leave with my money'],
                lostIndex = input.keyInSelect(lostQuestion, 'What would you like toi do? ');
                let lostSwitcher = lostQuestion[lostIndex];
                switch (lostSwitcher) {
                    case 'Play another round':
                       betting();
                       break;
                    case 'Leave with my money':
                        console.log('You currently have ' + amount + '₪' 
                        + '\n' + 'we hope you had a good time');
                        break;
                      }
            }
            }   
        }
        }
        betting();
    }
    assignment();
})();

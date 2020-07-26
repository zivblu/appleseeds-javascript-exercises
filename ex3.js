(function () {
    'use strict';
    let f = function f() {
    };
    f();
    function enterNumber() {
        const input = require('readline-sync');

        let num1 = input.questionInt("Enter number between 0-9: ");

        let switcher = num1;
        switch (switcher) {
            case 0:
                console.log('ZERO');
                break;
            case 1:
                console.log('ONE');
                break;
            case 2:
                console.log('TWO');
                break;
            case 3:
                console.log('THREE');
                break;
            case 4:
                console.log('FOUR');
                break;
            case 5:
                console.log('FIVE');
                break;
            case 6:
                console.log('SIX');
                break;
            case 7:
                console.log('SEVEN');
                break;
            case 8:
                console.log('EIGHT');
                break;
            case 9:
                console.log('NINE');
                break;
            default:
        }
    }
    enterNumber();
})();
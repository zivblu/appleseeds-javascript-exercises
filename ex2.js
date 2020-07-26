(function () {
    'use strict';
    let f = function f(){
    };
    f();
    function plus(){
        const input  = require('readline-sync');
    
        let num1 = input.questionInt("Enter the first number: ");
        let num2 = input.questionInt("Enter the second number: ");
        let sum = (num1 + num2);
        if (sum === 10) {
            console.log('makes 10');
        } else {
        console.log('nope');
        }
        }
    plus();
})();
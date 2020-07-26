(function () {
    'use strict';
    let f = function f() {
    };
    f();
    function factorialChallenge() {

        const input  = require('readline-sync');
        
        let num = input.questionInt('please choose a positive number : ');
        let temp = 0;
        let sum = 1;
        
        for (let i = 1 ; i <= num; i++) {
            sum *=i;
            temp += sum;
        }
        console.log(sum);
    }
    factorialChallenge();
})();
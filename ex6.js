(function () {
    'use strict';
    let f = function f() {
    };
    f();
    function integerValidation() {

        const input  = require('readline-sync');

        let num = input.questionInt('please choose a number larger than 10: ');
        do {
        num = input.questionInt('please choose a number LARGER than 10: ');
        } while (num < 10);
        console.log('thank you');
        }
    integerValidation();
})();
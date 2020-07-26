(function () {
    'use strict';
    const input = require('readline-sync');
    let f = function f() {
    };

    f();
    function capitalizeVowels() {

        let sentence = input.question('please write something: ');
        let string = sentence.replace(/a|e|i|o|u|y/gi, function(x){
            return x.toUpperCase();
         });
         console.log(string);
    }
    capitalizeVowels();
})();


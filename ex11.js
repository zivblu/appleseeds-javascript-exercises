(function () {
    'use strict';
    const input = require('readline-sync');
    let f = function f() {
    };

    f();
    function Palindrome() {

        let sentence = input.question('please write something: ');
            let temp = sentence;
            temp = temp.toLowerCase().replace();
            if(temp === temp.split('').reverse().join('')){
                console.log(sentence + ' is a palindrome');
            }else{
                console.log(sentence + ' is not a palindrome');
            }
    }
    Palindrome();
})();




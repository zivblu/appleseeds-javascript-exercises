(function () {
    'use strict';
    const input = require('readline-sync');
    let f = function f() {
    };

    f();
    function replaceSpaceWithStar() {

        let sentence = input.question('please write a sentence: ');
        console.log(sentence.replace (/ /g, '*'));
    }
    replaceSpaceWithStar();
})();





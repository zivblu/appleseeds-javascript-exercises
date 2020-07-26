(function () {
    'use strict';
    const input  = require('readline-sync');

    function minAndMax() {
        let num = input.questionInt('please choose a positive number: ');
        let array =  new Array(num);
        for (let index = 0; index < array.length; index++) {
            (array[index] = Math.floor(Math.random() * 50) + 1);
        }                
    console.log('min is ' + Math.min(...array));
    console.log('max is ' + Math.max(...array));
    }
    minAndMax();
})();





(function () {
    'use strict';
    const input  = require('readline-sync');

    function indexOfMinAndMax() {
        let num = input.questionInt('please choose a positive number: ');
        let array =  new Array(num);
        for (let index = 0; index < array.length; index++) {
            (array[index] = Math.floor(Math.random() * 50) + 1);
        }          
    
    console.log('index of min is ' + array.indexOf(Math.min(...array)));
    console.log('index of max is ' + array.indexOf(Math.max(...array)));
    }
    indexOfMinAndMax();
})();





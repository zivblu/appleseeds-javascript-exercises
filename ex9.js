(function () {
    'use strict';

        const input  = require('readline-sync');
        let num = input.questionInt('please choose a positive number: ');
        for(let i = 0; i <= num; i++){
            if(isPrime(i)) console.log(i);
        
        function isPrime(num) {
            if(num < 2) return false;
            for (let i = 2; i < num; i++) {
                if(num%i===0)
                    return false;
            }
            return true;
        }
    }
})();
(function () {
    'use strict';
    let f = function f() {
    };
    f();
    function oddNumbers() {
        for (let i = 1; i <= 100; i++) {
            if(i%2!==0)
            console.log(i);
       }
    }
    oddNumbers();
})();
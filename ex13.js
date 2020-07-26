(function () {
    'use strict';
    const input = require('readline-sync');
    let f = function f() {
    };

    f();
    function longestWord() {

        let sentence = input.question('please write something: ');
        let arr = sentence.match(/\w{0,}/gi);
        let res = arr[0];
      
        for(let i = 1 ; i < arr.length ; i++)
        {
          if(res.length < arr[i].length)
          {
            res = arr[i];
          } 
        }
        return res;
      }
      console.log(longestWord());
    
})();



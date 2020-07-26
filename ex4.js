(function () {
    'use strict';
    let f = function f(){
    };
    f();
    function enterNumber(){
        const input  = require('readline-sync');
    
        let numOfPeople = input.questionInt('How many people are you going with? ');
            if(numOfPeople < 0) throw new Error ('Parameter cant be negetive!');
            else if (isNaN(numOfPeople)) throw new Error ('Parameter is not a number!');
                console.log(numOfPeople + ' people is coming with you');
        input.setDefaultOptions({limit: ['Yes', 'No']});
        let kosher = input.question('Should it be Kosher? (Yes/No): ');
        let result = kosher.toLowerCase();
            if (result === 'yes') {
                console.log('You choose Kosher food');  
            input.setDefaultOptions({limit: ['Yes', 'No']});
            let kosherLemehadrin = input.question('should it be Kashrut Lemehadrin? (Yes/No): ');
            let seconedResult = kosherLemehadrin.toLowerCase();
                if (seconedResult === 'yes') {
                    console.log('You choose Kosher Lemehadrin Restaurant');
                }else {
                     console.log('You choose Kosher Restaurant');  
                }
            } else {
                console.log('You choose a non Kosher Restaurant');
        }
        let food = ['Asian', 'Italian', 'Fine dining', 'Japanese', 'Mexican'],
        index = input.keyInSelect(food, 'What kind of food do you want?');
        console.log('Ok, ' + (numOfPeople+=1) + ' people is going to eat in ' + food[index] + 
        ' Restaurant.');
          }
        
    enterNumber();
})();

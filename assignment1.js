(function () {
    'use strict';
    let f = function f(){
    };
    f();
    function assignment(){
        const input  = require('readline-sync');

    let sum = 0;

    let yourName = input.question('What is your name?: ');

    console.log('\n'+ 'Hello ' + yourName + '!' + '\n' + 
    'Welcome To What Disney Character Are You? quiz' +'\n'
    +'\n' + '1st Question');

    
    let question1 = ['They seem to think I need to concentrate on my work a little more',
     'Pretty good, actually', 'In a word? Amazing', 'The word "enthusiastic" keeps popping up'],
    index1 = input.keyInSelect(question1, 'What are your school reports like?');
    let switcher1 = question1[index1];
    switch (switcher1) {
        case 'They seem to think I need to concentrate on my work a little more':
            sum++;
            break;
        case 'Pretty good, actually':
            sum+=2;
            break;
        case 'In a word? Amazing':
            sum+=3;
            break;
        case 'The word "enthusiastic" keeps popping up':
            sum+=4;
            break;
    }
    console.log('\n' + '2st Question');
    let question2 = ['An adventure film', 'A romantic comedy', 'An action film', 'A bit scary'],
    index2 = input.keyInSelect(question2, 
    'If someone was to make a movie about your life, what would it be like?');
    let switcher2 = question2[index2];
    switch (switcher2) {
        case 'An adventure film':
            sum+=2;
            break;
        case 'A romantic comedy':
            sum++;
            break;
        case 'An action film':
            sum+=4;
            break;
        case 'A bit scary':
            sum+=3;
            break;
    }
    console.log('\n' + '3rd Question');
    let question3 = ['Beetle', 'Butterfly', 'Bee', 'Mantis'],
    index3 = input.keyInSelect(question3, 'Pick an insect!');
    let switcher3 = question3[index3];
    switch (switcher3) {
        case 'Beetle':
            sum+=3;
            break;
        case 'Butterfly':
            sum+=4;
            break;
        case 'Bee':
            sum++;
            break;
        case 'Mantis':
            sum+=2;
            break;
    }
    console.log('\n' + '4th Question');
    let question4 = ['Blazing hot sunshine', 'A breezy spring day',
    'I love an autumn morning', 'A snowstorm'],
    index4 = input.keyInSelect(question4, "What's your favourite type of weather?");
    let switcher4 = question4[index4];
    switch (switcher4) {
        case 'Blazing hot sunshine':
            sum+=4;
            break;
        case 'A breezy spring day':
            sum++;
            break;
        case 'I love an autumn morning':
            sum+=2;
            break;
        case 'A snowstorm':
            sum+=3;
            break;
    }
    console.log('\n' + '5th Question');
    let question5 = ['Watch cat videos', 'Learn stuff on YouTube', 
    'Design amazing outfits', 'Do homework?'],
    index5 = input.keyInSelect(question5, "What's your favourite thing to do on the computer?");
    let switcher5 = question5[index5];
    switch (switcher5) {
        case 'Watch cat videos':
            sum++;
            break;
        case 'Learn stuff on YouTube':
            sum+=3;
            break;
        case 'Design amazing outfits':
            sum+=4;
            break;
        case 'Do homework?':
            sum+=2;
            break;
    }
    console.log('\n' + '6th Question');
    let question6 = ['An indoor swimming pool', 'A spa', 'A gigantic walk-in wardrobe', 
    'A home cinema with a popcorn machine'],
    index6 = input.keyInSelect(question6, 'What kind of room would your dream house have?');
    let switcher6 = question6[index6];
    switch (switcher6) {
        case 'An indoor swimming pool':
            sum+=4;
            break;
        case 'A spa':
            sum+=3;
            break;
        case 'A gigantic walk-in wardrobe':
            sum++;
            break;
        case 'A home cinema with a popcorn machine':
            sum+=2;
            break;
    }
    console.log('\n' + '7th Question');
    let question7 = ['Football', "I'm happy to just relax and watch tv", 'Basketball', 'Swimming'],
    index7 = input.keyInSelect(question7, "What's your favourite type of sport?");
    let switcher7 = question7[index7];
    switch (switcher7) {
        case 'Football':
            sum+=2;
            break;
        case "I'm happy to just relax and watch tv":
            sum++;
            break;
        case 'Basketball':
            sum+=4;
            break;
        case 'Swimming':
            sum+=3;
            break;
    }
    console.log('\n' + '8th Question');
    let question8 = ['Crocs', 'Flip flops', 'Those elf shoes look very stylish', 'Flippers'],
    index8 = input.keyInSelect(question8, 
    'If you could wear only one kind of shoe, what would you pick?');
    let switcher8 = question8[index8];
    switch (switcher8) {
        case 'Crocs':
            sum+=4;
            break;
        case 'Flip flops':
            sum+=1;
            break;
        case 'Those elf shoes look very stylish':
            sum+=2;
            break;
        case 'Flippers':
            sum+=3;
            break;
    }
    console.log('\n' + '9th Question');
    let question9 = ['Meatballs and spicy sauce', '"Loads of salad', 
    'Turkey and mustard', 'Anything spicy with a packet of crisps on the side, thanks'],
    index9 = input.keyInSelect(question9, 'Pick a sandwich filling!');
    let switcher9 = question9[index9];
    switch (switcher9) {
        case 'Meatballs and spicy sauce':
            sum+=3;
            break;
        case '"Loads of salad':
            sum+=2;
            break;
        case 'Turkey and mustard':
            sum+=4;
            break;
        case 'Anything spicy with a packet of crisps on the side, thanks':
            sum++;
            break;
    }
    console.log('\n' + '10th Question');
    let question10 = ['Pencil', 'A fountain pen', 'Marker', 'An obnoxiously bright highlighter'],
    index10 = input.keyInSelect(question10, 'Pick something to doodle with');
    let switcher10 = question10[index10];
    switch (switcher10) {
        case 'Pencil':
            sum++;
            break;
        case 'A fountain pen':
            sum+=4;
            break;
        case 'Marker':
            sum+=3;
            break;
        case 'An obnoxiously bright highlighter':
            sum+=2;
            break;
    }
    console.log('\n' + 'You have scored ' + sum + ' points' + '\n' );
    console.log('--------------Quiz results--------------'+'\n');
    
    if(sum <= 12){
        console.log('You are: OLAF!' + '\n' + 
        "You're a friendly snowman who's obsessed with sunbathing!" );
    }else if(sum <= 22){
        console.log('You are: PRINCESS JASMINE!' + '\n' + 
        "You're friendly, loyal and sassy!");
    }else if(sum <= 32){
        console.log('You are: EDNA MODE!' + '\n' + 
        "You're a pint-sized fashion icon");
    }else {
        console.log('You are: MIKE WAZOWSKI!' + '\n' + 
        "You're a punky little eyeball!");
    }
}
    assignment();
})();
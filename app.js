

//global variables 
var i;
var j;
var text = '';

//outer loop-to loop through friends in friend array

var friends = ['Erica', 'David', 'Meredith', 'Hernan', 'Ashley'];
for (j = 0; j < friends.length; j++) {
    text += friends[j].toUpperCase() + ':\n';

    //inner loop that counts down from 99 that returns first statement if >1 or second statement if = 1.
    for (i = 99; i > 0; i--) {

        if (i > 1) {
            text += i + ' lines of code in a file, ' + i + ' lines of code; ' + friends[j] + ' strikes one out, clears it all out, \n';
        }
        else {
             text += i + ' line of code in a file, ' + i + ' line of code; ' + friends[j] + ' strikes one out, clears it all out, no more lines of code in the file. \n';
        }
    }
}
console.log(text)


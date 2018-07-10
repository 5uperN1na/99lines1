


var i;
var j;
var text = '';

var friends = ['Erica', 'David', 'Meredith', 'Hernan', 'Ashley'];
for (j = 0; j < friends.length; j++) {
    text += friends[j].toUpperCase() + ':\n';

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


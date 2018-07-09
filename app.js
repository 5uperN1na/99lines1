

//99 lines of code in the file, 99 lines of code; John strikes one out, clears it all out, 
//98 lines of code in the file, 98 lines of code; John strikes one out, clears it all out, 
//97 lines of code in the file

var i;
var j;

var friends = ['Erica', 'David', 'Sharon', 'Hernan', 'Olivia'];
for (j = 0; j < friends.length; j++) {
    console.log(friends[j].toUpperCase() + ':');

    for (i = 100; i > 0; i--) {

        if (i > 1) {
            console.log(i + ' lines of code in a file, ' + i + ' lines of code; ' + friends[j] + ' strikes one out, clears it all out, ' + i + ' lines of code in a file, ' + i + ' lines of code; ' + friends[j] + ' strikes one out, clears it all out, ');
        }
        else {
            console.log(i + ' line of code in a file, ' + i + ' line of code; ' + friends[j] + ' strikes one out, clears it all out, no more lines of code in the file. ');
        }
    }


};




console.log("======= Homework Week 2 =======");
console.log("======= Exercise 1 =======");

function getFullname (firstname, surname){
    return firstname + " " + surname;
}

console.log(getFullname("Albert", "Grimaldi"));
const fullname1 = getFullname("Carl-Philip", "Bertil");
console.log(fullname1);
const fullname2 = getFullname("George-Alexander", "Louis");
console.log(fullname2);




console.log("======= Exercise 2 =======");


function formalName (firstname, surname, useFormalName){
    if (useFormalName){
        return "Lord " + firstname + " " + surname;
    } else {
        return firstname + " " + surname;
    }
}

console.log(formalName("Albert", "Grimaldi", true));
console.log(formalName("Albert", "Grimaldi", false));
console.log(formalName("Carl-Philip", "Bertil", true));
console.log(formalName("Carl-Philip", "Bertil", false));
console.log(formalName("George-Alexander", "Louis", true));
console.log(formalName("George-Alexander", "Louis", false));

//If the the person was a woman I would have used "Lady" instead of "Lord".
//To achieve that I would have added an if to check if the person
//Is actually a woman or not. That would require also a checkbox in the form.
//If the checkbox is checked then the person is Lady, if not then the person is Lord.
//In formula i would add a new parameter called isWoman and check if it is true or false.
//If it is true then the person is Lady, if not then the person is Lord.
//If the person wouldn't chose any of the options then the person would be called by the full name.

/*
function formalName (firstname, surname, useFormalName, isWoman){
    if (useFormalName){
        if (isWoman){
            return "Lady " + firstname + " " + surname;
        } else {
            return "Lord " + firstname + " " + surname;
        }
    } else {
        return firstname + " " + surname;
    }s
}
*/




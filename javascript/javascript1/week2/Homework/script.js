

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


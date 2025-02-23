const name = "Alice";
const age = 16;
const country = "USA";
let message = "";
let status = "";

if (age < 18) {
  status = "minor";
} else {
  status = "adult";
}

message = `${name} is a ${status} from ${country}.`;

console.log(message); // Alice is a minor from USA.

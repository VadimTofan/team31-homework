const name = "Alice";
const age = 16;
const country = "USA";

if (age < 18) {
  let status = "minor";
} else {
  status = "adult";
}

const message = `${name} is a ${status} from ${country}.`;

console.log(message); // Alice is a minor from USA.

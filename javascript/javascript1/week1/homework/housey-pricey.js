

console.log("======Exercise Housey pricey======");

// Peter's house price
let houseCost = 2500000;
let volumeInMeters = 8 * 10 * 10;
let gardenSizeInM2 = 100;
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
console.log("Peter's house price is:", housePrice);
if (housePrice < 2500000) {
    console.log("By paying", houseCost.toLocaleString()+" Peter is overpaying for the house.");
} else {
    console.log("Peter, my friend, that price is a steal!");
}



// Julia's house price
houseCost = 1000000;
volumeInMeters = 5 * 11 * 8;
gardenSizeInM2 = 70;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
console.log("Julia's house price is:", housePrice);
if (housePrice < 1000000) {
    console.log("By paying", houseCost.toLocaleString()+" Julia is overpaying for the house.");
} else {
    console.log("Julia, my friend, the price of", houseCost.toLocaleString(),"is a steal!");    
}
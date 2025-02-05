

console.log("======Exercise Ez Namey======");


let firstWords = ["Easy", "Awesome", "Corporate", "Quick", "Smart", "Affordable", "Good", "Interesting", "Agile", "Compact"];
let secondWords = ["Day", "Firm", "Tech", "Corporation", "IT", "Intelligence", "Business", "Exploration", "Solutions", "Company"];
let startupName = firstWords[Math.floor(Math.random() * 10)] + " " + secondWords[Math.floor(Math.random() * 10)];
console.log('The startup:', '"'+ startupName +'"', 'contains', startupName.length + ' characters.');

console.log("=========Travel Information!=========");

const travelInformation = {speed: 50, destinationDistance: 432};

const travelTime = totalTime(travelInformation);
function totalTime(travelInformation) {
    math = (travelInformation.destinationDistance / travelInformation.speed) * 60;
    const hours = Math.floor(math / 60);
    const minutes = Math.round(math % 60); 
    return `The trip will take: ${hours} hours and ${minutes} minutes`;
}

console.log (travelTime);
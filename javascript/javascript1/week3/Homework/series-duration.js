console.log("=========Series Duration=========");

const seriesDurations = [
  {
    title: "Game of Thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

let totalViewTime = 0; 
const ageInMinutes = 80 * 365 * 24 * 60;

function logOutSeriesText() {
    for (i = 0; i < seriesDurations.length; i++){
        const seriesTime = (seriesDurations[i].days * 24 * 60) + (seriesDurations[i].hours * 60) + seriesDurations[i].minutes;

        let percentOfAge = 0;
        percentOfAge = (seriesTime / ageInMinutes) * 100;
        console.log(`${seriesDurations[i].title} took ${(percentOfAge).toFixed(3)}% of my life`);
        totalViewTime = totalViewTime + seriesTime;
    }   
    totalViewTime = (totalViewTime / ageInMinutes) * 100;
    console.log(`In total that took ${totalViewTime.toFixed(3)}% of my life`);
}

logOutSeriesText();
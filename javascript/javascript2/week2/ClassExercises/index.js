// for (i = 0; i < restaurants.length; i++) {
//   console.log(restaurants[i]);
// }

// restaurants.forEach(function (restaurant) {
//   console.log(restaurant);
// });

// let i = 0;
// while (i < restaurants.length) {
//   console.log(restaurants[i]);
//   i++;
// }

// for (let restaurant of restaurants) {
//   console.log(restaurant);
// }

// function changeCase(name) {
//   return `${name.toUpperCase()} - ${Math.random()}`;
// }

// const mentorNamesTrad = [];

// for (i = 0; i < mentors.length; i++) {
//   const name = mentors[i].name;
//   const changedName = changeCase(name);
//   mentorNamesTrad.push(changedName);
// }
// console.log(mentorNamesTrad);

// const mentorsNamesMap = mentors.map(function (mentor, i) {
//   return changeCase(mentor.name);
// });

// console.log(mentorsNamesMap);

// const restaurantNames = [];
// for (let i = 0; i < restaurants.length; i++) {
//   restaurantNames.push(restaurants[i].name);
// }
// console.log(restaurantNames);

// const restaurantNamesMap = restaurants.map(function (restaurant) {
//   return restaurant.name;
// });
// console.log(restaurantNamesMap);

// const mentorsWithDbSkills = [];
// for (i = 0; i < mentors.length; i++) {
//   const mentor = mentors[i];
//   const subjectsLowerCase = mentor.subjects.map(function (subject) {
//     return subject.toLowerCase();
//   });
//   if (subjects.includes("database") || subjects.includes("db")) {
//     mentorsWithDbSkills.push(mentors[i].name);
//   }
// }
// console.log(mentorsWithDbSkills);

// const mentorsTeachingDb = mentors.filter(function (mentor) {
//   const subjectsLowerCase = mentor.subjects.map(function (subject) {
//     return subject.toLowerCase();
//   });

//   if (subjectsLowerCase.includes("database") || subjectsLowerCase.includes("db")) {
//     return true;
//   }
//   return false;
// });
// console.log(mentorsTeachingDb);

// const namesOfMentorsTeachingDb = mentorsTeachingDb.map(function (mentor) {
//   return mentor.name;
// });

// const italianAndPizzaRestaurants = [];
// for (let i = 0; i < restaurants.length; i++) {
//   const type = restaurants[i].type.toLowerCase();
//   if (type === "pizza" || type === "italian") {
//     italianAndPizzaRestaurants.push(restaurants[i]);
//   }
// }
// console.log(italianAndPizzaRestaurants);

// const italianAndPizzaPlaces = restaurants.filter(function (restaurant) {
//   const type = restaurant.type.toLowerCase();
//   if (type === "pizza" || type === "italian") {
//     return true;
//   }
//   return false;
// });
// console.log(italianAndPizzaPlaces);

// mentors.sort(function (itemA, itemB) {
//   if (itemA.yearsOfExperience > itemB.yearsOfExperience) {
//     return 1;
//   }
//   if (itemA.yearsOfExperience < itemB.yearsOfExperience) {
//     return -1;
//   }
//   return 0;
// });

restaurants.sort(function (a, b) {
  return a.rating < b.rating ? 1 : -1;
});

console.log(restaurants);

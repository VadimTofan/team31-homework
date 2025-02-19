console.log("=========Bonus Homework!=========");
console.log("=========Job Matching-2!=========");


function match(candidate, job) {
  if (!candidate.minSalary || !job.maxSalary) {
    return "The provided data was not complete.";
  }
  const wiggledSalary = candidate.minSalary - (candidate.minSalary * 0.1);

  return job.maxSalary >= wiggledSalary;
}

let candidate = { minSalary: 120000 };
let job = { maxSalary: 140000 };
console.log(match(candidate, job)); 
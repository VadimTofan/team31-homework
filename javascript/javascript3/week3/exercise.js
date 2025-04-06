class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullame() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const myUser = new User("Vadim", "Tofan");
console.log(myUser);
console.log(myUser.firstName);
console.log(myUser.getFullame());

class Job {
  constructor(id, title, description, startDate, endDate) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

class Education {
  constructor(id, title, school, address, startDate, endDate) {
    this.id = id;
    this.title = title;
    this.school = school;
    this.address = address;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

class CV {
  constructor(email) {
    this.jobs = [];
    this.educations = [];
    this.email = email;
  }

  addJob(job) {
    this.jobs.push(job);
  }

  removeJob(job) {
    const index = this.jobs.findIndex((item) => {
      return item.id === job.id;
    });
    if (index > -1) {
      this.jobs.splice(index, 1);
    }
  }

  addEducation(education) {
    this.educations.push(education);
  }

  removeEducation(education) {
    const index = this.educations.findIndex((item) => {
      return item.id === education.id;
    });
    if (index > -1) {
      this.jobs.splice(index, 1);
    }
  }
}

const myCv = new CV("vad.tofan@gmail.com");
const startingDate = new Date(1991, 3, 13);
const endingDate = new Date(2025, 4, 12);
const jobOne = new Job(1, "manager", "manage team", `${startingDate.getFullYear()}`, `${endingDate.getFullYear()}`);
const jobTwo = new Job(2, "not a manager", "will not manage team", `${startingDate.getFullYear()}`, `${endingDate.getFullYear()}`);

myCv.addJob(jobOne);
myCv.addJob(jobTwo);

console.log(myCv.jobs);

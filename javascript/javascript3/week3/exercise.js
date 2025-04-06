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
    this.email = email;
    this.jobs = [];
    this.educations = [];
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
      this.educations.splice(index, 1);
    }
  }

  renderCV() {
    const body = document.querySelector("body");
    body.innerHTML = `
        <section class="email" id="email"></section>
        <section class="education" id="education"></section>
        <section class="job" id="job"></section>
    `;
    const email = document.getElementById("email");
    const education = document.getElementById("education");
    const job = document.getElementById("job");

    email.innerHTML = `<p>Email: ${this.email}</p>`;
    job.innerHTML = this.jobs
      .map((jobItem) => {
        return `    
            <div class="job-item">
                <h3>${jobItem.title}</h3>
                <p>${jobItem.description}</p>
                <p>Start Date: ${jobItem.startDate}</p>
                <p>End Date: ${jobItem.endDate}</p>
            </div>
        `;
      })
      .join("");

    this.educations.forEach((educationItem) => {
      education.innerHTML += `
            <div class="education-item">
                <h3>${educationItem.title}</h3>
                <p>School: ${educationItem.school}</p>
                <p>Address: ${educationItem.address}</p>
                <p>Start Date: ${educationItem.startDate}</p>
                <p>End Date: ${educationItem.endDate}</p>
            </div>
        `;
    });
  }
}
const myCv = new CV("vad.tofan@gmail.com");
const jobOne = new Job(1, "Manager", "Managed Teams", "11/3/1992", "13/4/2025");
const jobTwo = new Job(2, "not a manager", "will not manage team", "11/3/1992", "13/4/2025");
const educationOne = new Education(1, "Marketing", "Small School of Advertising Stuff", "Copenhagen", "11/3/1992", "13/4/2025");
const educationTwo = new Education(2, "WebDev", "Big School of Deving Stuff", "Copenhagen", "11/3/1992", "13/4/2025");
const educationThree = new Education(2, "Not a Dev", "Big School of Not Deving Stuff", "Copenhagen", "11/3/1992", "13/4/2025");

myCv.addEducation(educationOne);
myCv.addEducation(educationTwo);
myCv.addEducation(educationThree);
myCv.addJob(jobOne);
myCv.addJob(jobTwo);
myCv.removeEducation(educationOne);
myCv.removeJob(jobTwo);
myCv.renderCV();

console.log("=======1.1 Implement Student Grades=======");

let students = [];

function createStudent(studentName, age, grades) {
  students.push({ name: studentName, age: age, grades: grades });
}

createStudent("Allan", 20, [10, 10, 7, 4, 7, -3]);
createStudent("Betty", 22, [12, 7, 7, 4, 2]);
createStudent("Charlie", 21, [10, 7, 4, 2, 0]);
createStudent("David", 23, [7, 4, 2, 0, -3]);
createStudent("Eva", 20, [12, 7, 10, 2, 12]);
createStudent("Grace", 22, [7, 10, 7, 10, 7]);
createStudent("Henry", 21, [4, 7, 7, 4, 4]);
createStudent("Irene", 23, [2, 7, 7, 4, 0]);

function calculateAverageGrade(student) {
  let totalGrade = 0;
  for (let i = 0; i < student.grades.length; i++) {
    totalGrade += student.grades[i];
  }
  const averageGrade = totalGrade / student.grades.length;
  return averageGrade;
}

function findTopStudent(students) {
  let topStudent;
  let highestAverageGrade = -Infinity;

  for (let i = 0; i < students.length; i++) {
    const averageGrade = calculateAverageGrade(students[i]);
    if (averageGrade > highestAverageGrade) {
      highestAverageGrade = averageGrade;
      topStudent = students[i];
    }
  }

  return topStudent;
}

students.forEach((student) => {
  const averageGrade = calculateAverageGrade(student);
  console.log(
    `The average grade of ${student.name} is ${averageGrade.toFixed(2)}`
  );
});

const topStudent = findTopStudent(students);
if (topStudent) {
  console.log(
    `The top student is ${
      topStudent.name
    } with an average grade of ${calculateAverageGrade(topStudent).toFixed(2)}`
  );
}

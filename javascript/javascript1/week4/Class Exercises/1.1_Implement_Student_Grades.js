console.log("=======1.1 Implement Student Grades=======");

students = [];
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
console.log(students);

function calculateAverageGrade(student) {
  let averageGrade = 0;
  for (let i = 0; i < student.grades.length; i++) {
    averageGrade = student.grades[i] + averageGrade;
  }
  const averageGrades = averageGrade / student.grades.length;
  return `The average grade of ${student.name} is ${averageGrades.toFixed(2)}`;
}
console.log(calculateAverageGrade(students[1]));

function calculateAverageGradeOfAll() {
  let highestAverage = 0;
  let topStudent;
  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let studentAverage = calculateAverageGrade(student);

    if (studentAverage > highestAverage) {
      highestAverage = studentAverage;
      topStudent = student;
    }
  }

  if (topStudent) {
    console.log(
      `The student with the highest average grade is ${
        topStudent.name
      } with an average grade of ${highestAverage.toFixed(2)}`
    );
  }
}

calculateAverageGradeOfAll();

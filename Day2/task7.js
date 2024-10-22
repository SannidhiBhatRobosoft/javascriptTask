//Array already give in the question
const student = [
  { name: "Alice", score: "95" },
  { name: "Bob", score: "82" },
  { name: "Charlie", score: "58" },
  { name: "David", score: "75" },
  { name: "Eva", score: "89" },
];
//Funtion for evaluating Grades
let evaluateGrades = () => {
  //an map function which return an object with both name and grades
  const substudent = student.map((item) =>
    Number(item.score) >= 90
      ? { grade: "A", name: item.name }
      : Number(item.score) >= 80
      ? { grade: "B", name: item.name }
      : Number(item.score) >= 70
      ? { grade: "C", name: item.name }
      : Number(item.score) >= 60
      ? { grade: "D", name: item.name }
      : { grade: "F", name: item.name }
  );

  console.log(
    substudent.filter(function (item) {
      return item.grade <= "C"; //an filter method which return only the grader which are below then b in there value
    })
  );
};
evaluateGrades(student); //function calling

const students = [
  { name: "Alice", scores: { math: 85, science: 92, english: 78 } },
  { name: "Bob", scores: { math: 90, science: 88, english: 94 } },
  { name: "Charlie", scores: { math: 78, science: 85, english: 80 } },
  { name: "David", scores: { math: 92, science: 95, english: 91 } },
  { name: "Eve", scores: { math: 88, science: 79, english: 85 } },
];
let Mathsum = 0;
let Sciencesum = 0;
let Englishsum = 0;
let max=0
let HiggestScore={}
let Avgscore=[]
for (let k in students) {
    let totalsum=students[k].scores.math+students[k].scores.science+students[k].scores.english
    Avgscore.push({name:students[k].name,Avgmark:totalsum/Object.keys(students[0].scores).length})
    if(totalsum>max)
    {
        max=totalsum
        HiggestScore.name=students[k].name
        HiggestScore.maek=totalsum
    }
    Mathsum += students[k].scores.math;
    Sciencesum += students[k].scores.science;
    Englishsum += students[k].scores.english;
}

console.log("Avg score in each sub")
console.log(Mathsum / students.length);
console.log(Sciencesum / students.length);
console.log(Englishsum / students.length);
console.log("------------------------")
console.log("Higgest score")
console.log(HiggestScore)
console.log("------------------------")
console.log("Avarge score")
console.log( Avgscore)

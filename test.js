// console.log("i love you virak");

// how to convert from "i like you " no space and convert to capital letter.

// let plantext = "i like you baby";
// let newtext = plantext.toUpperCase();
// newtext = newtext.replace(/ /g, "");
// console.log(newtext);

let students = {name: "virak", score:"60",
                name: "sassdah", score: "60", 
                name: "Udam", score: "30" };

// students.array.forEach(element => {
//     if(score >= 60){
//          return element +" have passed\t" + " with score: " + score;
//     }else{
//         return element + "have failed\t" + "with score: " + score;
//     } 
  
// });
console.log(students);
for(let pass in students){
    if(students.score >= 60){
        console.log(pass , students[pass])
    }
} 



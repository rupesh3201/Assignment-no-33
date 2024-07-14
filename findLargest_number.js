const Student_marks= [99,40,50,67,80,65,70,55,88]  //Student Marks Array
let largest = Student_marks[0]; 


for (var i = 0; i < Student_marks.length; i++) {
  if (Student_marks > largest ) {
    largest = Student_marks [i];
  }
}
console.log(`largest_num ${ largest}`);

 // printing largest element 99
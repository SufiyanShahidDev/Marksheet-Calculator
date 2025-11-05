

// Get Obtain Marks from user
  var totalMarks = 1100;
  var obtainedMarks = +prompt("Enter obtained marks from 1100:");

  // Calculate percentage
  var percentage = (obtainedMarks / totalMarks) * 100;

  // Grading System
  var grade;

  if (percentage >= 80) {
    grade = "A+";
  } else if (percentage >= 70) {
    grade = "A";
  } else if (percentage >= 60) {
    grade = "B";
  } else if (percentage >= 50) {
    grade = "C";
  } else if (percentage >= 40) {
    grade = "D";
  } else if (percentage == "") {
    alert("Enter your obtained marks.")
  } else {
    grade = "Fail";
  }

  // Show result in alert box
  alert(
    "Total Marks: " + totalMarks +
    "\nObtained Marks: " + obtainedMarks +
    "\nPercentage: " + percentage + "%" +
    "\nGrade: " + grade
  );

  // Show result in browser console
  console.log("Total Marks: " + totalMarks);
  console.log("Obtained Marks: " + obtainedMarks);
  console.log("Percentage: " + percentage + "%");
  console.log("Grade: " + grade);
console.log("this is  for callback ")
const student = [
    { name: "heary", subject: "javascript" },
    { name: "Rohan", subject: "machine learning" },

]
function enrollStudent(student) {
    setTimeout(function () {
        students.push(student);
        console.log("Student has been enrolled");
        //callback();

    }, 1000);
}
function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (student) {
            str += '<li> $(student.name)</li>'

        });
        document.getElementById('students').innerHTML = str;
        console.log("Student has been fetched");
    }, 2000);

}
let newStudent = { name: "sunny", subject: "python" }
enrollStudent(newStudent, getStudent);
//getStudent();

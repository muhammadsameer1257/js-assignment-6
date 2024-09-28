var absentStudents = [];
var presentCount = [];

var totalStudents = Number(prompt("How many students in Class"));

for (var i = 0; i < totalStudents; i++) {
    var students = prompt(`Student # ${i + 1} name`)
    var attendence = prompt(`Student ${students} are "present"/"absent`)

    if (attendence === "present"){
        presentCount.push(students);
    }
    else if(attendence === "absent"){
        absentStudents.push(students);
    }
    else {
        console.log(`please trype a correct word`);
    }

}
    console.log(`Present students ${presentCount.length} :`+
    console.log(presentCount)
    
);


if(absentStudents.length > 0){
    console.log(`This student are Absent ${absentStudents.length} : ${absentStudents}`);
}
else{
    console.log("Never students are absent");+
    console.log(absentStudents)
    
};
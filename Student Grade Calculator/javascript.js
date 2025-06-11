chemistry = document.getElementById("chemistry");
physics = document.getElementById("physics");
hindi = document.getElementById("hindi");
maths = document.getElementById("maths");
btn = document.getElementById("btn");
para = document.getElementById("para");

btn.onclick = function(){
    if(chemistry.value === "" || physics.value === "" || hindi.value === "" || maths.value === ""){
        para.textContent = "Please enter all fields";
    }
    else{
        let marks = parseInt(chemistry.value)+parseInt(physics.value)+parseInt(hindi.value)+parseInt(maths.value);
        let total = 400;
        let percentage = marks/400*100;
        let grade = "";

        if(percentage >= 90){
            grade = "A";
        }
        else if(percentage >=80 && percentage <90){
            grade = "B";
        }
        else if(percentage >=70 && percentage < 80){
            grade = "C";
        }
        else if(percentage >=60 && percentage <70){
            grade = "D";
        }
        else{
            grade = "E";
        }

        para.textContent = `your total score is ${marks} out of ${total} ,so the grade allotted is ${grade} and percentage is ${percentage} %`;
    }
};

/*Perform this function when the Calculate button is clicked.*/
$('#btnCalculate').click(function () {

    /*Initialize variables*/
    var assignment, groupProject, quiz, exam, intex, intFinal, letterFinal;

    /*Assign input values to variables*/
    assignment = $('#intAssignment').val();
    groupProject = $('#intGroupProject').val();
    quiz = $('#intQuiz').val();
    exam = $('#intExam').val();
    intex = $('#intINTEX').val();

    /*Calculate % final grade*/
    intFinal = (assignment * .55) + (groupProject * 0.05) + (quiz * 0.1) + (exam * 0.2) + (intex * 0.1);

    /*Determine letter grade with if statements*/
    if (94 <= intFinal) {
        letterFinal = 'A'
    }
    else if (90 <= intFinal && intFinal < 94) {
        letterFinal = "A-";
    }
    else if (87 <= intFinal && intFinal < 90) {
        letterFinal = "B+";
    }
    else if (84 <= intFinal && intFinal < 87) {
        letterFinal = "B";
    }
    else if (80 <= intFinal && intFinal < 84) {
        letterFinal = "B-";
    }
    else if (77 <= intFinal && intFinal < 80) {
        letterFinal = "C+";
    }
    else if (74 <= intFinal && intFinal < 77) {
        letterFinal = "C";
    }
    else if (70 <= intFinal && intFinal < 74) {
        letterFinal = "C-";
    }
    else if (67 <= intFinal && intFinal < 70) {
        letterFinal = "D+";
    }
    else if (64 <= intFinal && intFinal < 67) {
        letterFinal = "D";
    }
    else if (60 <= intFinal && intFinal < 64) {
        letterFinal = "D-";
    }
    else if (intFinal < 60) {
        letterFinal = "E";
    }

    /*alert to page with letter grade and percent grade*/
    alert('Final %: ' + intFinal.toPrecision(4) + ', Letter Grade: ' + letterFinal + '\nWell done soldier!');

})
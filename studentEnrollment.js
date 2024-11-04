// studentEnrollment.js

// Arrays for subjects
let DSA = [];
let PL = [];
let Networks = [];

// Function to display enrolled students
function displayEnrolledStudents(subjectArray) {
    if (subjectArray.length === 0) {
        console.log("No students enrolled in this subject.");
    } else {
        console.log("Currently enrolled students:", subjectArray);
    }
}

// Main program loop
while (true) {
    const subjectChoice = prompt("Select a subject to enroll a student:\n(A) DSA\n(B) PL\n(C) Networks\n(D) Exit").toUpperCase();
    
    let selectedSubject;
    
    switch (subjectChoice) {
        case 'A':
            selectedSubject = DSA;
            break;
        case 'B':
            selectedSubject = PL;
            break;
        case 'C':
            selectedSubject = Networks;
            break;
        case 'D':
            console.log("Final Enrollment Lists:");
            console.log("DSA:", DSA);
            console.log("PL:", PL);
            console.log("Networks:", Networks);
            exit(); // Exit the program
        default:
            console.log("Invalid selection. Please try again.");
            continue;
    }
    
    while (true) {
        const operationChoice = prompt("Select an option:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject").toUpperCase();
        
        switch (operationChoice) {
            case 'A': // Enroll
                const studentNameEnroll = prompt("Enter the name of the student to enroll:");
                selectedSubject.push(studentNameEnroll);
                console.log(${studentNameEnroll} has been enrolled in ${subjectChoice}.);
                break;
                
            case 'B': // Unenroll
                displayEnrolledStudents(selectedSubject);
                const studentNameUnenroll = prompt("Enter the name of the student to unenroll:");
                const index = selectedSubject.indexOf(studentNameUnenroll);
                
                if (index !== -1) {
                    selectedSubject.splice(index, 1); // Remove the student from the array
                    console.log(${studentNameUnenroll} has been unenrolled from ${subjectChoice}.);
                } else {
                    console.log(${studentNameUnenroll} is not enrolled in ${subjectChoice}.);
                }
                break;
                
            case 'C': // Select Another Subject
                break;
                
            default:
                console.log("Invalid selection. Please try again.");
                continue;
        }
        
        // Break out of operations loop to select another subject
        if (operationChoice === 'C') {
            break;
        }
    }
}

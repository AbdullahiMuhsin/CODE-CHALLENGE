const students = [
    { name: 'Muhsin', score: 84 },
    { name: 'Khalid', score: 39 },
    { name: 'Abdul', score: 65 },
    { name: 'Yahya', score: 55 },
    { name: 'Juma', score: 49 }
];

students.forEach(student => {
    let grade;
    if (student.score >= 79 && student.score <= 100) {
        grade = 'A';
    } else if (student.score >= 60 && student.score < 79) {
        grade = 'B';
    } else if (student.score >= 50 && student.score < 60) {
        grade = 'C';
    } else if (student.score >= 40 && student.score < 50) {
        grade = 'D';
    } else {
        grade = 'E';
    }
    console.log(`${student.name} has ${grade}`);
});


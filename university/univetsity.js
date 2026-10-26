use universityDB;

db.Students.insertOne({
    "student_id": "STU001",
    "name": "Alice Johnson",
    "major": "Computer Science",
    "courses": [
        {
            "course_code": "CS101",
            "course_name": "Intro to Programming",
            "grade": "B"
        }
    ]
});

db.Students.insertOne({
    "student_id": "STU002",
    "name": "Bob Smith",
    "major": "Data Science",
    "courses": [
        {
            "course_code": "CS101",
            "course_name": "Intro to Programming",
            "grade": "A"
        }
    ]
});
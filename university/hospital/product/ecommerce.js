use HospitalDB;

db.Patients.insertOne({
    "Patient_id": "PAT901",
    "name": "John Doe",
    "age": 45,
    "medical_history": {
        "allergies": ["Penicillin"],
        "conditions": []
    }
});

db.Patients.insertOne({
    "Patient_id": "PAT902",
    "name": "Jane Watson",
    "age": 29,
    "medical_history": {
        "allergies": [],
        "conditions": ["Asthma"]
    }
});

db.Patients.find({
    "medical_history.conditions": "Asthma"
}).pretty();

db.Patients.updateOne(
    { "Patient_id": "PAT901" },
    {
        $push: {
            "medical_history.conditions": "Hypertension"
        }
    }
);

db.Patients.deleteOne({
    "Patient_id": "PAT902"
});
const resume = {
    "Name": "Natarajan Thanaraj",
    "Qualification": "Mechanical Engineering Graduate",
    "CGPA": "8",
    "University name": "ACCET Karaikudi Anna university",
    "Passed out year": "2015",
    "Years of experience": "3",
    "Age": "28",
    "Location": "Ariyalur",
    "Overseas Experience": "1 year",
    "Language Known": "Tamil,English",
    "Interest": "Sports and career developing",
    "Programming Exp": "No",
    "Programming Languages": "Javascript Basics",
    "Scripting languages": "HTML",
    "Other Skills": "Engineering and General aptitude",
    "Basic Web Knowledge": "Yes",
    "IT Experience": "No"
};

// for in loop to iterate the object: Exercise 1
//========================== Solution=================
for (let property in resume) {
    console.log(`${property} : ${resume[property]}`);
};

//===============================Result below for your reference==========
//[Running] node "d:\Guvi class\Day 3\task\task3.js"
// Name : Natarajan Thanaraj
// Qualification : Mechanical Engineering Graduate
// CGPA : 8
// University name : ACCET Karaikudi Anna university
// Passed out year : 2015
// Years of experience : 3
// Age : 28
// Location : Ariyalur
// Overseas Experience : 1 year
// Language Known : Tamil,English
// Interest : Sports and career developing
// Programming Exp : No
// Programming Languages : Javascript Basics
// Scripting languages : HTML
// Other Skills : Engineering and General aptitude
// Basic Web Knowledge : Yes
// IT Experience : No

// [Done] exited with code=0 in 0.12 seconds


//for of loop to iterate over the object;
//================Exercise 2 =================
for (const keys of Object.keys(resume)) {
    console.log(`${keys}: ${resume[keys]}`);
};
//================result =================
// [Running] node "d:\Guvi class\Day 3\task\task3.js"
// Name: Natarajan Thanaraj
// Qualification: Mechanical Engineering Graduate
// CGPA: 8
// University name: ACCET Karaikudi Anna university
// Passed out year: 2015
// Years of experience: 3
// Age: 28
// Location: Ariyalur
// Overseas Experience: 1 year
// Language Known: Tamil,English
// Interest: Sports and career developing
// Programming Exp: No
// Programming Languages: Javascript Basics
// Scripting languages: HTML
// Other Skills: Engineering and General aptitude
// Basic Web Knowledge: Yes
// IT Experience: No

// [Done] exited with code=0 in 0.134 seconds
//================Exercise 3 =================
for (const [key, value] of Object.entries(resume)) {
    console.log(`${key}: ${value}`);
};
// //================result =================
// [Running] node "d:\Guvi class\Day 3\task\task3.js"
// Name: Natarajan Thanaraj
// Qualification: Mechanical Engineering Graduate
// CGPA: 8
// University name: ACCET Karaikudi Anna university
// Passed out year: 2015
// Years of experience: 3
// Age: 28
// Location: Ariyalur
// Overseas Experience: 1 year
// Language Known: Tamil,English
// Interest: Sports and career developing
// Programming Exp: No
// Programming Languages: Javascript Basics
// Scripting languages: HTML
// Other Skills: Engineering and General aptitude
// Basic Web Knowledge: Yes
// IT Experience: No

// [Done] exited with code=0 in 0.146 seconds

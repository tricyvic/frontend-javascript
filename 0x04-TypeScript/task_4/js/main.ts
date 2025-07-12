const cTeacher: Subjects.Teacher = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  experienceTeachingC: 10,
}

export const cpp = new Subjects.Cpp(cTeacher);

// set cTeacher as the teacher of cpp, call the two methods getRequirements and getAvailableTeacher and print the strings they return
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
export const java = new Subjects.Java(cTeacher);

// contains these tests: for Java subject, log to the console “Java, set cTeacher as the teacher of java, call the two methods getRequirements and getAvailableTeacher and print the strings they return
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
export const react = new Subjects.React(cTeacher); 

// contains these tests: for React subject, log to the console “React, set cTeacher as the teacher of react, call the two methods getRequirements and getAvailableTeacher and print the strings they return
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());



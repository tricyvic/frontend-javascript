interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  // Add the possibility to add any attribute to the Object like contract(boolean) without specifying the name of the attribute
  [propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface DirectorInterface extends Directors {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface extends Teacher {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

const table = document.createElement("table");
table.appendChild(document.createElement("thead"));
table.appendChild(document.createElement("tbody"));

const thead = table.querySelector("thead");
if (thead !== null) {
  thead.appendChild(document.createElement("tr"));
  let tr = thead.querySelector("tr");
  if (tr !== null) {
    tr.appendChild(
      document
        .createElement("th")
        .appendChild(document.createTextNode("First Name"))
    );
    tr.appendChild(
      document
        .createElement("th")
        .appendChild(document.createTextNode("Last Name"))
    );
    tr.appendChild(
      document.createElement("th").appendChild(document.createTextNode("Age"))
    );
    tr.appendChild(
      document
        .createElement("th")
        .appendChild(document.createTextNode("Location"))
    );
  }
}
document.body.appendChild(table);
const tbody = table.querySelector("tbody");
function addRow(fname: string, lname: string, age: number, location: string) {
  const row = document.createElement("tr");
  row.appendChild(
    document.createElement("td").appendChild(document.createTextNode(fname))
  );
  row.appendChild(
    document.createElement("td").appendChild(document.createTextNode(lname))
  );
  row.appendChild(
    document
      .createElement("td")
      .appendChild(document.createTextNode(age.toString()))
  );
  row.appendChild(
    document.createElement("td").appendChild(document.createTextNode(location))
  );
  if (tbody !== null) {
    tbody.appendChild(row);
  }
}
let student = {
  firstName: "John",
  lastName: "Kamau",
  age: 23,
  location: "Kayole",
};

let student2 = {
  firstName: "Jane",
  lastName: "Katel",
  age: 23,
  location: "Kayole",
};
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

addRow(student.firstName, student.lastName, student.age, student.location);
addRow(student2.firstName, student2.lastName, student2.age, student2.location);
// let studentsList: Student[] = [];


function printTeacher(firstName: string, lastName: string):string{
  return `${firstName[0]}. ${lastName}`;
}

class StudentClass implements Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
  constructor(firstName:string, lastName:string, age:number, location:string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  workOnHomework(): string {
    return 'Currently working';
  }
  displayName(): string {
    return this.firstName;
  }

}

class Director implements DirectorInterface {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  numberOfReports: number;

  constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, yearsOfExperience: number, location: string, numberOfReports: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.yearsOfExperience = yearsOfExperience;
    this.location = location;
    this.numberOfReports = numberOfReports;
  }

  workFromHome(): string {
    return 'Working from home';
  }
  
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  
  workDirectorTasks(): string {
    return 'Working director tasks';
  }
}

class TeacherClass implements TeacherInterface {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;

  constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, yearsOfExperience: number, location: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.yearsOfExperience = yearsOfExperience;
    this.location = location;
  }

  workFromHome(): string {
    return 'Cannot work from home';
  }
  
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary:number|string): Teacher | Director {
  if (typeof salary === 'number' && salary < 50000) {
    return new TeacherClass('John', 'Doe', true, 5, 'New York');
  } else {
    return new Director('Jane', 'Smith', true, 10, 'Los Angeles', 5);
  }
}

function isDirector(employee: Teacher | Director): employee is Director {
  return (employee as Director).numberOfReports !== undefined;
}

function executeWork(employee: Teacher | Director): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  switch (todayClass) {
    case 'Math':
      return 'Teaching Math';
    case 'History':
      return 'Teaching History';
    default:
      return 'Unknown subject';
  }
}
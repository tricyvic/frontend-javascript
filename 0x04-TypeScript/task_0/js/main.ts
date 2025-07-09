interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
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
function addRow(fname, lname, age, location) {
  const row = document.createElement("tr");
  row.appendChild(
    document.createElement("td").appendChild(document.createTextNode(fname))
  );
  row.appendChild(
    document.createElement("td").appendChild(document.createTextNode(lname))
  );
  row.appendChild(
    document.createElement("td").appendChild(document.createTextNode(age))
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

addRow(student.firstName, student.lastName, student.age, student.location);
addRow(student2.firstName, student2.lastName, student2.age, student2.location);


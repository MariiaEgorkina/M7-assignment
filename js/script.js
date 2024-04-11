// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM

const form = document.getElementById('addForm');
const employeeTable = document.getElementById('employees');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER

let employeeCount = 0;
const empCountDisplay = document.getElementById('empCount');


// ADD EMPLOYEE

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // PREVENT FORM SUBMISSION


    // GET THE VALUES FROM THE TEXT BOXES

    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const extension = document.getElementById('extension').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;


    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE

    const newRow = employeeTable.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW

    const idCell = newRow.insertCell();
    const nameCell = newRow.insertCell();
    const extensionCell = newRow.insertCell();
    const emailCell = newRow.insertCell();
    const departmentCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS

    idCell.appendChild(document.createTextNode(id));
    nameCell.appendChild(document.createTextNode(name));
    extensionCell.appendChild(document.createTextNode(extension));
    emailCell.appendChild(document.createTextNode(email));
    departmentCell.appendChild(document.createTextNode(department));

    // CREATE THE DELETE BUTTON

    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm';
    deleteButton.appendChild(document.createTextNode('Delete'));
    deleteCell.appendChild(deleteButton);

    // RESET THE FORM

    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX

    document.getElementById('id').focus();


    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
   
    employeeCount++;
})

// DELETE EMPLOYEE

employeeTable.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') { 
        const row = e.target.parentElement.parentElement; 
        employeeTable.deleteRow(row.rowIndex); 
        employeeCount--; 
    }
});
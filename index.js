const mysql = require('mysql2');
const inquirer = require("inquirer")
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: 'BackPack#35',
      database: 'employees_db'
    },
  );

  const questions = [
    {
        type: 'list',
        message: 'What do you want to do?',
        name: 'option',
        choices: ["view all departments", "view all roles", "view all employees", "add a department",
                "add a role", "add an employee", "update an employee role"]
      },
        ]
    
 function init (){
inquirer.prompt(questions).then((responses)=>{
    console.log(responses)
    viewDepartments()
    viewRoles()
    viewEmployees()
    addDepartment()
    addEmployee()
    updateEmployee()
})
}
function viewDepartments(){
    const sql = `SELECT * FROM department`;
  
  db.query(sql, (err, rows) => {
    if (err) {
       return;
    }
    console.table(rows)
    init()
  });
}

function viewRoles(){
    const sql = `SELECT * FROM roles`;
  
  db.query(sql, (err, rows) => {
    if (err) {
       return;
    }
    console.table(rows)
    init()
  });
}

function viewEmployees(){
    const sql = `SELECT * FROM employee`;
  
  db.query(sql, (err, rows) => {
    if (err) {
       return;
    }
    console.log(rows)
    init()
  });
}

function addDepartment(){
    const sql = `SELECT * `;
  
  db.query(sql, (err, rows) => {
    if (err) {
       return;
    }
    console.table(rows)
    init()
  });
}

function addEmployee(){
    const sql = `SELECT * `;
  
  db.query(sql, (err, rows) => {
    if (err) {
       return;
    }
    console.table(rows)
    init()
  });
}

function updateEmployee(){
    const sql = `SELECT * `;
  
  db.query(sql, (err, rows) => {
    if (err) {
       return;
    }
    console.table(rows)
    init()
  });
}

init()

  
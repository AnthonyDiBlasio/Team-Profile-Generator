// link to page
const generateHTML = require('./src/Template');

// team profile
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

// node mods
const fs = require('fs');
const inquirer = require('inquirer');

const teamArray = [];

// prompts
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager?', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter manager name");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter managers ID number.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email.",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number",
        }
    ])
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager); 
       
    })
};

const addEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'Please choose employee role',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the employees name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter employee ID number',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter employee email address',
        },
        {    type: 'input',
            name: 'github',
            message: 'Please enter github username',
            when: (input) => input.role === 'Engineer',
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter college for intern',
            when: (input) => input.role === 'Intern',
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another employee?',
            default: false
        }
    ])
    .then(employeeData => {
        let {name, id, email, role, github, school, confirmAddEmployee} = employeeData;
        let employee = '';

        if (role === 'Engineer') {
            employee = new Engineer (name, id, email, github);

        }
        else if (role === 'Intern') {
            employee = new Intern (name, id, email, school);
        }

        teamArray.push(employee);
        if (confirmAddEmployee) {
            return addEmployee(teamArray);
        } else {
            return teamArray;
        }
    })
};


// create HTML file with fs
const writeFile = data => {
    console.log(data)
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Your team profile page has been created!')
        }
    })
};

addManager()
    .then(addEmployee)
    .then(teamArray => {
       
        return generateHTML(teamArray);
    })
    .then(pageHTML => {

        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });
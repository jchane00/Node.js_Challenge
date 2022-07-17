// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
   {

    type: 'input',
    name: 'name',
    message: 'What is your projects name?',
},
{
    type:'list',
    name: 'license',
    message: 'Apply License',
    choices: [
        "License 1",
        "License 2",
        "License 3",
    ],
},
{
    type: 'input',
    name: 'description',
    message: 'Describe your project'
},
{
    type: 'input',
    name: 'test',
    message: 'What is the command to test the project?'
},
{
    type: 'input',
    name: 'InstallationGuide',
    message: 'What steps are required for installation?',
},
{
    type:'input',
    name:'usage'
    message:'What problem does this project solve?',
},
{
    type: 'input',
    name: 'github',
    message: 'What is your github username?'
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',

},
{
    type: 'input',
    name: 'contributors',
    message: 'Who contributed to this project?',
},
];

// TODO: Create a function to write README file
function writeToFile(data) {
    return fs.writeFile('Readme.md', data, (err)=> {
        if(err) throw err
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        console.table(answers)
writeToFile(generateMarkdown(answers))
    })
}

// Function call to initialize app
init();

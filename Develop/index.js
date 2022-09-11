// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your Project Title.',
      },
    {
        type: 'input',
        name: 'description',
        message: 'Enter your project Description.',
      },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe the installation of your project.',
      },
    {
        type: 'input',
        name: 'usage',
        message: 'How you use the application',
      },
    {
        type: 'input',
        name: 'contributing',
        message: 'what does this project contribute to',
      },
    {
        type: 'list',
        name: 'license',
        message: 'Enter your license.',
        choices: ["MIT", "Apache", "GNU", "none"]
      },
    {
        type: 'input',
        name: 'email',
        message: 'what is your email address?',
      },
    {
        type: 'input',
        name: 'github',
        message: 'what is your Github ID?',
      },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter your test results.',
      },                        
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Successfully created Readme')
    );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(answers => {
    const formattedAnswer = generateMarkdown(answers)
    writeToFile("./dist/readme.md", formattedAnswer)
  })
}

// Function call to initialize app
init();

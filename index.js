// Include file system and inquirer packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require('./utils/generate-markdown.js')

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your application.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions for your application.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage instructions for your application.',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Provide contributing guidelines for your application.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide test instructions for your application.',
    },
    {
        type: 'choice',
        name: 'license',
        message: 'How is your application licensed?',
        options: 'MIT'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub userneme?',
    },
];

// Create a function to initialize app
function init () {
    inquirer
        // Prompt the user
        .prompt ([...questions])
        // then pass the rosponses to the generateMarkdown function and write the response to a file
        .then((responses) => {
            fs.writeFile('./dist/README.md',
                generateMarkdown(responses), 
                'utf8',
                (err) => {
                    err ? console.error(err) : console.log("success");
                }
            )
        })
}

// Function call to initialize app
init ()
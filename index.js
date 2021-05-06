// Include file system and inquirer packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require('./utils/generate-markdown.js')

// Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: 'What is the title of your application?',
    },
    {
        name: 'description',
        message: 'Provide a description of your application.',
    },
    {
        name: 'installation',
        message: 'Provide installation instructions for your application.',
    },
    {
        name: 'usage',
        message: 'Provide usage instructions for your application.',
    },
    {
        name: 'contribute',
        message: 'Provide contributing guidelines for your application.',
    },
    {
        name: 'test',
        message: 'Provide test instructions for your application.',
    },
    {
        name: 'license',
        message: 'How is your application licensed?',
    },
    {
        name: 'email',
        message: 'What is your email address?',
    },
    {
        name: 'github',
        message: 'What is your GitHub userneme?',
    },
];


// create a function to ask the questions

// Create a function to write README file

// Create a function to initialize app

// Function call to initialize app

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
        type: 'list',
        name: 'license',
        message: 'How is your application licensed?',
        choices: [
            'Academic Free License v3.0',
            'Apache license 2.0',
            'Artistic license 2.0',
            'Boost Software License 1.0',
            'BSD 2-clause "Simplified" license',
            'BSD 3-clause "New" or "Revised" license',
            'BSD 3-clause Clear license',
            'Creative Commons license family',
            'Creative Commons Zero v1.0 Universal',
            'Creative Commons Attribution 4.0',
            'Creative Commons Attribution Share Alike 4.0',
            'Do What The F*ck You Want To Public License',
            'Educational Community License v2.0',
            'Eclipse Public License 1.0',
            'Eclipse Public License 2.0',
            'European Union Public License 1.1',
            'GNU Affero General Public License v3.0',
            'GNU General Public License family',
            'GNU General Public License v2.0',
            'GNU General Public License v3.0',
            'GNU Lesser General Public License family',
            'GNU Lesser General Public License v2.1',
            'GNU Lesser General Public License v3.0',
            'ISC',
            'LaTeX Project Public License v1.3c',
            'Microsoft Public License',
            'MIT',
            'Mozilla Public License 2.0',
            'Open Software License 3.0',
            'PostgreSQL License',
            'SIL Open Font License 1.1',
            'University of Illinois/NCSA Open Source License',
            'The Unlicense,zLib License',
        ]
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
// Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)
## Description 
${data.description}
## Table of Contents 
* [Description](#Description)  
* [Installation](#Installation)  
* [Usage](#Usage)  
* [Contributing](#Contributing)  
* [Tests](#Tests)  
* [Questions](#Questions)  
* [License](#License)  
## Installation 
${data.installation}
## Usage 
${data.usage}
## License
${data.title} is licensed under ${data.license}
## Contributing 
${data.contribute}
## Tests
${data.test}
## Questions
If you have any questions, contact me:\n
Email: ${data.email}\n
[GitHub Profile](https://github.com/${data.github})`;
  }
  
//   export generateMarkdown as a utility
module.exports = { generateMarkdown }
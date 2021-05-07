// Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
  
  `;
  }
  
//   export generateMarkdown as a utility
module.exports = { generateMarkdown }
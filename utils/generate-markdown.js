// Create a function to generate markdown for README
function generateMarkdown(data) {

  const licenses = [
    {license: 'Academic Free License v3.0', key: 'afl-3.0',},
    {license: 'Apache license 2.0', key: 'apache-2.0',},
    {license: 'Artistic license 2.0', key: 'artistic-2.0',},
    {license: 'Boost Software License 1.0', key: 'bsl-1.0',},
    {license: 'BSD 2-clause "Simplified" license', key: 'bsd-2-clause',},
    {license: 'BSD 3-clause "New" or "Revised" license', key: 'bsd-3-clause',},
    {license: 'BSD 3-clause Clear license', key: 'bsd-3-clause-clear',},
    {license: 'Creative Commons license family', key: 'cc',},
    {license: 'Creative Commons Zero v1.0 Universal', key: 'cc0-1.0',},
    {license: 'Creative Commons Attribution 4.0', key: 'cc-by-4.0',},
    {license: 'Creative Commons Attribution Share Alike 4.0', key: 'cc-by-sa-4.0',},
    {license: 'Do What The F*ck You Want To Public License', key: 'wtfpl',},
    {license: 'Educational Community License v2.0', key: 'ecl-2.0',},
    {license: 'Eclipse Public License 1.0', key: 'epl-1.0',},
    {license: 'Eclipse Public License 2.0', key: 'epl-2.0',},
    {license: 'European Union Public License 1.1', key: 'eupl-1.1',},
    {license: 'GNU Affero General Public License v3.0', key: 'agpl-3.0',},
    {license: 'GNU General Public License family', key: 'gpl',},
    {license: 'GNU General Public License v2.0', key: 'gpl-2.0',},
    {license: 'GNU General Public License v3.0', key: 'gpl-3.0',},
    {license: 'GNU Lesser General Public License family', key: 'lgpl',},
    {license: 'GNU Lesser General Public License v2.1', key: 'lgpl-2.1',},
    {license: 'GNU Lesser General Public License v3.0', key: 'lgpl-3.0',},
    {license: 'ISC', key: 'isc',},
    {license: 'LaTeX Project Public License v1.3c', key: 'lppl-1.3c',},
    {license: 'Microsoft Public License', key: 'ms-pl',},
    {license: 'MIT', key: 'mit',},
    {license: 'Mozilla Public License 2.0', key: 'mpl-2.0',},
    {license: 'Open Software License 3.0', key: 'osl-3.0',},
    {license: 'PostgreSQL License', key: 'postgresql',},
    {license: 'SIL Open Font License 1.1', key: 'ofl-1.1',},
    {license: 'University of Illinois/NCSA Open Source License', key: 'ncsa',},
    {license: 'The Unlicense', key: 'unlicense',},
    {license: 'zLib License', key: 'zlib',},
  ]

  function getLicenseKey (inputLicense) {
    for(let i=0; i<licenses.length; i++) {
      if(licenses[i].license === inputLicense) {
        return licenses[i].key
      }
    }
  }

  return `# ${data.title}
![License: ${data.license}](https://img.shields.io/badge/License-${getLicenseKey(data.license)}-blue.svg)
## Description 
${data.description}
## Table of Contents 
* [Description](#Description)  
* [Installation](#Installation)  
* [License](#License) 
* [Usage](#Usage)  
* [Contributing](#Contributing)  
* [Tests](#Tests)  
* [Questions](#Questions)  
## Installation 
${data.installation}\n
## Usage 
${data.usage}\n
## License
${data.title} is licensed under ${data.license}\n
## Contributing 
${data.contribute}\n
## Tests
${data.test}\n
## Questions
If you have any questions, contact me:\n
Email: ${data.email}\n
[GitHub Profile](https://github.com/${data.github})`;
}
  
//   export generateMarkdown as a utility
module.exports = { generateMarkdown }
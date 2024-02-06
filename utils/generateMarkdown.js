// the function `generateMarkdown` takes in an object `data` and returns a string that represents a markdown template for a README file.
// the `data` parameter is an object that contains all the information needed to generate the markdown for the README.md file.
// @returns a string that represents the markdown content for a README.md file.


// function to generate markdown for README.md
function generateMarkdown(data) {
  return `# ${data.title}

[![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](LICENSE)

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## License
  ${data.license}
  
  ## Questions
  GitHub: [${data.github}](https://github.com/${data.github})
  
  Email: ${data.email}

`;
}

// `module.exports = generateMarkdown;` is exporting the `generateMarkdown` function so that it can be used in other files. By assigning `generateMarkdown` to `module.exports`, we are making the function available to other modules that require this file.
module.exports = generateMarkdown;

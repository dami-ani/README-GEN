// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## License
  [![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](LICENSE)
  
  ## Questions
  GitHub: [${data.github}](https://github.com/${data.github})
  
  Email: ${data.email}

`;
}

module.exports = generateMarkdown;

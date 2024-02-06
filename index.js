// this JavaScript code prompts the user with a series of questions to generate a README.md file for a project.

// importing 'fs' module.
const fs = require('fs');

// importing 'path' module.
const path = require('path');

// importing 'inquirer' libary.
const inquirer = require('inquirer');

// importing custom module `generateMarkdown`.
const generateMarkdown = require('./utils/generateMarkdown.js');

// importing util module for 'promisify' method.
const util = require('util');

// promisifying the writeFile funtion from the 'fs' module.
const writeFileAsync = util.promisify(fs.writeFile);

// if output directory does !not exist, create directory from the 'fs' module.
const outputDir = path.join(__dirname, 'output');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// array of questions for user.
const questions = [

  // PROJECT TITLE:
  // question object for user to enter project title.
  {
  type: 'input',
  name: 'title',
  message: 'What is your project title?',
  },


  // DESCRIPTION:
  // question object for user to enter description.
  {
  type: 'input',
  name: 'description',
  message: 'What is the decription of your project?',
  },


  // INSTALLATION:
  // question object for user to enter installation instructions.
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation intructions?',
  },


  // USAGE:
  // question object for user to enter usage information.
  {
    type: 'input',
    name: 'usage',
    message: 'What are the usage details?',
  },


  // CONTRIBUTING:
  // question object for user to enter contribution guidelines.
  {
    type: 'input',
    name: 'contributing',
    message: 'What are the contrubutions guidelines?',
  },


  //TESTS:
  // question object for user to enter test instructions.
  {
    type: 'input',
    name: 'tests',
    message: 'What are the testing instructions?',
  },


  // LICENSE:
  // question object for user to choose a license from a list.
  {
    type: 'list',
    name: 'license',
    message: 'Selecct a license for your project',
    choices: ['MIT', 'Unlicense', 'Apache-2.0', 'EPL-2.0'],
  },


  // QUESTIONS:
  // question object for user to enter their github username.
  { 
    type: 'input',
    name: 'github',
    message: 'What is your github username?',
  },

  
  // question object for user to enter their email address.
  { 
    type: 'input',
    name: 'email',
    message: 'what is your email address?',
  },
];

// function to write file to newly generated README.md in output folder.
function init() {
  inquirer.prompt(questions)
    .then((answers) => writeFileAsync(path.join(outputDir, 'README.md'), generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
}

// alternitive function to write file when the output folder already exsists.
/*function init() {
  inquirer.prompt(questions)
    .then((answers) => writeFileAsync('./output/README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));*/


// function call to initialize program.
init();



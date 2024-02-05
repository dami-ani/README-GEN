const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

  
  // PROJECT TITLE
  // question object for user to enter project title
  {
  type: 'input',
  name: 'title',
  message: 'What is your project title?',
  },


  // DESCRIPTION
  // question object for user to enter description
  {
  type: 'input',
  name: 'description',
  message: 'What is the decription of your project?',
  },


  // INSTALLATION
  // question object for user to enter installation instructions 
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation intructions?',
  },


  // USAGE
  // question object for user to enter usage information
  {
    type: 'input',
    name: 'usage',
    message: 'What are the usage details?',
  },


  // CONTRIBUTING
  // question object for user to enter contribution guidelines
  {
    type: 'input',
    name: 'contributing',
    message: 'What are the contrubutions guidelines?',
  },


  //TESTS 
  // question object for user to enter test instructions 
  {
    type: 'input',
    name: 'tests',
    message: 'What are the testing instructions?',
  },


  // LICENSE
  // question object for user to choose a license from a list
  // chosen license badge renders to the top of readme 
  {
    type: 'list',
    name: 'license',
    message: 'Selecct a license for your project',
    choices: ['MIT License', 'The Unlicense', 'Apache License 2.0', 'Eclipse Public License 2.0'],
  },


  // QUESTIONS SECTION
  // user enters github username, adds to the 'questions' section of readme
  { 
    type: 'input',
    name: 'github',
    message: 'What is your github username?',
  },
  // link to the users github profile 
  // user enters their email address, adds to the 'questions' section of readme with instruction on how to be reached
  { 
    type: 'input',
    name: 'email',
    message: 'what is your email address?',
  },


  // TABLE OF CONTENTS
  // table of contents links to corresponding section of readme 
];


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

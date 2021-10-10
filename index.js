// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [];
const promptUser = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name? (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter your name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: 'Please enter your github username (Required)',
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log('Please enter your GitHub username!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'title',
                message: 'Please enter the name of your project (Required)',
                validate: titleInput => {
                    if (titleInput) {
                        return true;
                    } else {
                        console.log('Please enter a title for your project!');
                        return false;
                    }
                }
            },
            {
                type: 'checkbox',
                name: 'languages',
                message: 'What programming languages are used with this project?',
                choices: ['Javascript', 'HTML', 'CSS', 'ES6', 'Python', 'jQuery', 'Bootstrap', 'Node']
            },
            {
                type: 'input',
                name: 'installation',
                message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
            },
            
            {
                type: 'input',
                name: 'usage',
                message: 'Provide instructions and exmaples for use. Include screenshots as needed. To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your readme using the following syntax: ````md ![alt text](assets/images/screenshot.png)````'
            },
            {
                type: 'input',
                name: 'credits',
                message: 'List your collaborators, if any, with links to their Github profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.'
            },
            {
                type: 'input',
                name: 'license',
                message: 'The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)'
            },
            {
                type: 'confirm',
                name: 'extras',
                message: 'Would you like to add further optional details to your readMe (Badges, features, contributing guidelines, tests)?',
                default: false
            }
        ])
}

const promptExtras = projectExtraData => {
    
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// TODO: Include packages needed for this application
const { ok } = require('assert');
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

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
                type: 'input',
                name: 'description',
                message: 'Please input a short description of your application.'
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
                type: 'checkbox',
                name: 'license',
                message: 'The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)',
                choices: ['Apache', 'Boost', 'BSD', 'CC0', 'Eclipse', 'GNU', 'IBM', 'ISC', 'MIT', 'Mozilla', 'Perl', 'Artistic', 'SIL', 'Unlicense', 'WTFPL', 'Zlib']
            },
            {
                type: 'input',
                name: 'features',
                message: 'If your project has a lot of features, consider adding a heading called "Features" and list them here.'
            },
            {
                type: 'input',
                name: 'Contribution Guidelines',
                message: 'If you would like other developers to contribute to this project, add the contribution guidelines here.'
            }

        ])
}
// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/readMe.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'Readme created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then(data => {
            return generateMarkdown(data);
        })
        .then(pageReadMe => {
            return writeFile(pageReadMe);
        })
        .then(writeFileResponse => {
            console.log(writeFileResponse);
        })
        .catch(err => {
            console.log(err);
        })
};

// Function call to initialize app
init();

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let yourLicense = '';
  if (license === 'Apache') {
    yourLicense = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'Boost') {
    yourLicense = `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  } else if (license === 'BSD') {
    yourLicense = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (license === 'CC0') {
    yourLicense = `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`;
  } else if (license === 'Eclipse') {
    yourLicense = `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
  } else if (license === 'GNU') {
    yourLicense = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === 'IBM') {
    yourLicense = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
  } else if (license === 'ISC') {
    yourLicense = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  } else if (license === 'MIT') {
    yourLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === 'Mozilla') {
    yourLicense = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === 'Perl') {
    yourLicense = `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`;
  } else if (license === 'Artistic') {
    yourLicense = `[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`;
  } else if (license === 'SIL') {
    yourLicense = `[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)`;
  } else if (license === 'Unlicense') {
    yourLicense = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  } else if (license === 'WTFPL') {
    yourLicense = `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`;
  } else if (license === 'Zlib') {
    yourLicense = `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`;
  } else {
    yourLicense = '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if (license === 'Apache') {
    licenseLink = 'https://opensource.org/licenses/Apache-2.0';
  } else if (license === 'Boost') {
    licenseLink = 'https://www.boost.org/LICENSE_1_0.txt';
  } else if (license === 'BSD') {
    licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
  } else if (license === 'CC0') {
    licenseLink = 'https://creativecommons.org/publicdomain/zero/1.0/';
  } else if (license === 'Eclipse') {
    licenseLink = 'https://opensource.org/licenses/EPL-1.0';
  } else if (license === 'GNU') {
    licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';
  } else if (license === 'IBM') {
    licenseLink = 'https://opensource.org/licenses/IPL-1.0';
  } else if (license === 'ISC') {
    licenseLink = 'https://opensource.org/licenses/ISC';
  } else if (license === 'MIT') {
    licenseLink = 'https://opensource.org/licenses/MIT';
  } else if (license === 'Mozilla') {
    licenseLink = 'https://opensource.org/licenses/MPL-2.0';
  } else if (license === 'Perl') {
    licenseLink = 'https://opensource.org/licenses/Artistic-2.0';
  } else if (license === 'Artistic') {
    licenseLink = 'https://opensource.org/licenses/Artistic-2.0';
  } else if (license === 'SIL') {
    licenseLink = 'https://opensource.org/licenses/OFL-1.1';
  } else if (license === 'Unlicense') {
    licenseLink = 'https://unlicense.org/';
  } else if (license === 'WTFPL') {
    licenseLink = 'http://www.wtfpl.net/about/';
  } else if (license === 'Zlib') {
    licenseLink = 'https://opensource.org/licenses/Zlib';
  } else {
    licenseLink = '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

  # Built by 
  
  ${data.name}

  # Description

  ${data.description}

  # Built with 
  
  ${data.languages}

  # Installation

  ${data.install}

  # Usage 

  ${data.usage}

  # Credits

  Collaborators on this project are as follows:
  
  ${data.credits}

  # Licenses

  ${data.license}

  # Tests

  # Questions

  Have questions about the project? Feel free to reach out to me at these locations:

  Email: ${data.email}

  Github: github.com/${data.github}
`;
}

module.exports = generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "GPL"){
    licenseBadge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
    else if(license === 'MIT') {
      licenseBadge = '![License](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)'
  } else if (license === 'Apache 2.0') {
      badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  } else {
    licenseBadge = ""
  }
  return licenseBadge;
}
  };
 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
if(license === "GPL"){
  licenseLink = 'https://www.gnu.org/licenses/gpl-3.0.en.html'
  else if(license === 'MIT') {
    licenseLink= 'https://choosealicense.com/licenses/mit/'
} else if (license === 'Apache 2.0') {
    licenseLink = 'https://apache.org/licenses/LICENSE-2.0'
} else {
  licenseLink = ""
}
return licenseLink;
}
};
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
if(license === 'None') {
  licenseSection = ''
} else {
  licenseSection =
  `License: ${license} `
}
return licenseSection;
};
// TODO: Create a function to generate markdown for README
// function generateMarkdown(answers) 
function generateMarkdown(answers) {
  return `
## Project Title
${answers.name}
  

# Description:
${answers.description}


## Table of Contents:
-[Name] (#name)
-[Description](#description)
-[Installation](#installation)
-[Usage](#usage)
-[License](#license)
-[Contributors](#contributors)
-[Test](#test)
-[Questions](#questions)


# Installation Instructions:
${answers.installationGuide}

# Usage:


# License:
${answers.license}

# Contributors:
${answers.contributors}

# Tests
${answers.tests}

# Questions
${answers.github}
${answers.email}


`;
}

module.exports = generateMarkdown;

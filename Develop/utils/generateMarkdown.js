// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![MIT](https://img.shields.io/badge/license-MIT-brightgreen)`;
  } else if (license === "Apache") {
    return `![Apache](https://img.shields.io/badge/license-Apache%202.0-brightgreen)`;
  } else if (license === "GNU") {
    return `![GNU](https://img.shields.io/badge/license-GNU-brightgreen)`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `[MIT](https://choosealicense.com/licenses/mit/)`;
  } else if (license === "Apache") {
    return `[Apache]( http://www.apache.org/licenses/)`;
  } else if (license === "GNU") {
    return `[GNU]( https://fsf.org/)`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
  } else if (license === "Apache") {
    return `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
  } else if (license === "GNU") {
    return `Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`;
  } else {
    return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents (Optional)
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  
  
  
  ## Usage
  ${data.usage}

 
  
  ## Contributing
  ${data.contributing}
  
  
  
  ## License
  
    ${renderLicenseLink(data.license)}
    ${renderLicenseSection(data.license)}

  

  
  
  
  ## Questions
  [Link to Github page](https://github.com/${data.github})
  If you need any more information please email me @ ${data.email}
  
  
  
  ## Tests
  ${data.tests}
  
  
`;
}

module.exports = generateMarkdown;

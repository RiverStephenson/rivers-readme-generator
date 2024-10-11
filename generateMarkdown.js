// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === "Boost") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  } else if (license === "Eclipse") {
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
  } else if (license === undefined) {
    return ""
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache") {
    return "https://opensource.org/licenses/Apache-2.0"
  } else if (license === "Boost") {
    return "https://www.boost.org/LICENSE_1_0.txt"
  } else if (license === "Eclipse") {
    return "https://opensource.org/licenses/EPL-1.0"
  } else if (license === undefined) {
    return ""
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "Apache") {
    return "The license used for this project was Apache";
  } else if (license === "Boost") {
    return "The license used for this project was Boost";
  } else if (license === "Eclipse") {
    return "The license used for this project was Eclipse";
  } else if (license === undefined) {
    return "";
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description

${data.description} 

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## License

${renderLicenseLink(data.license)} ${renderLicenseSection(data.license)}

## Badges

${renderLicenseBadge(data.license)}
`;
}

export default generateMarkdown;

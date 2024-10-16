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
// This function is going to provide the license badge in the Badges section for the chosen license.

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache") {
    return "https://opensource.org/licenses/Apache-2.0"
  } else if (license === "Boost") {
    return "https://www.boost.org/LICENSE_1_0.txt"
  } else if (license === "Eclipse") {
    return "https://opensource.org/licenses/EPL-1.0"
  } else {
    return ""
  };
}
// This function is going to provide a link to the license chosen in the License section.

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
// This function provides a bit of context to the License section

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {title, description, installation, usage, credits, license} = data;
  return `# ${title}
## Description

${description} 

## Installation

${installation}

## Usage

${usage}

## Credits

${credits}

## License

${renderLicenseLink(license)} ${renderLicenseSection(license)}

## Badges

${renderLicenseBadge(license)}
`;
}
// This is the function that generates a markdown filled out with the provided data.

export default generateMarkdown;
// This lets the file know I might want to use this function elsewhere.
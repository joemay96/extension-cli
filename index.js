const inquirer = require('inquirer');
const listr = require('listr');
// const ora = require('ora')
const {createManifest} = require("./utils/createManifest");

inquirer
  .prompt([
    {
        type: "input",
        name: "name",
        // default default to the name of the current foldername
        message: "extension name: ",
        default: "extension-for-chrome-or-firefox"
    },
    {
        type: "input",
        name: "version",
        message: "version: ",
        default: "1.0.0",
    },
    {
        type: "input",
        name: "description",
        message: "Description: ",
        default: "",
    },
    {
        type: "input",
        name: "manifestVersion",
        message: "Manifest Version: ",
        default: 3
    },
    {
        type: "input",
        name: "author",
        message: "Author: ",
        default: ""
    },
    {
        type: "input",
        name: "locale",
        message: "Default locale: ",
        default: "en"
    },
    {
        type: "input",
        name: "license",
        message: "License: ",
        default: "MIT"
    },
    {
        type: "checkbox",
        name: "options",
        message: "Check the features needed for your project: ",
        choices: [
            "UI",
            "Options Page",
            "Content Scripts",
            "Background Scripts / Service Worker"
        ],
        default: ["UI", "Content Scripts"]
    }
  ])
  .then((answers) => {
    const status = createManifest(answers.name, answers.version, answers.description, answers.manifestVersion, answers.author, answers.locale, answers.license);
    console.log(status)
})
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
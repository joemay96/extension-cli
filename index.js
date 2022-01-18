const inquirer = require('inquirer');
const listr = require('listr');
// const ora = require('ora')

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
        type: "checkbox",
        name: "options",
        message: "Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection)",
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
    console.log(answers)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
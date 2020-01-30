const questions = [
  
];

function writeToFile(fileName, data) {
 
}

function init() {

}

init();

const inquirer = require("inquirer");
// using inquirer to get the username and the color pick
const fs = require("fs");
const generatehtml = require("./generatehtml");



inquirer
  .prompt([
    {
      type: "input",
      message: "What is your GitHub user name?",
      name: "username"
    },
    {
      type: "checkbox",
      message: "what is your favorite color?",
      name: "color",
      choices: [
          "red", "blue", "pink", "green"]
    }
  ])
  .then(function(data) {
      const filename = data.name.toLowerCase().split(' ').join('') + ".json";

      fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
        if (err) {
            return console.log (err);
        }  
        console.log("Success");
      })
  });